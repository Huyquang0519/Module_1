class Student {
    constructor(name, email, age, gpa) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.gpa = gpa;
    }

    getInformation() {
        document.write("Họ và tên: " + this.name + '<br>'
            + "Tuổi: " + this.age + '<br>'
            + "Email: " + this.email + '<br>'
            + "Điểm trung bình: " + this.gpa + '<br>');
    }

    getRank() {
        if (this.gpa >= 8) return "Giỏi";
        else if (this.gpa >= 6.5) return "Khá";
        else return "Yếu";
    }
}
