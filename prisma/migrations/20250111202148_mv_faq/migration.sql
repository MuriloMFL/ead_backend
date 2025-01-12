-- DropForeignKey
ALTER TABLE "mv_aula" DROP CONSTRAINT "mv_aula_id_aula_fkey";

-- AlterTable
ALTER TABLE "mv_aula" ALTER COLUMN "id_aula" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE SET NULL ON UPDATE CASCADE;
