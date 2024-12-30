/*
  Warnings:

  - Added the required column `id_usuario` to the `mv_release` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mv_release" ADD COLUMN     "id_usuario" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "mv_release_item" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT true;

-- AddForeignKey
ALTER TABLE "mv_release" ADD CONSTRAINT "mv_release_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
