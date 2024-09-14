"use server";

import { lucia } from "@/auth";
import db from "@/lib/db";
import { signUpSchema, SignUpValues } from "@/lib/validation";
import { hash } from "@node-rs/argon2";
import { generateIdFromEntropySize } from "lucia";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(
  credentials: SignUpValues,
): Promise<{ error: string }> {
  try {
    const { username, email, password } = signUpSchema.parse(credentials);

    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    const userId = generateIdFromEntropySize(10);

    const exisitingUsername = await db.user.findFirst({
      where: {
        username: {
          equals: username,
          // mode:"insensitive"
        },
      },
    });

    if (exisitingUsername) {
      return { error: "Username already taken" };
    }

    const exisitingEmail = await db.user.findFirst({
      where: {
        email: {
          equals: email,
          // mode:"insensitive"
        },
      },
    });

    if (exisitingEmail) {
      return { error: "Email already taken" };
    }

    await db.user.create({
      data: {
        id: userId,
        username,
        displayName: username,
        email,
        passwordHash,
      },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );

    return redirect("/");
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return { error: "Something went wrong. Please try again." };
  }
}
