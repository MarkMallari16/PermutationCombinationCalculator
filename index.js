window.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();
    const loader = document.querySelector(".spinner-container");
    const mainContainer = document.getElementById("main");

    setTimeout(() => {

        loader.style.display = "none";
        mainContainer.classList.remove("hide-container");
    }, 2000)
})
function calculate() {

    const nInput = document.getElementById("field-1").value;
    const rInput = document.getElementById("field-2").value;

    //convert

    const n = parseFloat(nInput);
    const r = parseFloat(rInput);

    const formula = document.getElementById("formula").value;
    const resultContainer = document.querySelector(".resultContainer");

    let result = 0;
    let formulaText = "";
    let resultText = "";

    if (!isNaN(n) && !isNaN(r) && nInput === n.toString() && rInput === r.toString()) {
        if (n < 1) {
            alert("Please provide positive numbers");
            resultContainer.classList.add("hide-container");
        } else {
            resultContainer.classList.remove("hide-container");
            if (formula === "Permutation") {
                result = calculatePermutations(n, r);
                formulaText = `${n}P${r} = ${n}! / (${n} - ${r})! = ${result}`;
                resultText = `${result.toFixed(2)}`;
            } else if (formula === "Combination") {
                result = calculateCombinations(n, r);
                formulaText = `${n}C${r} = ${n}! / (${r}! * (${n} - ${r})!) = ${result}`;
                resultText = `${result.toFixed(2)}`;
            }
        }
    } else {
        resultContainer.classList.add("hide-container");
        alert("You must enter a number");
    }
    document.getElementById("formulaText").textContent = formulaText;
    document.getElementById("resultText").textContent = resultText;

}
function calculatePermutations(n, r) {
    return factorial(n) / factorial(n - r);
}
function calculateCombinations(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r))
}
function factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}