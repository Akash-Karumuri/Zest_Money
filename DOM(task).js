function checkEligibility() {
    var name = document.getElementById("name").value;
    var cibil = document.getElementById("cib").value;
    var salary = document.getElementById("sal").value;
    var resultElement = document.getElementById("result");

    var resultMessage = ""
    if (cibil > 800 && salary > 60000) {
        resultMessage = name + " you are eligible for 20 Lakhs Loan";
        resultElement.classList.add("final_result");
    } else if (cibil > 780 && salary > 50000) {
        resultMessage = name + " you are eligible for 15 Lakhs Loan";
        resultElement.classList.add("final_result");
    } else if (cibil > 750 && salary > 40000) {
        resultMessage = name + " you are eligible for 10 Lakhs Loan";
        resultElement.classList.add("final_result");
    } else if (cibil > 720 && salary > 30000) {
        resultMessage = name + " you are eligible for 5 Lakhs Loan";
        resultElement.classList.add("final_result");
    } else {
        resultMessage = name + " better Luck Next Time";
        resultElement.classList.add("final_result");
    }
    document.getElementById("result").innerHTML = resultMessage;    
}
