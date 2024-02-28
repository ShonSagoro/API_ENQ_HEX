import dotenv from 'dotenv';
import StorageService from "../../Domain/services/StorageService";
import fs from 'fs';
import path from 'path';

dotenv.config();

export default class StorageLocalService implements StorageService {
    HOST_SERVER = process.env.HOST_SERVER || 'localhost';
    PORT_SERVER = Number(process.env.PORT_SERVER) || 8080;
    URL = `http://${this.HOST_SERVER}:${this.PORT_SERVER}/`;
    async saveImage(file: any): Promise<string|null> {
        try {
            console.log(file)
            console.log("el archivo es: ", file.originalname)
            const uploadDirectory = path.join(__dirname, '../../../../public/images'); 

            if (!fs.existsSync(uploadDirectory)) {
                fs.mkdirSync(uploadDirectory, { recursive: true });
            }

            const filePath = path.join(uploadDirectory, file.originalname);
            let url = this.URL   + file.originalname;
            fs.readFile(file.path, (err, data) => {
                if (err) {
                    console.error('Error al leer el archivo:', err);
                    return null;
                }

                fs.writeFile(filePath, data, (err) => {
                    if (err) {
                        console.error('Error al escribir el archivo:', err);
                        return null;
                    }
                });
            });
            


            return url;
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
