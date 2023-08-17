-- CreateTable
CREATE TABLE "User" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "class" INTEGER NOT NULL,
    "tags" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Avisos" (
    "author" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tags" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tempo" (
    "materia" TEXT NOT NULL,
    "prof" TEXT NOT NULL,
    "sala" TEXT NOT NULL,
    "inicial" TEXT NOT NULL,
    "final" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "img" TEXT NOT NULL,
    "ativity" TEXT,
    "turma_ref" INTEGER NOT NULL,
    CONSTRAINT "Tempo_turma_ref_fkey" FOREIGN KEY ("turma_ref") REFERENCES "Turma" ("ref") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Turma" (
    "ref" INTEGER NOT NULL,
    "day_ref" TEXT NOT NULL,
    CONSTRAINT "Turma_day_ref_fkey" FOREIGN KEY ("day_ref") REFERENCES "Dia" ("day") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "Dia" (
    "day" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Avisos_id_key" ON "Avisos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tempo_id_key" ON "Tempo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Turma_ref_key" ON "Turma"("ref");

-- CreateIndex
CREATE UNIQUE INDEX "Dia_day_key" ON "Dia"("day");

-- CreateIndex
CREATE UNIQUE INDEX "Dia_id_key" ON "Dia"("id");
