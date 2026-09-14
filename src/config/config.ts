import "dotenv/config";

const PORT = Number(process.env.PORT ?? 3000);
const DATABASE_URL = process.env.DATABASE_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
const JWT_SECRET = process.env.JWT_SECRET;

if (!Number.isInteger(PORT)){
    throw new Error("PORT debe ser un número de puerto válido");
}

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL no está definido en las variables de entorno");
}

if (!FRONTEND_URL) {
    throw new Error("FRONTEND_URL no está definido en las variables de entorno");
}

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET no está definido en las variables de entorno");
}

export const config = {
    port: PORT,
    databaseUrl: DATABASE_URL,
    frontendUrl: FRONTEND_URL,
    jwtSecret: JWT_SECRET,
}
