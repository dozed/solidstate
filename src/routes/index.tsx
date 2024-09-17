import {createSignal, For, onMount, Show} from 'solid-js';
import {Item} from '~/lib/items';
import {ItemEdit} from '~/components/ItemEdit';
import {globalData, setGlobalData} from '~/lib/store';

const Index = () => {
    const [itemIdx, setItemIdx] = createSignal<number>();

    onMount(async () => {
        // getItems().then(res => {
        //     console.log(res);
        //     setItems(res);
        // });

        const res = await fetch('/api/items');
        const json = await res.json();
        const items = json as Item[];

        setGlobalData({
            items
        });
    });

    const selectItem = (e: Event & { target: HTMLSelectElement }) => {
        const idx = parseInt(e.target.value);

        if (idx !== -1) {
            setItemIdx(idx);
        } else {
            setItemIdx(undefined);
        }
    };

    return (
        <div>
            <div>Welcome to Foo!</div>
            <div>
                <select onChange={selectItem}>
                    <option value={-1}></option>
                    <For each={globalData.items}>{(item, i) =>
                        <option value={i()}>{item.title}</option>
                    }</For>
                </select>
            </div>
            <div>
                <Show when={itemIdx() !== undefined}>
                    <ItemEdit itemIdx={itemIdx()!} />
                </Show>
            </div>
        </div>
    );
}

export default Index;
