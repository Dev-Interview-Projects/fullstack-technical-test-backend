import { prisma } from "../lib/prisma.js";

export const getTicketTypes = async () => {
  return prisma.ticketType.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

export const createTicketType = async (data: {
  eventId: number;
  name: string;
  price: number;
  quantity: number;
}) => {
  return prisma.ticketType.create({
    data,
  });
};

export const getTicketTypeById = async (id: number) => {
  return prisma.ticketType.findUnique({
    where: {
      id,
    },
  });
};

export const updateTicketType = async (
  id: number,
  data: {
    name: string;
    price: number;
    quantity: number;
  },
) => {
  return prisma.ticketType.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteTicketType = async (id: number) => {
  return prisma.ticketType.delete({
    where: {
      id,
    },
  });
};
