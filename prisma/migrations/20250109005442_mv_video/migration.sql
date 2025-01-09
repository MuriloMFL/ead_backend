-- DropForeignKey
ALTER TABLE "mv_video" DROP CONSTRAINT "mv_video_id_aula_fkey";

-- AlterTable
ALTER TABLE "mv_video" ALTER COLUMN "id_aula" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE SET NULL ON UPDATE CASCADE;
