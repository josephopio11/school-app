"use server";

import { lucia } from "@/auth";
import db from "@/lib/db";
import { loginSchema, LoginValues } from "@/lib/validation";
import { verify } from "@node-rs/argon2";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(
  credentials: LoginValues
): Promise<{ error: string }> {
  try {
    const { username, password } = loginSchema.parse(credentials);

    const exisitingUser = await db.user.findFirst({
      where: {
        username: {
          equals: username,
          // mode:"insensitive"
        },
      },
    });

    if (!exisitingUser || !exisitingUser.passwordHash) {
      return { error: "Incorrect username or password. Please try again." };
    }

    const validPassword = await verify(exisitingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!validPassword) {
      return { error: "Incorrect username or password. Please try again." };
    }

    const session = await lucia.createSession(exisitingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return { error: "Something went wrong. Please try again." };
  }
}
