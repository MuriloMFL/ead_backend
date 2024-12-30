/*
  Warnings:

  - Changed the type of `tipo_usuario` on the `usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "tipo_usuario",
ADD COLUMN     "tipo_usuario" TEXT NOT NULL;

-- DropEnum
DROP TYPE "TipoUsuario";
