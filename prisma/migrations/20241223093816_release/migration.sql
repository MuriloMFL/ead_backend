/*
  Warnings:

  - Added the required column `numero_release` to the `mv_release_item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mv_release_item" ADD COLUMN     "numero_release" INTEGER NOT NULL;
