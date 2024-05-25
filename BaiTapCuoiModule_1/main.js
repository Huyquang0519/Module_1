let product_1 = new Product("Refrigerator","product_img/product_4.png", 8700, 100, "Kitchen Appliances");
let product_2 = new Product("Air conditioner", "product_img/product_1.png", 6200, 50, "Room Appliances");
let product_3 = new Product("Microwave", "product_img/product_3.png", 500, 5600, "Kitchen Appliances");
let product_4 = new Product("Blender", "product_img/product_5.png", 20, 800, "Kitchen Appliances");
let product_5 = new Product("Washing machine", "product_img/product_2.png", 10, 4000, "Laundry Appliances");

let products = [product_1, product_2, product_3, product_4, product_5];
display(products);
function display(arr) {
    let out = "";
    for (let i = 0; i < arr.length; i++) {
        out += "<tr>";
        out += "<td>" + (i + 1) + "</td>";
        out += "<td><img width='80px' height='80px' src=' " + arr[i].getImg() + " ' alt='product_img'></td>";
        out += "<td>" + arr[i].getName() + "</td>";
        out += "<td>" + arr[i].getGroup() + "</td>";
        out += "<td>" + arr[i].getPrice() + "</td>";
        out += "<td>" + arr[i].getQuantity() + "</td>";
        out += "<td><button type=\"button\" class=\"btn  btn-md btn-primary\" onclick='editProduct(" + i + ")'><i class=\"fa-solid fa-pen-to-square\"></i>&nbsp" +
            "Edit</button>&nbsp&nbsp";
        out += "<button type=\"button\" class=\"btn  btn-md btn-danger\" onclick='deleteProduct(" + i + ")'><i class=\"fa-solid fa-trash\"></i>&nbsp" +
            "Delete</button></td>";
        out += "</tr>";
    }
    document.getElementById("product-list").innerHTML = out;
}

function addProduct() {
    if (!validateForm()) {
        return;
    }
    let name = document.getElementById("product-name").value;
    let group = document.getElementById("product-group").value;
    let price = document.getElementById("product-price").value;
    let quantity = document.getElementById("product-quantity").value;
    let img = document.getElementById("product-img").value;
    for (let product of products) {
        if (product.getName() === name && product.getGroup() === group && product.getPrice() === price && product.getQuantity() === quantity && product.getImg() === img) {
            alert("Đã tồn tại sản phẩm tương tự!");
            return;
        }
    }
    let product = new Product(name, img, price, quantity, group);
    products.push(product);
    alert("Thêm sản phẩm thành công!")
    display(products);
    clear();
}

let edit_index = -1;
function editProduct(index){
    let check = confirm("Bạn muốn sửa đổi thông tin sản phẩm " + products[index].getName()+"?");
    if(check) {
        document.getElementById("product-name").value = products[index].getName();
        document.getElementById("product-group").value = products[index].getGroup();
        document.getElementById("product-price").value = products[index].getPrice();
        document.getElementById("product-quantity").value = products[index].getQuantity();
        document.getElementById("product-img").value = products[index].getImg();
        edit_index = index;
        document.getElementById("sub-tb").scrollIntoView({behavior: "smooth"});
    }
    else {
        alert("Thao tác không được thực hiện!");
    }
}
function updateProduct(){
    if(!validateForm()){
        return;
    }
    let name = document.getElementById("product-name").value;
    let group = document.getElementById("product-group").value;
    let price = document.getElementById("product-price").value;
    let quantity = document.getElementById("product-quantity").value;
    let img = document.getElementById("product-img").value;
    let old_product = products[edit_index];
    if (old_product.getName() === name && old_product.getGroup() === group && old_product.getPrice() === price && old_product.getQuantity() === quantity && old_product.getImg() === img) {
        alert("Không có sự thay đổi nào!");
        return;
    }
    products[edit_index].edit(name, img, price, quantity, group);
    alert("Cập nhật thông tin sản phẩm thành công!");
    display(products);
    clear();
    edit_index = -1; // reset edit_index
}
function deleteProduct(index){
    let check = confirm("Bạn muốn xóa sản phẩm " + products[index].getName()+"?");
    if(check){
        products.splice(index, 1);
        display(products);
    }
    else{
        alert("Thao tác không được thực hiện!");
    }
}
function clear() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-group").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-quantity").value = "";
    document.getElementById("product-img").value = "";
}
function validateForm() {
    let name = document.getElementById("product-name").value;
    let group = document.getElementById("product-group").value;
    let price = document.getElementById("product-price").value;
    let quantity = document.getElementById("product-quantity").value;
    let img = document.getElementById("product-img").value;

    if(!name){
        alert("Vui lòng nhập tên sản phẩm!");
        return false;
    }
    if(!group){
        alert("Vui lòng chọn nhóm sản phẩm!");
        return false;
    }
    if(!price){
        alert("Vui lòng nhập giá sản phẩm!");
        return false;
    }
    if(!quantity){
        alert("Vui lòng nhập số lượng sản phẩm!");
        return false;
    }
    if(!img){
        alert("Vui lòng nhập đường dẫn ảnh sản phẩm!");
        return false;
    }
    return true;
}
function searchProduct() {
    let searchValue = document.querySelector('.form-control').value.toLowerCase();
    if(searchValue === ""){
        display(products);
        return;
    }
    let filteredProducts = products.filter(product => product.getName().toLowerCase().includes(searchValue));
    display(filteredProducts);
}

