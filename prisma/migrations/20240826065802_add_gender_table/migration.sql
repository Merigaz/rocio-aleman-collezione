-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "genderID" INTEGER;

-- AlterTable
ALTER TABLE "SubCategories" ADD COLUMN     "genderID" INTEGER;

-- CreateTable
CREATE TABLE "Gender" (
    "id" SERIAL NOT NULL,
    "genderType" TEXT NOT NULL,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_genderID_fkey" FOREIGN KEY ("genderID") REFERENCES "Gender"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategories" ADD CONSTRAINT "SubCategories_genderID_fkey" FOREIGN KEY ("genderID") REFERENCES "Gender"("id") ON DELETE SET NULL ON UPDATE CASCADE;
