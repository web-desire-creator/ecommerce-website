import {pgTable, varchar , integer, serial} from "drizzle-orm/pg-core"
import {drizzle} from "drizzle-orm/vercel-postgres"
import {sql} from "@vercel/postgres"
export const db= drizzle(sql);
export const cartTable = pgTable("cart",{
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", {length:255}).notNull(),
  product_id:varchar("product_id",{length:255}).notNull(),
  quantity: integer("quantity").notNull(),
  size: varchar("size",{length:255}).notNull(),
  price: integer("price").notNull()
})