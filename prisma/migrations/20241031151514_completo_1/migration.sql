/*
  Warnings:

  - You are about to drop the column `id_prova` on the `questao` table. All the data in the column will be lost.
  - You are about to drop the `_ProvaToQuestao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProvaToQuestao" DROP CONSTRAINT "_ProvaToQuestao_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProvaToQuestao" DROP CONSTRAINT "_ProvaToQuestao_B_fkey";

-- AlterTable
ALTER TABLE "questao" DROP COLUMN "id_prova";

-- DropTable
DROP TABLE "_ProvaToQuestao";

-- CreateTable
CREATE TABLE "mv_aula" (
    "id_mv_aula" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_franquia" INTEGER NOT NULL,
    "data_visto" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mv_aula_pkey" PRIMARY KEY ("id_mv_aula")
);

-- CreateTable
CREATE TABLE "mv_faq" (
    "id_mv_faq" SERIAL NOT NULL,
    "id_faq" INTEGER NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_franquia" INTEGER NOT NULL,
    "data_visto" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mv_faq_pkey" PRIMARY KEY ("id_mv_faq")
);

-- CreateTable
CREATE TABLE "mv_video" (
    "id_mv_video" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_franquia" INTEGER NOT NULL,
    "id_video" INTEGER NOT NULL,
    "data_visto" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mv_video_pkey" PRIMARY KEY ("id_mv_video")
);

-- CreateTable
CREATE TABLE "mv_prova" (
    "id_mv_prova" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_franquia" INTEGER NOT NULL,
    "id_prova" INTEGER NOT NULL,
    "nota" DOUBLE PRECISION NOT NULL,
    "data_visto" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mv_prova_pkey" PRIMARY KEY ("id_mv_prova")
);

-- CreateTable
CREATE TABLE "mv_questao" (
    "id_mv_questao" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "id_prova" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_franquia" INTEGER NOT NULL,
    "id_questao" INTEGER NOT NULL,
    "certo_errado" TEXT NOT NULL,
    "data_visto" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mv_questao_pkey" PRIMARY KEY ("id_mv_questao")
);

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_aula" ADD CONSTRAINT "mv_aula_id_franquia_fkey" FOREIGN KEY ("id_franquia") REFERENCES "franquia"("id_franquia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_faq_fkey" FOREIGN KEY ("id_faq") REFERENCES "faq"("id_faq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_faq" ADD CONSTRAINT "mv_faq_id_franquia_fkey" FOREIGN KEY ("id_franquia") REFERENCES "franquia"("id_franquia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_video_fkey" FOREIGN KEY ("id_video") REFERENCES "video"("id_video") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_video" ADD CONSTRAINT "mv_video_id_franquia_fkey" FOREIGN KEY ("id_franquia") REFERENCES "franquia"("id_franquia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_prova_fkey" FOREIGN KEY ("id_prova") REFERENCES "prova"("id_prova") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_prova" ADD CONSTRAINT "mv_prova_id_franquia_fkey" FOREIGN KEY ("id_franquia") REFERENCES "franquia"("id_franquia") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_questao_fkey" FOREIGN KEY ("id_questao") REFERENCES "questao"("id_questao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_prova_fkey" FOREIGN KEY ("id_prova") REFERENCES "prova"("id_prova") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_questao" ADD CONSTRAINT "mv_questao_id_franquia_fkey" FOREIGN KEY ("id_franquia") REFERENCES "franquia"("id_franquia") ON DELETE RESTRICT ON UPDATE CASCADE;
