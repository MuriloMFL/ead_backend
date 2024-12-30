-- DropForeignKey
ALTER TABLE "questao" DROP CONSTRAINT "questao_id_aula_fkey";

-- DropForeignKey
ALTER TABLE "video" DROP CONSTRAINT "video_id_aula_fkey";

-- AlterTable
ALTER TABLE "faq" ALTER COLUMN "order" DROP NOT NULL;

-- AlterTable
ALTER TABLE "questao" ALTER COLUMN "id_aula" DROP NOT NULL,
ALTER COLUMN "order" DROP NOT NULL;

-- AlterTable
ALTER TABLE "video" ALTER COLUMN "id_aula" DROP NOT NULL,
ALTER COLUMN "order" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE SET NULL ON UPDATE CASCADE;
