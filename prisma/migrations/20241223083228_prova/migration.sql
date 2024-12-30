-- DropForeignKey
ALTER TABLE "prova" DROP CONSTRAINT "prova_id_submodulo_fkey";

-- AlterTable
ALTER TABLE "prova" ALTER COLUMN "id_submodulo" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "prova" ADD CONSTRAINT "prova_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE SET NULL ON UPDATE CASCADE;
