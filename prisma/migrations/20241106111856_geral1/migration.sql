-- AlterTable
ALTER TABLE "faq" ALTER COLUMN "observacao" DROP NOT NULL;

-- AlterTable
ALTER TABLE "questao" ALTER COLUMN "alternativa_C" DROP NOT NULL,
ALTER COLUMN "alternativa_D" DROP NOT NULL;

-- AlterTable
ALTER TABLE "video" ALTER COLUMN "observacao" DROP NOT NULL;
