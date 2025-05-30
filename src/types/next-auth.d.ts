import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      profileCompleted: boolean;
      role: string;
      avatarChoice?: string | null;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    profileCompleted: boolean;
    role: string;
    avatarChoice?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    profileCompleted: boolean;
    role: string;
  }
}