class Item {
    public Sid: string;
}
export default Item;


class ItemList extends Array<Item> {
    public addItems(...items: Item[]): void {
        items.forEach(x => {
            this.push(x);
        });
    }
}
export { ItemList };


class ItemFile {
    public Items: ItemList = new ItemList();

    public saveToFile(items: Array<Item>, password: string = null) {
        
    }
}
export { ItemFile };
