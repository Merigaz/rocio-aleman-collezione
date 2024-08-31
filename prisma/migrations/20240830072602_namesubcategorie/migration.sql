/*
  Warnings:

  - A unique constraint covering the columns `[subCategorie]` on the table `SubCategories` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "subcategoriesname" TEXT NOT NULL DEFAULT 'tela';

-- CreateIndex
CREATE UNIQUE INDEX "SubCategories_subCategorie_key" ON "SubCategories"("subCategorie");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_subcategoriesname_fkey" FOREIGN KEY ("subcategoriesname") REFERENCES "SubCategories"("subCategorie") ON DELETE RESTRICT ON UPDATE CASCADE;
