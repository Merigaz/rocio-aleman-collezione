/*
  Warnings:

  - You are about to drop the column `genderID` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `genderID` on the `SubCategories` table. All the data in the column will be lost.
  - You are about to drop the `Gender` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_genderID_fkey";

-- DropForeignKey
ALTER TABLE "SubCategories" DROP CONSTRAINT "SubCategories_genderID_fkey";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "genderID",
ADD COLUMN     "gender" TEXT;

-- AlterTable
ALTER TABLE "SubCategories" DROP COLUMN "genderID";

-- DropTable
DROP TABLE "Gender";
