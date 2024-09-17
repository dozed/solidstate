import {createStore, produce} from 'solid-js/store';
import {Item} from '~/lib/items';
import {saveItem} from '~/lib/api';

type GlobalData = {
    items: Item[],
}

export const [globalData, setGlobalData] = createStore<GlobalData>({
    items: []
});

export const setItemTitle = (itemIdx: number, value: string): void => {
    // optimistic update
    setGlobalData(produce(draft => {
        draft.items[itemIdx].title = value;
    }));

    // remote update
    const item = globalData.items[itemIdx];
    saveItem(item);
}

export const setSubItemLabel = (itemIdx: number, subItemIdx: number, value: string): void => {
    // optimistic update
    setGlobalData(produce(draft => {
        draft.items[itemIdx].subItems[subItemIdx].label = value;
    }));

    // remote update
    const item = globalData.items[itemIdx];
    saveItem(item);
}
