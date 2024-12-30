-- CreateTable
CREATE TABLE "mv_release" (
    "id_release" SERIAL NOT NULL,
    "numero_release" INTEGER NOT NULL,
    "versao_gestores" TEXT NOT NULL,
    "versao_sincdata" TEXT NOT NULL,
    "versao_gestorpdv" TEXT NOT NULL,
    "versao_balcao" TEXT NOT NULL,
    "data_inclusao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "mv_release_pkey" PRIMARY KEY ("id_release")
);

-- CreateTable
CREATE TABLE "mv_release_item" (
    "id_item_release" SERIAL NOT NULL,
    "nome_release" TEXT NOT NULL,
    "id_release" INTEGER NOT NULL,
    "id_sistema" INTEGER NOT NULL,
    "id_modulo" INTEGER NOT NULL,
    "id_submodulo" INTEGER NOT NULL,
    "correcao" BOOLEAN NOT NULL,
    "alteracao" BOOLEAN NOT NULL,
    "imagem" TEXT,
    "observacao" TEXT,

    CONSTRAINT "mv_release_item_pkey" PRIMARY KEY ("id_item_release")
);

-- AddForeignKey
ALTER TABLE "mv_release_item" ADD CONSTRAINT "mv_release_item_id_release_fkey" FOREIGN KEY ("id_release") REFERENCES "mv_release"("id_release") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_release_item" ADD CONSTRAINT "mv_release_item_id_sistema_fkey" FOREIGN KEY ("id_sistema") REFERENCES "sistema"("id_sistema") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_release_item" ADD CONSTRAINT "mv_release_item_id_modulo_fkey" FOREIGN KEY ("id_modulo") REFERENCES "aba"("id_modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_release_item" ADD CONSTRAINT "mv_release_item_id_submodulo_fkey" FOREIGN KEY ("id_submodulo") REFERENCES "modulo"("id_submodulo") ON DELETE RESTRICT ON UPDATE CASCADE;
