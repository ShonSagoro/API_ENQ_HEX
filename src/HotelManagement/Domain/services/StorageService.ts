export default interface StorageService {
    saveImage(file: any): Promise<string|null>;
    deleteImage(url: string): Promise<void>;
}