/*
  Warnings:

  - The `tela` column on the `Products` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "tela",
ADD COLUMN     "tela" TEXT[];
