/*
  Warnings:

  - The values [male,female] on the enum `Gender` will be removed. If these variants are still used in the database, this will fail.
  - The `gender` column on the `UserProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Gender_new" AS ENUM ('MALE', 'FEMALE');
ALTER TABLE "UserProfile" ALTER COLUMN "gender" TYPE "Gender_new" USING ("gender"::text::"Gender_new");
ALTER TYPE "Gender" RENAME TO "Gender_old";
ALTER TYPE "Gender_new" RENAME TO "Gender";
DROP TYPE "Gender_old";
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isEmailVerified" DROP DEFAULT;

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender";
