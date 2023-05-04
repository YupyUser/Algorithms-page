function fibonacci () {
    let n = +prompt('Enter how many numbers of fibonacci subsequence you want to see') + 1;
    let res = [];
    let previous = 1,subprevious = 0; 
    while (true) {
        n--;
        if (n==0) break;

        previous = previous + subprevious;
        subprevious = previous - subprevious;

        res.push(previous);
    }
    alert(res);
}


export default ['Fibonacci', fibonacci, 'Enter how many numbers of fibonacci subsequence you want to see'];