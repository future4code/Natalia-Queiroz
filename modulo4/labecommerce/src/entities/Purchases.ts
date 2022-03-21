export class Purchases {
    constructor(
        readonly userId: string,
        readonly productId: string,
        readonly quantity: string,
        readonly total: number
    ){
        if(typeof userId !== "string") throw new Error("type of 'userId' must be a 'string'")
        if(typeof productId !== "string") throw new Error("type of 'productId' must be a 'string'")
        if(typeof quantity !== "string") throw new Error("type of 'quantity' must be a 'string'")
        if(typeof total !== "number") throw new Error("type of 'total' must be a 'number'")
    }
}
}