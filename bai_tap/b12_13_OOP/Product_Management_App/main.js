class Product {
    #name;
    #color;
    #quantity;
    constructor(name, color, quantity) {
        this.#name = name;
        this.#color = color;
        this.#quantity = quantity;
    }
    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }
    setColor(color){
        this.#color = color;
    }
    getColor(){
        return this.#color;
    }
    setQuantity(quantity){
        this.#quantity = quantity;
    }
    getQuantity(){
        return this.#quantity;
    }
}

let product1 = new Product("Iphone15 Pro", "Titanium", 10);
let product2 = new Product("Macbook Pro", "Gray", 13);
let product3 = new Product ("Ipad Pro", "Black", 5 );

let productList = [product1, product2, product3];

function display() {
    let out = "";
    for(let i = 0; i < productList.length; i++){
        out += "<tr>";
        out += "<td>" + (i+1) + "</td>";
        out += "<td>" + productList[i].getName() + "</td>";
        out += "<td>" + productList[i].getColor() + "</td>";
        out += "<td>" + productList[i].getQuantity() + "</td>";
        out += "<td><button onclick='updateProduct(" + i + ")'>Sửa</button></td>";
        out += "<td><button onclick='deleteProduct(" + i + ")'>Xóa</button></td>";
    }
    document.getElementById("content").innerHTML = out;
}

display();
function updateProduct(index) {
    let check = confirm("Bạn muốn sửa đổi thông tin sản phẩm?");
    if(check) {
        let name = prompt("Nhập tên sản phẩm: ");
        let color = prompt("Nhập màu sắc sản phẩm: ");
        let quantity = +prompt("Nhập số lượng sản phẩm");
        productList[index].setName(name);
        productList[index].setColor(color);
        productList[index].setQuantity(quantity);
        display();
    }
    else{
        alert("Thao tác không được thực hiện!");
    }
}
function deleteProduct(index) {
    let check = confirm("Bạn muốn xóa sản phẩm này?");
    if(check){
        productList.splice(index, 1);
        display();
    }
    else{
        alert("Thao tác không được thực hiện!")
    }
}

function addProduct() {
    let check = confirm("Bạn muốn thêm một sản phẩm mới?");
    if(check){
        let name = prompt("Nhập tên sản phẩm: ");
        let color = prompt("Nhập màu sắc sản phẩm: ");
        let quantity = +prompt("Nhập số lượng sản phẩm");
        let newProduct = new Product(name, color, quantity);
        productList.push(newProduct);
        display();
    }
    else{
        alert("Thao tác không được thực hiện!");
    }
}


