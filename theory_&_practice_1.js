try {
    // EX. 1a
    function foo() {
        employeeId();
        var product = 'Car';
        return;

        function employeeId() {
            console.log('ex1a > ', product); // undefined
        }
    }
    foo();

// EX. 1b
    function hoist() {
        a = 20;
        var b = 100;
    }
    hoist();
    console.log('ex1b a >> ', a); // 20
    console.log('ex1b b >>', b); // error because b defined inside function
} catch (e) {
    console.error('err > ', e.message)
}

// EX. 2
bar();
(function abc(){console.log('ex2 abc >> ', 'something')})();
function bar(){console.log('ex2 bar >>', 'bar got called')};
// result will next: 'bar got called' \n 'something'


// EX. 3
var c = 1;
function outer() {
    var c = 2
    function inner() {
        c++; //
        var c = 3;
        console.log('ex3 c >> ', c) // 3
    }
    inner();
}
outer();

// EX. 4
function t () {
    function ff () {} // this === Window
    return ff.bind(this)
}
t()()

// EX. 4a
var obj = {
    message: 'Hello',
    innerMessage: function () {
        const ref = this
        ;(function () {
            console.log('ex4a ref.message >> ', ref.message); // Hello
            console.log('ex4a this.message >> ', this.message); // undefined, because 'this' is Window-object
        })();
    }
};
console.log(obj.innerMessage()); // only once console because nothing returns


// EX. 5
function sum(){
    const result = [...arguments].reduce((cur, next) => {
        if (+next) {
            cur += next
        }
        return cur
    }, 0)
    return result
}
console.log('ex5.1 >> ', sum(1, 2, 3))
console.log('ex5.2 >> ', sum(1, 2, 3, 4, 5))
