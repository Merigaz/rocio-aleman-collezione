-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "color" TEXT[],
    "size" TEXT[],
    "description" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "categoriesID" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MainCategories" (
    "id" SERIAL NOT NULL,
    "categories" TEXT NOT NULL,

    CONSTRAINT "MainCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategories" (
    "id" SERIAL NOT NULL,
    "subCategorie" TEXT NOT NULL,
    "mainCategorieID" INTEGER NOT NULL,

    CONSTRAINT "SubCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "productID" INTEGER NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesID_fkey" FOREIGN KEY ("categoriesID") REFERENCES "SubCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategories" ADD CONSTRAINT "SubCategories_mainCategorieID_fkey" FOREIGN KEY ("mainCategorieID") REFERENCES "MainCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
