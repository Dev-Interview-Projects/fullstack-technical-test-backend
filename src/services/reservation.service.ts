import { prisma } from "../lib/prisma.js";

export const getReservations = async () => {
    return prisma.reservation.findMany({
        orderBy: {
            id: "asc",
        },
    });
};

export const getReservationById = async (id: number) => {
    return prisma.reservation.findUnique({
        where: {
            id,
        },
    });
};

export const createReservation = async (data: {
    userId: number;
    total: number;
    status?: "PENDING" | "CONFIRMED" | "CANCELLED";
}) => {
    return prisma.reservation.create({
        data,
    });
};

export const updateReservation = async (
    id: number,
    data: {
        status: "PENDING" | "CONFIRMED" | "CANCELLED";
        total: number;
    },
) => {
    return prisma.reservation.update({
        where: {
            id,
        },
        data,
    });
};

export const deleteReservation = async (id: number) => {
    return prisma.reservation.delete({
        where: {
            id,
        },
    });
};
