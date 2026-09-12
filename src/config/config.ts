import "dotenv/config";

const PORT = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(PORT)){
    throw new Error("PORT debe ser un número de puerto válido");
}

export const config = {
    port: PORT
}
