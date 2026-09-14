import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../services/user.service.js";

export const getUsersController = async (
    _req: Request,
    res: Response
): Promise<void> => {
    const users = await getUsers();
    res.status(200).json(users);
}

export const getUserByIdController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const user = await getUserById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

export const createUserController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { name, email, password } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await createUser({
        name,
        email,
        passwordHash,
        role: "USER"
    });
    res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    });
}

export const updateUserController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    const { name, email, role } = req.body;
    const user = await updateUser(id, {
        name,
        email,
        role
    });
    res.status(200).json(user);
}

export const deleteUserController = async (
    req: Request,
    res: Response
): Promise<void> => {
    const id = Number(req.params.id);
    await deleteUser(id);
    res.status(204).send();
}
