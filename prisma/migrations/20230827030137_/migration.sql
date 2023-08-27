/*
  Warnings:

  - You are about to drop the `Dia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tempo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Turma` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Dia";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tempo";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Turma";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Tempos" (
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tempos_id_key" ON "Tempos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tempos_value_key" ON "Tempos"("value");
