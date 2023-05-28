/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User( 1, 'James', 'Carter', 'carter@gmail.com', +950784539842),
    new User( 2, 'Galya', 'Bosh', 'bosh@gmail.com', +380974569870),
    new User( 3, 'Lidia', 'Mazetti', 'mazetti@gmail.com', +98056432189),
    new User( 4, 'Hector', 'Smith', 'copola@gmail.com', +9578427453),
    new User( 5, 'Donna', 'Johnson', 'johnson@gmail.com', +9578453),
    new User( 6, 'Maria', 'Gomez', 'gomez@gmail.com', +9578453111),
    new User( 7, 'Nelly', 'Marquez', 'marquez@gmail.com', +9578453222),
    new User( 8, 'Johan', 'Rolling', 'rolling@gmail.com', +9578453333),
    new User( 9, 'Erica', 'Mirabella', 'mirabella@gmail.com', +9578453777),
    new User( 10, 'Paul', 'Posh', 'posh@gmail.com', +9578453888),
]
console.log(users);

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

console.log(users.filter((user)  => !(user.id % 2)));

/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

console.log(users.sort((user1, user2)  => (user1.id - user2.id)));

/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
class Client{
    constructor(id, name, surname , email, phone, order){
         this.id = id;
         this.name = name;
         this.surname = surname;
         this.email = email;
         this.phone = phone;
         this.order = order;
    }
}

let clients = [
    new Client( 1, 'James', 'Carter', 'carter@gmail.com', +950784539842, ['apple', 'pineapple', 'blackberries', 'chicken']),
    new Client( 2, 'Galya', 'Bosh', 'bosh@gmail.com', +380974569870, ['pineapple', 'wine', 'tomatoes']),
    new Client( 3, 'Lidia', 'Mazetti', 'mazetti@gmail.com', +98056432189, ['potatoes', 'wine']),
    new Client( 4, 'Hector', 'Smith', 'copola@gmail.com', +9578427453, ['apple', 'blackberries', 'wine']),
    new Client( 5, 'Donna', 'Johnson', 'johnson@gmail.com', +9578453, ['tomatoes', 'apple']),
    new Client( 6, 'Maria', 'Gomez', 'gomez@gmail.com', +9578453111, ['tomatoes', 'potatoes']),
    new Client( 7, 'Nelly', 'Marquez', 'marquez@gmail.com', +9578453222, ['wine','apple']),
    new Client( 8, 'Johan', 'Rolling', 'rolling@gmail.com', +9578453333, ['pear', 'peach']),
    new Client( 9, 'Erica', 'Mirabella', 'mirabella@gmail.com', +9578453777, ['peach', 'wine']),
    new Client( 10, 'Paul', 'Posh', 'posh@gmail.com', +9578453888, ['chicken', 'tomatoes']),
]
console.log(clients);

/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

console.log(clients.sort((client1, client2)  => client1.order.length - client2.order.length));

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Car(model, manufacturer, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drivers =[];
    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function(){
        console.log(`Car info: model ${this.model}, manufacturer ${this.manufacturer}, year ${this.year}, maxSpeed ${this.maxSpeed}, engineVolume ${this.engineVolume}, driver ${JSON.stringify(this.drivers)}`)
    }
    this.increaseMaxSpeed = function (newSpeed){
        newSpeed = this.maxSpeed + newSpeed;
        this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
    }
    this.changeYear = function(newValue){
        this.year = newValue;
    }
    this.addDriver = function(driver){
        this.drivers.push(driver);
    }

}
let car = new Car('Corolla', 'Toyota', 2019, 150, 6);
car.drive();
car.info();
car.increaseMaxSpeed(10);
car.info();
car.changeYear(2020);
car.addDriver({name:'Maria', age: 38, drivingExperience: 10});
car.info();

/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class CarCar {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drivers = [];
    }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info () {
            console.log(`Car info: model ${this.model}, manufacturer ${this.manufacturer}, year ${this.year}, maxSpeed ${this.maxSpeed}, engineVolume ${this.engineVolume}, driver ${JSON.stringify(this.drivers)}`)
        }
        increaseMaxSpeed (newSpeed) {
            newSpeed = this.maxSpeed + newSpeed;
            this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
        }
        changeYear (newValue) {
            this.year = newValue;
        }
        addDriver (driver) {
            this.drivers.push(driver);
        }

    }

  car = new CarCar('Corolla', 'Toyota', 2018, 140, 7);
car.drive();
car.info();
car.increaseMaxSpeed(10);
car.info();
car.changeYear(2020);
car.addDriver({name:'Maria', age: 38, drivingExperience: 10});
car.info();

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class Cinderella {
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}
let cinderellas= [
    new Cinderella ('Maria', 20, 39),
    new Cinderella ('Lidia', 25, 38),
    new Cinderella ('Sasha', 21, 41),
    new Cinderella ('Nadia', 29, 40),
    new Cinderella ('Felicia', 23, 37),
    new Cinderella ('Hilary', 31, 38.5),
    new Cinderella ('Johan', 35, 41.5),
    new Cinderella ('Iryna', 33, 39.5),
    new Cinderella ('Beata', 32, 41),
    new Cinderella ('Julia', 39, 40),
]
class Prince {
    constructor(name, age, shoe){
        this.name = name;
        this.age = age;
        this.shoe = shoe;
}
    findPrinces(arr) {
         for(const princess of arr){
             if(princess.footSize === this.shoe){
                 return princess;
             }
         }
    }
}
let prince  = new Prince('Anatoly', 35, 39)

console.log(prince.findPrinces(cinderellas));
