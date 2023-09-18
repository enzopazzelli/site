// Usando mongoose, voy a conectar MongoDB.
// user: enzopazzelli, pw: Stratocaster32
// 

import mongoose from "mongoose";

export default async function connect() {
    
    try {
        await mongoose.connect(process.env.MONGO);
      } catch (error) {
        throw new Error("Conexion fallida")
      }
}