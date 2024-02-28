import dotenv from 'dotenv';
import StorageService from "../../Domain/services/StorageService";
import { Storage } from '@google-cloud/storage';
import { Readable } from 'nodemailer/lib/xoauth2';

dotenv.config();


export default class StorageGoogleService implements StorageService{
    private projectId = process.env.PROJECT_ID || '';
    private keyFilename = process.env.KEYFILENAME || '';
    private bucketName = process.env.BUCKET_NAME || '';
    private storage = new Storage({ projectId: this.projectId, keyFilename: this.keyFilename });

    async saveImage(file: any): Promise<string|null> {
        console.log(file);
        try {
            const bucket = this.storage.bucket(this.bucketName);
            const uploadedFile = await bucket.upload(file.path, {
                destination: file.originalname
            });
            
            const imageUrl = await uploadedFile[0].getSignedUrl({
                action: 'read',
                expires: '03-01-2500',
            });
    
            return imageUrl[0];
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    async deleteImage(url: string): Promise<void> {
        try {
            const parsedUrl = new URL(url);
            const fileName = parsedUrl.pathname.substr(1);

            const file = this.storage.bucket(this.bucketName).file(fileName);

            const exists = await file.exists();
            if (exists[0]) {
                await file.delete();
            } else {
                console.warn('File does not exist.');
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    getStorage(): Storage {
        return this.storage;
    }
}