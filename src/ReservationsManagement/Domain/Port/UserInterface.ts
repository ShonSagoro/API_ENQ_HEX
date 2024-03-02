import { TokenServices } from "../services/TokenServices";
import { User } from "../Entities/User";
import { EncryptService } from "../services/EncriptServices";
import { Reservation } from "../Entities/Reservation";

export interface UserInterface {
    findByEmail(email: string): Promise<User | null>;
    findByUUID(uuid: string): Promise<User | null>;
    delete(uuid: string): Promise<void>;
    update(uuid:string, user: User): Promise<User | null>;
    list(): Promise<User[]|null>;
    updateUserVerifiedAt(uuid: string):Promise<void>;
    sing_up(user: User): Promise<User | null>;
    sing_in (email:string, password:string, encryptionService: EncryptService, tokenServices: TokenServices):Promise<User|null>;
    sing_out (uuid:string):Promise<void>; 
    notifyUser(uuid: string, reservation:Reservation): Promise<void>;

}
