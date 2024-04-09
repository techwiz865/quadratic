function calculate() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;

    if ((b * b - 4 * a * c) < 0) {
        document.getElementById('output').innerHTML = "No real roots exist";
    } else {
        let output1 = actualCalc1(a, b, c);
        let output2 = actualCalc2(a, b, c);
        check(output1, output2);
    }
}

function check(output1, output2) {
    if (output1 == output2) {
        document.getElementById('output').innerHTML = "Only one root: " + output1;
    } else {
        document.getElementById('output').innerHTML = "Root 1: " + output1 + " Root 2: " + output2;
    }
}

function actualCalc1(a, b, c) {
    return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
}

function actualCalc2(a, b, c) {
    return (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
}