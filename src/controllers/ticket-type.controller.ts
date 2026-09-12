import type { Request, Response } from "express";
import { getTicketTypes, createTicketType, getTicketTypeById, updateTicketType, deleteTicketType } from "../services/ticket-type.service.js";

export const getTicketTypesController = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const ticketTypes = await getTicketTypes();
    res.status(200).json(ticketTypes);
}

export const createTicketTypeController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { eventId, name, price, quantity } = req.body;
    const ticketType = await createTicketType({
        eventId,
        name,
        price,
        quantity
    });
    res.status(201).json(ticketType);
}

export const getTicketTypeByIdController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const ticketType = await getTicketTypeById(id);
    if (ticketType) {
        res.status(200).json(ticketType);
    } else {
        res.status(404).json({ message: "Ticket type not found" });
    }
}

export const updateTicketTypeController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const { name, price, quantity } = req.body;
    const ticketType = await updateTicketType(id, {
        name,
        price,
        quantity
    });
    res.status(200).json(ticketType);
}

export const deleteTicketTypeController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    await deleteTicketType(id);
    res.status(204).send();
}
