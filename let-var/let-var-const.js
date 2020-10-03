function varScope() {
    var myName = 'foo';
    console.log(myName);
    if(true) {
        myName = 'bar';
        console.log(myName);
    }
    console.log(myName);
}

varScope();

console.log('----------');

function letScope() {
    let myName = 'foo';
    console.log(myName);
    if(true) {
        myName = 'bar';
        console.log(myName);
    }
    console.log(myName);
}

letScope();
