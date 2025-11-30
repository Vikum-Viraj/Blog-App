import { drizzle } from "drizzle-orm/mysql2";

// Initialize the database connection
export const db = drizzle({ 
  connection: { 
    uri: process.env.DATABASE_URL 
  }
});