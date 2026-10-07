-- CreateTable
CREATE TABLE `places` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` INTEGER NOT NULL,
    `object` VARCHAR(512) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `registered_voters` INTEGER NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,

    UNIQUE INDEX `places_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incident_types` (
    `code` VARCHAR(4) NOT NULL,
    `name` VARCHAR(512) NOT NULL,

    PRIMARY KEY (`code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `incidents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `place_id` INTEGER NOT NULL,
    `incident_type_code` VARCHAR(4) NOT NULL,
    `description` TEXT NOT NULL,
    `reported_at` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `incidents_place_id_idx`(`place_id`),
    INDEX `incidents_reported_at_idx`(`reported_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `password_hash` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `incidents` ADD CONSTRAINT `incidents_place_id_fkey` FOREIGN KEY (`place_id`) REFERENCES `places`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `incidents` ADD CONSTRAINT `incidents_incident_type_code_fkey` FOREIGN KEY (`incident_type_code`) REFERENCES `incident_types`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
