import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_4SVAx5rCkBKQ@ep-misty-tooth-aisbynf9-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require",
  },
});