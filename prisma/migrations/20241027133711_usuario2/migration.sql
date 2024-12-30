/*
  Warnings:

  - You are about to drop the column `nome` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `nome_usuario` to the `usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "nome",
ADD COLUMN     "nome_usuario" TEXT NOT NULL;
