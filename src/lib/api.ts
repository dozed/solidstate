import {Item} from '~/lib/items';

const doPut = async (url: string, jsonData?: object): Promise<Response> => {
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    });

    return res;
};

export const saveItem = async (item: Item): Promise<Response> => {
    const res = await doPut(`/api/items/${item.uuid}`, item);
    return res;
};
