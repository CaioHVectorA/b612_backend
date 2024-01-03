/*
  Warnings:

  - You are about to drop the column `day_index` on the `Tempo` table. All the data in the column will be lost.
  - Added the required column `day` to the `Tempo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tempo" (
    "horario" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "isBreak" BOOLEAN NOT NULL,
    "sala" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "professorId" TEXT,
    "turmaId" TEXT,
    "id" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "Tempo_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Tempo_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tempo" ("horario", "id", "isBreak", "materia", "professorId", "sala", "turmaId") SELECT "horario", "id", "isBreak", "materia", "professorId", "sala", "turmaId" FROM "Tempo";
DROP TABLE "Tempo";
ALTER TABLE "new_Tempo" RENAME TO "Tempo";
CREATE UNIQUE INDEX "Tempo_id_key" ON "Tempo"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
