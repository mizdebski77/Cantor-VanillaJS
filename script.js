{

    const calculateResult = () => {
        const inputValue = document.querySelector(".js-amount");
        const inpuCurrentCurrency = document.querySelector(".js-currencCurrency");
        const inputTargetCurrency = document.querySelector(".js-targetCurrency");
        const resultField = document.querySelector(".js-result");

        const amount = +inputValue.value;
        const currentCurrency = inpuCurrentCurrency.value;
        const targetCurrency = inputTargetCurrency.value;
        let result;

        

        const euro = 4.5;
        const dolar = 4.14;
        const dolarToEuro = 0.92;
        const plnToEuro = 0.22;
        const plnToDolar = 0.24;

        console.log(amount);

        if (currentCurrency === "PLN" && targetCurrency === "PLN") {
            result = amount;
        };

        if (currentCurrency === "PLN" && targetCurrency === "€") {
            result = amount * plnToEuro;
        };

        if (currentCurrency === "PLN" && targetCurrency === "$") {
            result = amount * plnToDolar;
        };


        if (currentCurrency === "$" && targetCurrency === "PLN") {
            result = amount * dolar;
        };

        if (currentCurrency === "$" && targetCurrency === "€") {
            result = amount * dolarToEuro;
        };

        if (currentCurrency === "$" && targetCurrency === "$") {
            result = amount;
        };


        if (currentCurrency === "€" && targetCurrency === "PLN") {
            result = amount * euro;
        };

        if (currentCurrency === "€" && targetCurrency === "€") {
            result = amount;
        };

        if (currentCurrency === "€" && targetCurrency === "$") {
            result = amount/ dolarToEuro;
        };

        resultField.innerText = `${amount} ${currentCurrency}  =  ${result.toFixed(2)} ${targetCurrency}`

        if (amount === 0) {
            resultField.innerText = "";
        };
    };





    const init = () => {

        const form = document.querySelector(".js-form");

        form.addEventListener("input", (event) => {
            event.preventDefault();
            calculateResult();
        });
    };

    init();

}