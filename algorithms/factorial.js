function factorial () {
    
    let N = +prompt('Enter N');
    let res = 1;

    for (; N > 0; N--) {
        res *= N;
    }
    
    alert(res);
}


export default ['Factorial', factorial, 'Enter N and get factorial of it'];

