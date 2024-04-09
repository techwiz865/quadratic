function calculate() {
    a = document.getElementById('a').value;
    b = document.getElementById('b').value;
    c = document.getElementById('c').value;
    output1 = actualCalc1(a, b, c);
    output2 = actualCalc2(a, b, c);
    document.getElementById('output').innerHTML = output1 + " and " + output2;
}

function actualCalc(a, b, c) {
    return (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
}


function actualCalc2(a, b, c) {
    return (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
}