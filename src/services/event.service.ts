import { prisma } from "../lib/prisma.js"

export const getEvents = async () => {
    return prisma.event.findMany({
        orderBy: {
            date: "asc",
        },
    });
};

export const createEvent = async (data: {
    title: string;
    description?: string;
    date: Date;
    location: string;
}) => {
    return prisma.event.create({
        data,
    });
};

export const getEventById = async (id: number) => {
    return prisma.event.findUnique({
        where: {
            id,
        },
    });
};

export const updateEvent = async (
    id: number,
    data: {
        title: string;
        description?: string;
        date: Date;
        location: string;
    },
) => {
    return prisma.event.update({
        where: {
            id,
        },
        data,
    });
};

export const deleteEvent = async (id: number) => {
    return prisma.event.delete({
        where: {
            id,
        },
    });
}
