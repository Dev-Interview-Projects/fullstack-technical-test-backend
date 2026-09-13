import type { Request, Response } from "express";
import { getReservations, getReservationById, createReservation, updateReservation, deleteReservation } from "../services/reservation.service.js";

export const getReservationsController = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const reservations = await getReservations();
    res.status(200).json(reservations);
}

export const getReservationByIdController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const reservation = await getReservationById(id);
    if (reservation) {
        res.status(200).json(reservation);
    } else {
        res.status(404).json({ message: "Reservation not found" });
    }
}

export const createReservationController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId, total, status } = req.body;
    const reservation = await createReservation({
        userId,
        total,
        status
    });
    res.status(201).json(reservation);
}

export const updateReservationController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const { status, total } = req.body;
    const reservation = await updateReservation(id, {
        status,
        total
    });
    res.status(200).json(reservation);
}

export const deleteReservationController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    await deleteReservation(id);
    res.status(204).send();
}
