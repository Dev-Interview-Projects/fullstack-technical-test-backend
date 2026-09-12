-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reservation` ADD CONSTRAINT `Reservation_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
