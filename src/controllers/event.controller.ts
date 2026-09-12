import type { Request, Response } from "express";
import { getEvents, createEvent, getEventById, updateEvent, deleteEvent } from "../services/event.service.js";

export const getEventsController = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const events = await getEvents();
    res.status(200).json(events);
}

export const createEventController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { title, description, date, location } = req.body;
    const event = await createEvent({
        title,
        description,
        date,
        location
    });
    res.status(201).json(event);
}

export const getEventByIdController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const event = await getEventById(id);
    if (event) {
        res.status(200).json(event);
    } else {
        res.status(404).json({ message: "Event not found" });
    }
}

export const updateEventController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const { title, description, date, location } = req.body;
    const event = await updateEvent(id, {
        title,
        description,
        date: new Date(date),
        location
    });
    res.status(200).json(event);
}

export const deleteEventController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    await deleteEvent(id);
    res.status(204).send();
}
