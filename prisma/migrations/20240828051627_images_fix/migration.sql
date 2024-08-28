/*
  Warnings:

  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Images" DROP CONSTRAINT "Images_productID_fkey";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "images" TEXT[];

-- DropTable
DROP TABLE "Images";
