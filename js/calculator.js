function Calculator() {

    this.firstOperand;
    this.secondOperand;
    this.operator;
    this.operationLog;

    this.add = function(a, b) {
        return a + b;
    };

    this.subtract = function(a, b) {
        return a - b;
    };

    this.multiply = function(a, b) {
        return a * b;
    };

    this.divide = function(a, b) {
        return a / b;
    };

    this.operate = function() {

        const operations = {
            "+": this.add,
            "-": this.subtract,
            "*": this.multiply,
            "/": this.divide
        };

        if (this.operator in operations)
            this.operationLog = operations[this.operator](this.firstOperand, this.secondOperand);
    };

    this.getFirstOperand = function() {
        return this.firstOperand;
    }

    this.setFirstOperand = function(value) {
        this.firstOperand = Number(value);
    };

    this.getSecondOperand = function() {
        return this.secondOperand;
    }

    this.setSecondOperand = function(value) {
        this.secondOperand = Number(value);
    };

    this.getOperator = function() {
        return this.operator;
    }

    this.setOperator = function(value) {
        this.operator = value;
    }

    this.getOperationLog = function() {
        return this.operationLog;
    }
}

export {
    Calculator
}
