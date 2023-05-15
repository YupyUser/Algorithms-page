function Pi () {
    
    let N = +prompt('Enter N');

    alert('Pi with ' + N + ' digits after dot is ' + (355/113).toFixed(N));

}


export default ['Pi', Pi, 'Enter N (< or = 15) and see Pi with N digits after dot'];


