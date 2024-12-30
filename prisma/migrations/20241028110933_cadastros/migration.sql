-- CreateTable
CREATE TABLE "sistema" (
    "id_sistema" SERIAL NOT NULL,
    "nome_sistema" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "sistema_pkey" PRIMARY KEY ("id_sistema")
);

-- CreateTable
CREATE TABLE "aba" (
    "id_aba" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "nome_aba" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "aba_pkey" PRIMARY KEY ("id_aba")
);

-- CreateTable
CREATE TABLE "modulo" (
    "id_modulo" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "nome_modulo" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "modulo_pkey" PRIMARY KEY ("id_modulo")
);

-- CreateTable
CREATE TABLE "aula" (
    "id_aula" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "nome_aula" TEXT NOT NULL,
    "cliente" BOOLEAN NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "aula_pkey" PRIMARY KEY ("id_aula")
);

-- CreateTable
CREATE TABLE "video" (
    "id_video" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "nome_video" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id_video")
);

-- CreateTable
CREATE TABLE "faq" (
    "id_faq" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "nome_faq" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "faq_pkey" PRIMARY KEY ("id_faq")
);

-- CreateTable
CREATE TABLE "questao" (
    "id_questao" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_aula" INTEGER NOT NULL,
    "id_prova" INTEGER NOT NULL,
    "questao" TEXT NOT NULL,
    "alternativa_A" TEXT NOT NULL,
    "alternativa_B" TEXT NOT NULL,
    "alternativa_C" TEXT NOT NULL,
    "alternativa_D" TEXT NOT NULL,
    "correta" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "questao_pkey" PRIMARY KEY ("id_questao")
);

-- CreateTable
CREATE TABLE "prova" (
    "id_prova" SERIAL NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_aba" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "nome_prova" TEXT NOT NULL,
    "cliente" BOOLEAN NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "prova_pkey" PRIMARY KEY ("id_prova")
);

-- CreateTable
CREATE TABLE "_ProvaToQuestao" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProvaToQuestao_AB_unique" ON "_ProvaToQuestao"("A", "B");

-- CreateIndex
CREATE INDEX "_ProvaToQuestao_B_index" ON "_ProvaToQuestao"("B");

-- AddForeignKey
ALTER TABLE "aba" ADD CONSTRAINT "aba_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modulo" ADD CONSTRAINT "modulo_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modulo" ADD CONSTRAINT "modulo_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questao" ADD CONSTRAINT "questao_id_aula_fkey" FOREIGN KEY ("id_aula") REFERENCES "aula"("id_aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prova" ADD CONSTRAINT "prova_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prova" ADD CONSTRAINT "prova_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "modulo"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prova" ADD CONSTRAINT "prova_id_aba_fkey" FOREIGN KEY ("id_aba") REFERENCES "aba"("id_aba") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProvaToQuestao" ADD CONSTRAINT "_ProvaToQuestao_A_fkey" FOREIGN KEY ("A") REFERENCES "prova"("id_prova") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProvaToQuestao" ADD CONSTRAINT "_ProvaToQuestao_B_fkey" FOREIGN KEY ("B") REFERENCES "questao"("id_questao") ON DELETE CASCADE ON UPDATE CASCADE;
