-- DropForeignKey
ALTER TABLE "mv_questao" DROP CONSTRAINT "mv_questao_id_aula_fkey";

-- DropForeignKey
ALTER TABLE "mv_questao" DROP CONSTRAINT "mv_questao_id_prova_fkey";

-- AlterTable
ALTER TABLE "mv_questao" ALTER COLUMN "id_aula" DROP NOT NULL,
ALTER COLUMN "id_prova" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_prova_fkey" FOREIGN KEY ("id_prova") REFERENCES "prova"("id_prova") ON DELETE SET NULL ON UPDATE CASCADE;
