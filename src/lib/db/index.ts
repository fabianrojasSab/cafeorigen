import sqlite3 from "sqlite3";
import path from "path";

let db: sqlite3.Database | null = null;

export function getDb() {
  if (!db) {
    const dbPath = path.join(process.cwd(), "db", "ecommerce.sqlite");

    // Opcional: activar modo verbose para ver logs en consola
    // sqlite3.verbose();

    db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error("Error abriendo la base de datos SQLite:", err);
      } else {
        console.log("Conectado a SQLite en", dbPath);
      }
    });
  }
  return db;
}
