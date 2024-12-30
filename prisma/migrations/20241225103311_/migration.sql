/*
  Warnings:

  - You are about to drop the `mv_planejamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "mv_planejamento" DROP CONSTRAINT "mv_planejamento_id_modulo_fkey";

-- DropForeignKey
ALTER TABLE "mv_planejamento" DROP CONSTRAINT "mv_planejamento_id_sistema_fkey";

-- DropForeignKey
ALTER TABLE "mv_planejamento" DROP CONSTRAINT "mv_planejamento_id_submodulo_fkey";

-- DropForeignKey
ALTER TABLE "mv_planejamento" DROP CONSTRAINT "mv_planejamento_id_usuario_fkey";

-- DropTable
DROP TABLE "mv_planejamento";

-- CreateTable
CREATE TABLE "planejamento" (
    "id_planejamento" SERIAL NOT NULL,
    "nome_planejamento" TEXT NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_submodulo" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "modulo_novo" BOOLEAN,
    "previsao_inicio" TIMESTAMP(3),
    "previsao_fim" TIMESTAMP(3),
    "etapa_elicitacao" BOOLEAN,
    "etapa_roteiro" BOOLEAN,
    "etapa_video" BOOLEAN,
    "etapa_validacao" BOOLEAN,
    "etapa_finalizado" BOOLEAN,
    "proposta" TEXT,
    "roteiro" TEXT,
    "impedimentos" TEXT,
    "observacoes" TEXT,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "planejamento_pkey" PRIMARY KEY ("id_planejamento")
);

-- AddForeignKey
ALTER TABLE "planejamento" ADD CONSTRAINT "planejamento_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planejamento" ADD CONSTRAINT "planejamento_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planejamento" ADD CONSTRAINT "planejamento_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planejamento" ADD CONSTRAINT "planejamento_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
