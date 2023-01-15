class Calculator {
    constructor() {
        this.prev = "";
        this.current = "";
        this.operator = "";
    }

    clear() {
        this.prev = "";
        this.current = "";
        this.operator = "";
        this.updateInput();
        this.updateTopScreen();
    }

    appendToCurrent(input) {
        if (!isNaN(input)) {
            this.current = parseFloat(this.current.toString() + input.toString());
        }
        else if ( (input == ".") && (!this.current.toString().includes(".")) ) {
            if (this.current == "") {
                this.current =  "0.";
            } else {
                this.current = parseFloat(this.current.toString() + input.toString());
            }
        }
        this.updateInput();
        this.updateTopScreen();
    }

    updateInput() {
        $("#input").val(this.current);
    }

    updateTopScreen() {
        $("#screenTop").text(this.prev.toString() + " " + this.operator);
    }

    setOperator(operator) {
        if (this.current == "") return
        if (this.prev == "") {
            this.prev = this.current;
            this.current = "";
            this.operator = operator;
            this.updateInput()
            this.updateTopScreen();
        } else {
            switch (this.operator) {
                case "+":
                    this.prev += this.current;
                    break;
                case "−":
                    this.prev -= this.current;
                    break;
                case "×":
                    this.prev *= this.current;
                    break;
                case "÷":
                    this.prev /= this.current;
                    break;
                default:
                    break;
            }
            this.current = "";
            this.operator = operator;
            this.updateInput()
            this.updateTopScreen();
        }
        if (operator == "=") {
            this.current = this.prev;
            this.prev = "";
            this.operator = "";
            this.updateInput()
            this.updateTopScreen();
        }
    }
}

const calc = new Calculator()

$(".btn--num").click((event)=>{
    calc.appendToCurrent($(event.target).text());
});
$("#btnClear").click(()=>{
    calc.clear();
});
$(".btn--operator").click((event)=>{
    calc.setOperator($(event.target).text());
});
$("#btnEquals").click(()=>{
    calc.setOperator("=");
});