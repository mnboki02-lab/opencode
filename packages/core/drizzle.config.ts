import { defineConfig } from "drizzle-kit"

export default defineConfig({
  dialect: "sqlite",
  schema: ["./src/**/*.sql.ts", "./src/**/sql.ts"],
  out: "./migration",
  dbCredentials: {
    url: process.env.OPENCODE_DB_PATH || `${process.env.HOME}/.local/share/1hit/1hit.db`,
  },
})
