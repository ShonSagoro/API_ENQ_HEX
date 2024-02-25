import { Collection } from "mongodb";
import { ServiceInterface } from "../../Domain/Port/ServiceInterface";
import { Service } from "../../Domain/Entities/Service";
import { connect } from "../../../Database/mongodb";

export default class MongoServiceRepository implements ServiceInterface {
    private collection!: Collection | any;
    constructor() {
        this.initializeCollection();
    }
    async findByUUID(uuid: string): Promise<Service | null> {
        try {
            let result = this.collection.findOne({ uuid });
            if (result) {
                let service = new Service(result.name, result.description);
                service.uuid = result.uuid;
                return service;
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
    async delete(uuid: string): Promise<void> {
        try {
            this.collection.deleteOne({ uuid });
        } catch (error) {
            throw new Error("Error deleting service.");
        }
    }
    async update(uuid: string, service: Service): Promise<Service | null> {
        try {
            service.uuid = uuid;
            this.collection.updateOne({ uuid }, { $set: service });
            return service;
        } catch (error) {
            return null;
        }
    }
    async list(): Promise<Service[] | null> {
        try {
            const result = await this.collection.find().toArray();
            if (result) {
                return result.map((element: any) => {
                    let service = new Service(element.name, element.description);
                    service.uuid = element.uuid;
                    return service;
                });
            } else {
                return null;
            }
        } catch (error) {
            return null;
        }
    }
    async register(Service: Service): Promise<Service | null> {
        try {
            await this.collection.insertOne(Service);
            return Service;
        } catch (error) {
            return null;
        }
    }
    private async initializeCollection(): Promise<void> {
        this.collection = await connect("service");
    }
}