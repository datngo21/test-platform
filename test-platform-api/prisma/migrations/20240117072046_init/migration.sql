/*
  Warnings:

  - You are about to drop the column `sentence` on the `Question` table. All the data in the column will be lost.
  - Added the required column `description` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "sentence",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "question" TEXT NOT NULL;
