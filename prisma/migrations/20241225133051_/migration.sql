-- AlterTable
ALTER TABLE "release" ADD COLUMN     "finalizado" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "mv_release" (
    "id_mv_release" SERIAL NOT NULL,
    "id_release" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "data_visto" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mv_release_pkey" PRIMARY KEY ("id_mv_release")
);

-- AddForeignKey
ALTER TABLE "mv_release" ADD CONSTRAINT "mv_release_id_release_fkey" FOREIGN KEY ("id_release") REFERENCES "release"("id_release") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mv_release" ADD CONSTRAINT "mv_release_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
