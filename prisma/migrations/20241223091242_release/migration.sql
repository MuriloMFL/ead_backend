-- AlterTable
ALTER TABLE "mv_release_item" ALTER COLUMN "correcao" DROP NOT NULL,
ALTER COLUMN "alteracao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "questao" ADD COLUMN     "id_prova" INTEGER;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_prova_fkey" FOREIGN KEY ("id_prova") REFERENCES "prova"("id_prova") ON DELETE SET NULL ON UPDATE CASCADE;
