/*
  Warnings:

  - A unique constraint covering the columns `[place_id,recorded_at]` on the table `turnout_records` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `recorded_at` to the `turnout_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `turnout_records` ADD COLUMN `recorded_at` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `turnout_records_place_id_recorded_at_key` ON `turnout_records`(`place_id`, `recorded_at`);
