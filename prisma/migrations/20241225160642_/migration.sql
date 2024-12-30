/*
  Warnings:

  - You are about to drop the column `id_aula` on the `mv_prova` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "mv_prova" DROP CONSTRAINT "mv_prova_id_aula_fkey";

-- AlterTable
ALTER TABLE "mv_prova" DROP COLUMN "id_aula";
