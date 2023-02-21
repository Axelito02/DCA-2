const Numb = (i) => {
    if (i > 0) Numb(i-1)
    
    if (i % 3 === 0) {
        console.log("divisible entre 3");
    }  else if (i % 5 === 0) {
        console.log("divisble entre 5");
    }

}

Numb(32);