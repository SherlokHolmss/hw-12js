const user = {
    name: 'Mango',
    age: 20,
    hobby: 'reading',
    premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}


function countProps(obj) {
    return Object.keys(obj).length;
}

console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 


function findBestEmployee(employees) {
    let bestEmployee = '';
    let maxTasks = 0;

    for (const employee in employees) {
        if (employees[employee] > maxTasks) {
            maxTasks = employees[employee];
            bestEmployee = employee;
        }
    }

    return bestEmployee;
}
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); 
console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); 
function countTotalSalary(employees) {
    let totalSalary = 0;

    for (const salary of Object.values(employees)) {
        totalSalary += salary;
    }

    return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); 
console.log(countTotalSalary({})); 
function getAllPropValues(arr, prop) {
    const values = [];

    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }

    return values;
}
const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];
console.log(getAllPropValues(products, 'name')); 
console.log(getAllPropValues(products, 'quantity')); 
console.log(getAllPropValues(products, 'category'));




function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity;
            break;
        }
    }

    return totalPrice;
}

const productsList = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
];

console.log(calculateTotalPrice(productsList, 'Radar'));
console.log(calculateTotalPrice(productsList, 'Droid')); 




const account = {
    balance: 0,
    transactions: [],
    createTransaction(type, amount) {
        return {
            id: this.transactions.length + 1,
            type,
            amount,
        };
    },
    deposit(amount) {
        const transaction = this.createTransaction('deposit', amount);
        this.transactions.push(transaction);
        this.balance += amount;
    },
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Недостатньо коштів на рахунку!');
            return;
        }
        const transaction = this.createTransaction('withdraw', amount);
        this.transactions.push(transaction);
        this.balance -= amount;
    },
    getBalance() {
        return this.balance;
    },
    getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id);
    },
    getTransactionTotal(type) {
        let total = 0;

        for (const transaction of this.transactions) {
            if (transaction.type === type) {
                total += transaction.amount;
            }
        }

        return total;
    },
};

account.deposit(1000);
account.deposit(500);
account.withdraw(300);
console.log('Поточний баланс:', account.getBalance());
console.log('Деталі транзакції з ID 1:', account.getTransactionDetails(1));
console.log('Загальна сума депозитів:', account.getTransactionTotal('deposit'));
console.log('Загальна сума зняття:', account.getTransactionTotal('withdraw')); 
