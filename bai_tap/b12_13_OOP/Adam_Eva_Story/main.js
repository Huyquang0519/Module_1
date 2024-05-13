
class Apple {
    #weight;
    constructor(weight) {
        this.#weight = weight;
    }
    isEmpty() {
        return this.#weight <= 0;
    }
    decrease() {
        if(this.isEmpty()){
            alert("Đã ăn hết quả táo!")
        }
        else this.#weight--;
    }
    getWeight() {
        return this.#weight;
    }
}

class Human {
    #name;
    #gender;
    #weight;
    constructor(name, gender, weight) {
        this.#name = name;
        this.#gender = gender;
        this.#weight = weight;
    }
    isMale() {
        return this.#gender;
    }
    setGender(gender) {
        this.#gender = gender;
    }
    eat(apple) {
        if(apple.isEmpty()){
            alert("Táo đã hết!");
        }
        else{
            apple.decrease();
            this.#weight++;
        }
    }
    say(string) {
        document.write(string + '<br>');
    }
    getName() {
        return this.#name;
    }
    setName(name) {
        this.#name = name;
    }
    getWeight() {
        return this.#weight;
    }
    setWeight(weight) {
        this.#weight = weight;
    }
}

let apple = new Apple(10);
let Adam = new Human("Adam", 1, 65);
let Eva = new Human("Eva", 0, 55);

Adam.say("I am Adam");
Eva.say("I am Eva");
document.write("<br>");

while(apple.isEmpty() !== true){

    document.write("Adam eats the apple" + '<br>');
    Adam.eat(apple);

    document.write("The apple has " + apple.getWeight() + " units" + '<br>');
    document.write("Adam's weight is " + Adam.getWeight() + " kg" +'<br>');
    document.write('<br>');

    document.write("Eva eats the apple" + '<br>');
    Eva.eat(apple);

    document.write("The apple has " + apple.getWeight() + " units" + '<br>');
    document.write("Eva's weight is " + Eva.getWeight() + " kg" +'<br>');
    document.write('<br>');
}