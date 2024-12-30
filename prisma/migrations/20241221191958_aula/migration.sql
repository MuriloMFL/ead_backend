-- DropForeignKey
ALTER TABLE "faq" DROP CONSTRAINT "faq_id_aula_fkey";

-- AlterTable
ALTER TABLE "faq" ALTER COLUMN "id_aula" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE SET NULL ON UPDATE CASCADE;
