/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ProfNote" (
    "uuid" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL DEFAULT ''
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfNote_uuid_key" ON "ProfNote"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "ProfNote_id_key" ON "ProfNote"("id");
