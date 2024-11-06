"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/db";

// Getting Session Functionality
export const getSession = async () => {
  // getting sessions
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

// Register New User Functionality
export const register = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;
  const formName = formData.get("name") as string;

  // check user in database
  const user = await prisma.user.findUnique({
    where: { username: formUsername },
  })
  console.log("DB USER", user)
  console.log(formPassword)

  if (!user) {
    const createUser = await prisma.user.create({
      data: {
        name: formName,
        username: formUsername,
        password: formPassword
      }
    })

    session.userId = createUser.id;
    session.username = createUser.username;
    session.isLoggedIn = true;
    session.role = createUser.role;

    await session.save();
    redirect("/login");
  }

  return { error: "User Already Registered. Please try to login" };
};


// Login Functionality
export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();

  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  // check user in database
  const user = await prisma.user.findUnique({
    where: { username: formUsername },
  })
  console.log("DB USER", user)
  console.log(formPassword)

  if (formUsername !== user?.username) {
    return { error: "Wrong Credentials" };
  }

  session.userId = user.id;
  session.username = user.username;
  session.isLoggedIn = true;
  session.role = user.role;

  await session.save();

  // Todo: Work on sending userId as URL Params
  // const userId = session.userId;

  if (session.role === "USER") {
    redirect("/dashboard/users/");
  }
  if (session.role === "ADMIN") {
    redirect("/dashboard/admin");
  }

};



// Logout Functionality
export const logout = async () => {
  const session = await getSession();

  session.destroy();
};


// Get all the users functionality
export const getUsers = async () => {
  const users = await prisma.user.findMany({
    where: {
      role: "USER"
    }
  });
  return users;
}
