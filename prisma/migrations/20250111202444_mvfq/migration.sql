/*
  Warnings:

  - Made the column `id_aula` on table `mv_aula` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "mv_aula" DROP CONSTRAINT "mv_aula_id_aula_fkey";

-- DropForeignKey
ALTER TABLE "mv_faq" DROP CONSTRAINT "mv_faq_id_aula_fkey";

-- AlterTable
ALTER TABLE "mv_aula" ALTER COLUMN "id_aula" SET NOT NULL;

-- AlterTable
ALTER TABLE "mv_faq" ALTER COLUMN "id_aula" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE SET NULL ON UPDATE CASCADE;
