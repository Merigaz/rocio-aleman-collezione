/*
  Warnings:

  - You are about to drop the column `subcategoriesname` on the `Products` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_categoriesID_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_subcategoriesname_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "subcategoriesname",
ALTER COLUMN "categoriesID" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesID_fkey" FOREIGN KEY ("categoriesID") REFERENCES "SubCategories"("subCategorie") ON DELETE RESTRICT ON UPDATE CASCADE;
