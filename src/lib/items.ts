
export type Item = {
    uuid: UUID,
    title: string,
    flag: boolean,
    subItems: SubItem[],
};

export type SubItem = {
    label: string,
}
