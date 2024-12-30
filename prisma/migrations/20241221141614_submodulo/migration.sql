/*
  Warnings:

  - You are about to drop the column `nome_modulo` on the `modulo` table. All the data in the column will be lost.
  - Added the required column `nome_submodulo` to the `modulo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "modulo" DROP COLUMN "nome_modulo",
ADD COLUMN     "nome_submodulo" TEXT NOT NULL;
