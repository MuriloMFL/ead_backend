-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('CLIENTE', 'TECNICO', 'SUPERVISOR', 'ADMINISTRATIVO');

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "id_franquia" INTEGER NOT NULL,
    "tipo_usuario" "TipoUsuario" NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_inativo" TIMESTAMP(3),
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "franquia" (
    "id_franquia" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "franquia_pkey" PRIMARY KEY ("id_franquia")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_login_key" ON "usuario"("login");

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_franquia_fkey" FOREIGN KEY ("id_franquia") REFERENCES "franquia"("id_franquia") ON DELETE RESTRICT ON UPDATE CASCADE;
