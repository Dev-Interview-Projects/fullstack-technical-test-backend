import "dotenv/config";

const PORT = Number(process.env.PORT ?? 3000);
const DATABASE_URL = process.env.DATABASE_URL;

if (!Number.isInteger(PORT)){
    throw new Error("PORT debe ser un número de puerto válido");
}

if (!DATABASE_URL) {
    throw new Error("DATABASE_URL no está definido en las variables de entorno");
}

export const config = {
    port: PORT,
    databaseUrl: DATABASE_URL,
}
