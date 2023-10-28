/*
  Warnings:

  - You are about to drop the column `can_use_zap` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `role` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
INSERT INTO "new_Admin" ("id", "name", "password") SELECT "id", "name", "password" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_id_key" ON "Admin"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
