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
    const resultContainer = document.querySelector(".result-container");

    let formulaText = "";
    const permutationFormula = "\n\\({n}P{r} = \\frac{n!}{(n - r)!}\\)"
    const combinationFormula = "\n\\({n}C{r} = \\frac{n!}{r! \\times (n - r)!} \\)";

    let result = 0;
    let formulaTextResult = "";
    let resultText = "";

    if (!isNaN(n) && !isNaN(r) && nInput === n.toString() && rInput === r.toString()) {

        if (n < 1 || r < 1) {
            alert("Invalid Input: Please Provide postive numbers");
        } else if (n < r) {
            alert("Invalid Input: n must be greater than or equal to r");
        } else if (n > 30) {
            alert("Invalid Input: n should not exceed 30");
        } else {
            resultContainer.classList.remove("hide-container");

            if (formula === "Permutation") {
                result = calculatePermutations(n, r);
                formulaText = permutationFormula;
                formulaTextResult = `\\(_{${n}}P_{${r}} = \\frac{${n}!}{(${n} - ${r})!}\\)`;
            } else if (formula === "Combination") {
                result = calculateCombinations(n, r);
                formulaText = combinationFormula;
                formulaTextResult = `\\(${n}C${r} = \\frac{${n}!}{${r}! \\times (${n} - ${r})!} = ${result}\\)`;
            }

            resultText = `${result.toFixed(2)}`;
        }

    } else {
        resultContainer.classList.add("hide-container");
        alert("You must enter a number");
    }
    document.getElementById("formulaText").textContent = formulaText;
    document.getElementById("formulaTextResult").textContent = formulaTextResult;
    document.getElementById("resultText").textContent = resultText;

    MathJax.typeset();
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