class Product {
    constructor(name, img, price, quantity, group) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.quantity = quantity;
        this.group = group;
    }
    getName() {
        return this.name;
    }
    getImg() {
        return this.img;
    }
    getPrice() {
        return this.price;
    }
    getQuantity() {
        return this.quantity;
    }
    getGroup() {
        return this.group;
    }
    edit(name, img, price, quantity, group) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.quantity = quantity;
        this.group = group;
    };
}