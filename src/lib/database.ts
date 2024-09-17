import {Db, Document, InsertOneResult, MongoClient, UpdateResult} from 'mongodb';
import {Item} from '~/lib/items';

const MONGODB_HOST = 'localhost';
const MONGODB_PORT = 27017;
const COLLECTION_NAME = 'example-items';

export const db: Db = await initDb();

export async function initDb() {
    const client = new MongoClient(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}`);
    await client.connect();
    const db = client.db('example-items');
    return db;
}

export async function getItems(): Promise<Item[]> {
    "use server"
    const itemsFromDb = await db
        .collection(COLLECTION_NAME)
        .find({}, { projection: { _id: false } })
        .toArray();

    // @ts-ignore
    return itemsFromDb as Item[];
}

export async function createItem(item: Item): Promise<InsertOneResult<Document>> {
    return await db.collection(COLLECTION_NAME).insertOne(item);
}

export async function updateItem(itemUuid: UUID, item: Item): Promise<Document | UpdateResult<Document>> {
    const res = await db.collection(COLLECTION_NAME).replaceOne({'uuid': itemUuid}, item);
    return res;
}
