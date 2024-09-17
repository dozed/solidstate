import {Component, createMemo, For} from 'solid-js';
import {globalData, setItemTitle, setSubItemLabel} from '~/lib/store';
import {TextBox} from '~/components/TextBox';

type ItemEditProps = {
    itemIdx: number,
}

export const ItemEdit: Component<ItemEditProps> = (props) => {
    const item = createMemo(() => {
        return globalData.items[props.itemIdx];
    });

    return (
        <div>
            <div>
                Title:
                <TextBox initialValue={item().title}
                         onChange={(value) => setItemTitle(props.itemIdx, value)}
                />
            </div>
            <div>
                Sub-Items:
                <ul>
                    <For each={item().subItems}>{(subItem, i) =>
                        <li>
                            <TextBox initialValue={subItem.label}
                                     onChange={(value) => setSubItemLabel(props.itemIdx, i(), value)}
                            />
                        </li>
                    }</For>
                </ul>
            </div>
        </div>
    )
};
