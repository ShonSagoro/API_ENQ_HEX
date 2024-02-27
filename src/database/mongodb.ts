import dotenv from "dotenv";
import { MongoClient, MongoClientOptions, Collection} from "mongodb";
import { Signale } from "signale";

dotenv.config();

const signale = new Signale();

const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

const uri = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true } as MongoClientOptions);

let collection: Collection;

export async function connect(collectionName: string): Promise<Collection|null>{
    try {
        await client.connect();
        signale.success('Conexion a la base de datos exitosa');
        return client.db().collection(collectionName);
    } catch (error) {
        signale.error(error);
        return null;
    }
}

export { collection };
