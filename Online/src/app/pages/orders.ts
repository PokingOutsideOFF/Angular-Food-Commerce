export class Orders {

    username?: string;
    itemname?: string;
    price?: number;
    qnt?: number;

    constructor(username: string, itemname?: string, price?: number, qnt?: number) {
        this.username = username
        this.itemname = itemname
        this.price = price
        this.qnt = qnt
    }

}
