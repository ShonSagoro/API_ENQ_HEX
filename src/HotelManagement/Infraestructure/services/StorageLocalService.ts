import dotenv from 'dotenv';
import StorageService from "../../Domain/services/StorageService";
import fs from 'fs';
import path from 'path';

dotenv.config();

export default class StorageLocalService implements StorageService {
    async saveImage(file: any): Promise<string|null> {
        try {
            const uploadDirectory = path.join(__dirname, '../public'); 

            if (!fs.existsSync(uploadDirectory)) {
                fs.mkdirSync(uploadDirectory, { recursive: true });
            }

            const filePath = path.join(uploadDirectory, file.originalname);

            // Leemos el archivo directamente del almacenamiento temporal
            fs.readFile(file.path, (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo:', err);
                    return null;
                }

                // Escribimos el contenido del archivo en el sistema de archivos local
                fs.writeFile(filePath, data, (err) => {
                    if (err) {
                        console.error('Error al escribir el archivo:', err);
                        return null;
                    }
                });
            });

            return filePath;
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    async deleteImage(url: string): Promise<void> {
        try {
            const filePath = path.join(__dirname, '../public', url);

            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log('Archivo eliminado:', filePath);
            } else {
                console.log('El archivo no existe:', filePath);
            }
        } catch (error) {
            console.error('Error al eliminar el archivo:', error);
        }
    }
}
