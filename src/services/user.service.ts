import { prisma } from "../lib/prisma.js";

export const getUsers = async () => {
    return prisma.user.findMany({
        orderBy: {
            id: "asc",
        },
    });
};

export const getUserById = async (id: number) => {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
};

export const getUserByEmail = async (email: string) => {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
}

export const createUser = async (data: {
    name: string;
    email: string;
    passwordHash: string;
    role?: "USER" | "ADMIN";
}) => {
    return prisma.user.create({
        data,
    });
};

export const updateUser = async (
    id: number,
    data: {
        name: string;
        email: string;
        role: "USER" | "ADMIN";
    },
) => {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
};

export const deleteUser = async (id: number) => {
    return prisma.user.delete({
        where: {
            id,
        },
    });
};
