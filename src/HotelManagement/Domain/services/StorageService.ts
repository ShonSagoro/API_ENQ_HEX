export default interface StorageService {
    saveImage(file: Express.Multer.File): Promise<string|null>;
    deleteImage(url: string): Promise<void>;
}