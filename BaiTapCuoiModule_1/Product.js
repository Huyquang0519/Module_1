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
    setName(name) {
        this.name = name;
    }
    setImg(img) {
        this.img = img;
    }
    setPrice(price) {
        this.price = price;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    setGroup(group) {
        this.group = group;
    }
    edit(name, img, price, quantity, group) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.quantity = quantity;
        this.group = group;
    };
}