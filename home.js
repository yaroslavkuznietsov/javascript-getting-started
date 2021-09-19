
//let price = 149.99,
//    product = 'Hiking Boots',
//    discounted = true;
//const trututu = 45;

//let person = {
//    firstNmae: 'Yaroslav',
//    lastName: 'Kuznietsov'
//};

//if (+(1.1 + 1.3).toFixed(2) === 2.4) {
//    let x = true
//    showMessage(`true ${x}`, "message");
//}

//let key = 42;

//function getSecreteCode(value) {
//    let keyGenerator = function () {
//        let key = 12;
//        console.log('in key generator: ', key);
//        return key;
//    }

//    let code = value * keyGenerator();
//    console.log('in getSecreteCode: ', key);
//    return code;
//}

//let secreteCode = getSecreteCode(2);
////showMessage(secreteCode);
//console.log(secreteCode);



//let message = 'Hello';

//function changeMessage(message) {
//    message = 'Hi!';
//}

//changeMessage(message);
//showMessage(message);

//let test = Math.PI;
//test = test.toString();
//showMessage(test, "message");

//console.log(Math.PI);

const button = document.getElementById('see-review');

button.addEventListener('click', function () {
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'HIDE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
    
    console.log('click');
})


let ar = ['a', 'bb','cccc','ddd','ee'];

//let ar = [];

//for (let i = 0; i < 5; i++) {
//    ar[i] = i;
//}

//ar.pop();
//console.log( ar.pop());

//    console.log(ar);

//console.log(ar.slice(1, 3));

//console.log(ar.splice(1, 0, 45, 46, 32));

//console.log(ar);


//const set = ar.filter(function (item) {
//    console.log('item: ', item);
//    return item > 2;
//});

//console.log(set);

//console.log(ar);

//ar.forEach(e => console.log('Lenth: ', e.length));

//const found = ar.find(function (item) {
//    //console.log('item: ', item);
//    return item.length > 1;
//});

//console.log(found);




const x = document.getElementsByClassName('container');

console.log(x);

x[0].classList.add('d-none');