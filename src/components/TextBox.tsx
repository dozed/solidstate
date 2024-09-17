import {Component, createSignal} from 'solid-js';

type TextBoxProps = {
    initialValue: string,
    onChange: (value: string) => void,
}

export const TextBox: Component<TextBoxProps> = (props) => {
    const [value, setValue] = createSignal(props.initialValue);

    const onInput = (e: Event & { target: HTMLInputElement }) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
        if (value() !== props.initialValue) {
            props.onChange(value());
        }
    };

    return (
        <input type="text"
               value={value()}
               onInput={onInput}
               onBlur={onBlur}
        />
    )
};
