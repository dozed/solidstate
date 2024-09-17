import {createItem, getItems} from '~/lib/database';
import {Item} from '~/lib/items';
import type {APIEvent} from "@solidjs/start/server";

export async function GET(): Promise<Item[]> {
    return getItems();
}

export async function POST(event: APIEvent) {
    const item = await event.request.json() as Item;
    const res = await createItem(item);
    return {'message': 'OK'};
}
