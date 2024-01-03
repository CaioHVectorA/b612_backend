-- CreateTable
CREATE TABLE "Tempo" (
    "horario" TEXT NOT NULL,
    "materia" TEXT NOT NULL,
    "day_index" INTEGER NOT NULL,
    "professorId" TEXT NOT NULL,
    "turmaId" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "Tempo_turmaId_fkey" FOREIGN KEY ("turmaId") REFERENCES "Turma" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tempo_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Turma" (
    "turma" INTEGER NOT NULL,
    "serie" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Professor" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Visits" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "device" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_Visits" ("createdAt", "device", "id") SELECT "createdAt", "device", "id" FROM "Visits";
DROP TABLE "Visits";
ALTER TABLE "new_Visits" RENAME TO "Visits";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Tempo_id_key" ON "Tempo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Turma_id_key" ON "Turma"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_id_key" ON "Professor"("id");
