function looping(startnum, endnum, breknum, contnum) {

    if (
        startnum === undefined || endnum === undefined ||breknum === undefined || contnum === undefined) {
        alert("You must enter all numbers");
        return;
    }

    for (var i = startnum; i < endnum; i++) {

        if (i == contnum) {
            console.log(i);
            continue;
        }

        if (i == breknum) {
            console.log(i);
            break;
        }

        console.log(i);
    }

    return i;
}

looping(1, 10, 7, 4);