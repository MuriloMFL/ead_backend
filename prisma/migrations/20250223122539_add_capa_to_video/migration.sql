-- DropForeignKey
ALTER TABLE "mv_prova" DROP CONSTRAINT "mv_prova_id_modulo_fkey";

-- AlterTable
ALTER TABLE "mv_prova" ALTER COLUMN "id_modulo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "video" ADD COLUMN     "capa" TEXT;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE SET NULL ON UPDATE CASCADE;
