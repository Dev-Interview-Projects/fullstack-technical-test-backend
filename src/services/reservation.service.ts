import { prisma } from "../lib/prisma.js";

export const getReservations = async () => {
    return prisma.reservation.findMany({
        orderBy: {
            id: "asc",
        },
        include: {
            items: true
        },
    });
};

export const getReservationById = async (id: number) => {
    return prisma.reservation.findUnique({
        where: {
            id,
        },
        include: {
            items: true
        },
    });
};

export const createReservation = async (data: {
    userId: number;
    items: {
        ticketTypeId: number;
        quantity: number;
    }[];
}) => {
    const ticketTypes = await prisma.ticketType.findMany({
        where: {
            id: {
                in: data.items.map((item) => item.ticketTypeId),
            },
        },
    });

    const ticketTypeMap = new Map(
        ticketTypes.map((ticket) => [ticket.id, ticket])
    );

    const total = data.items.reduce((sum, item) => {
        const ticketType = ticketTypeMap.get(item.ticketTypeId);
        if (!ticketType) {
            throw new Error("Ticket type no encontrado");
        }
        return sum + Number(ticketType.price) * item.quantity;
    }, 0);

    return prisma.reservation.create({
        data: {
            userId: data.userId,
            total,
            items: {
                create: data.items.map((item) => {
                    const ticketType = ticketTypeMap.get(item.ticketTypeId)!;
                    return {
                        ticketTypeId: item.ticketTypeId,
                        quantity: item.quantity,
                        unitPrice: Number(ticketType.price),
                    };
                }),
            },
        },
        include: {
            items: true
        },
    });
};

export const updateReservation = async (
    id: number,
    data: {
        status: "PENDING" | "CONFIRMED" | "CANCELLED";
    },
) => {
    return prisma.reservation.update({
        where: {
            id,
        },
        data,
        include: {
            items: true
        }
    });
};

export const deleteReservation = async (id: number) => {
    return prisma.reservation.delete({
        where: {
            id,
        },
    });
};
