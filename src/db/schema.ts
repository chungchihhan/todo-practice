import {
  index,
  pgTable,
  serial,
  text,
  unique,
  uuid,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const todosTable = pgTable(
  "todos",
  {
    id: serial("id").primaryKey(),
    displayId: uuid("display_id").defaultRandom().notNull().unique(),
    title: varchar("name", { length: 100 }).notNull(),
    description: text("description").notNull(),
  },
  (table) => ({
    displayIdIndex: index("display_id_index").on(table.displayId),
    titleIndex: index("title_index").on(table.title),
    descriptionIndex: index("description_index").on(table.description),
  }),
);
