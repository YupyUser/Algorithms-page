function calculator () {
    


        let num = +prompt('Enter number');
        let num2;
        let toc = prompt('Enter type of calculating (+,-,*,/,^,√,fac');


        while (1) {

            if (toc == '+') {

                num2 = +prompt('Enter second number');
                return alert(num + num2);

            } else if (toc == '-') {

                num2 = +prompt('Enter second number');
                return alert(num - num2);

            } else if (toc == '*') {

                num2 = +prompt('Enter second number');
                return alert(num * num2);

            } else if (toc == '/') {

                num2 = +prompt('Enter second number');
                return alert(num / num2);

            } else if (toc == '^') {

                num2 = +prompt('Enter degree');
                return alert(num ** num2);

            } else if (toc == '√') {

                for (num2 = 1; num2 < num; num2++) if (num2*num2 == num) return alert(num2);
    
            } else {
                continue;
            }

        }

}    

export default ['Calculator', calculator, 'Enter numbers and types of calculating(can see them in modal window)'];