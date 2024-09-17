import {updateItem} from '~/lib/database';
import {Item} from '~/lib/items';
import type {APIEvent} from "@solidjs/start/server";

export async function PUT(event: APIEvent) {
    const paramId = event.params['id'];
    const item = await event.request.json() as Item;
    await updateItem(paramId, item);
    return {'message': 'OK'};
}
