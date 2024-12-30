/*
  Warnings:

  - The primary key for the `aba` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_aba` on the `aba` table. All the data in the column will be lost.
  - You are about to drop the column `nome_aba` on the `aba` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `aula` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `faq` table. All the data in the column will be lost.
  - The primary key for the `modulo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_aba` on the `modulo` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `mv_aula` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `mv_faq` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `mv_prova` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `mv_questao` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `mv_video` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `prova` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `questao` table. All the data in the column will be lost.
  - You are about to drop the column `id_aba` on the `video` table. All the data in the column will be lost.
  - Added the required column `nome_modulo` to the `aba` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `aula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `mv_aula` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `mv_faq` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `mv_prova` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `mv_questao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `mv_video` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `prova` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `questao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_submodulo` to the `video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "aula" DROP CONSTRAINT "aula_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "aula" DROP CONSTRAINT "aula_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "faq" DROP CONSTRAINT "faq_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "faq" DROP CONSTRAINT "faq_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "modulo" DROP CONSTRAINT "modulo_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "mv_aula" DROP CONSTRAINT "mv_aula_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "mv_aula" DROP CONSTRAINT "mv_aula_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "mv_faq" DROP CONSTRAINT "mv_faq_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "mv_faq" DROP CONSTRAINT "mv_faq_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "mv_prova" DROP CONSTRAINT "mv_prova_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "mv_prova" DROP CONSTRAINT "mv_prova_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "mv_questao" DROP CONSTRAINT "mv_questao_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "mv_questao" DROP CONSTRAINT "mv_questao_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "mv_video" DROP CONSTRAINT "mv_video_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "mv_video" DROP CONSTRAINT "mv_video_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "prova" DROP CONSTRAINT "prova_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "prova" DROP CONSTRAINT "prova_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "questao" DROP CONSTRAINT "questao_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "questao" DROP CONSTRAINT "questao_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "video" DROP CONSTRAINT "video_id_aba_fkey";

-- DropForeignKey
ALTER TABLE "video" DROP CONSTRAINT "video_id_modulo_fkey";

-- AlterTable
ALTER TABLE "aba" DROP CONSTRAINT "aba_pkey",
DROP COLUMN "id_aba",
DROP COLUMN "nome_aba",
ADD COLUMN     "id_modulo" SERIAL NOT NULL,
ADD COLUMN     "nome_modulo" TEXT NOT NULL,
ADD CONSTRAINT "aba_pkey" PRIMARY KEY ("id_modulo");

-- AlterTable
ALTER TABLE "aula" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "faq" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "modulo" DROP CONSTRAINT "modulo_pkey",
DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" SERIAL NOT NULL,
ALTER COLUMN "id_modulo" DROP DEFAULT,
ADD CONSTRAINT "modulo_pkey" PRIMARY KEY ("id_submodulo");
DROP SEQUENCE "modulo_id_modulo_seq";

-- AlterTable
ALTER TABLE "mv_aula" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "mv_faq" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "mv_prova" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "mv_questao" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "mv_video" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "prova" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "questao" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "video" DROP COLUMN "id_aba",
ADD COLUMN     "id_submodulo" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "modulo" ADD CONSTRAINT "modulo_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prova" ADD CONSTRAINT "prova_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prova" ADD CONSTRAINT "prova_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;
