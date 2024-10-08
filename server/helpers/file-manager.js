const path = require('path');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

class FileManager {
    async createFile(file) {
        if (!file) {
            throw new Error('No file provided');
        }

        const fileExtension = path.extname(file.originalname);
        let fileName;

        if (file.mimetype.startsWith('image/')) {
            fileName = await this.uploadImage(file);
        } else {
            fileName = await this.uploadFile(file, fileExtension);
        }

        return fileName;
    }
    
    async uploadFile(file, fileExtension) {
        const fileName = `${uuidv4()}${fileExtension}`;
        await this.ensureDirectoryExists('media');
        await fs.promises.writeFile(path.join('media', fileName), file.buffer);
        return fileName;
    }

    async uploadImage(file) {
        const imageName = `${uuidv4()}.webp`;

        const image = await this.sharpImage(file);
        await this.ensureDirectoryExists('media');
        const webpBuffer = await image.toFormat('webp').toBuffer();
        await fs.promises.writeFile(path.join('media', imageName), webpBuffer);
        
        return imageName;
    }

    async sharpImage(image) {
        let newImage = sharp(image.buffer);
        const metadata = await newImage.metadata();

        if (metadata.width && metadata.height) {
            const newWidth = Math.floor(metadata.width * 0.6);
            const newHeight = Math.floor(metadata.height * 0.6);
            newImage = newImage.resize(newWidth, newHeight);
        }

        return newImage
    }

    async ensureDirectoryExists(dir) {
        if (!fs.existsSync(dir)) {
            await fs.promises.mkdir(dir, { recursive: true });
        }
    }

    async deleteFile(filename){
        const filePath = path.join('media', filename);
        try {
            await fs.promises.unlink(filePath);
            console.log(`Файл ${filename} успешно удалён.`);
        } catch (error) {
            console.error(`Ошибка при удалении файла ${filename}:`, error.message);
            return
        }
    }
}

module.exports = new FileManager();
