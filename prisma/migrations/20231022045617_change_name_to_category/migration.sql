/*
  Warnings:

  - You are about to drop the column `tags` on the `Avisos` table. All the data in the column will be lost.
  - Added the required column `can_use_zap` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Avisos` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "can_use_zap" BOOLEAN NOT NULL
);
INSERT INTO "new_Admin" ("id", "name", "password") SELECT "id", "name", "password" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");
CREATE TABLE "new_Avisos" (
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Avisos" ("author", "body", "created_at", "id", "img", "title") SELECT "author", "body", "created_at", "id", "img", "title" FROM "Avisos";
DROP TABLE "Avisos";
ALTER TABLE "new_Avisos" RENAME TO "Avisos";
CREATE UNIQUE INDEX "Avisos_id_key" ON "Avisos"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
