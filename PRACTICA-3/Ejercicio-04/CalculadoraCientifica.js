class CalculadoraBasica{

    
    constructor(){
        this.mem = 0;
    }

    displayValue(val) {
        if(document.getElementById("result").value == ''){
            document.getElementById("result").value = val;
        }
        else{
            document.getElementById("result").value += val;
        }
    }

    calculateResult(){
        var resultadoFinal = eval(document.getElementById("result").value);
        document.getElementById("result").value = resultadoFinal;

    }

    mPlus(val){
        this.mem += parseInt(val);
        
    }

    mMinus(val){
        if(this.mem > val){
            this.mem -= parseFloat(val);
        }
        else{
            this.mem = 0;
        }
    }

    mRecall(){
        document.getElementById("result").value = this.mem;
    }

    clearAll(){
        document.getElementById("result").value = '';

    }
}

class CalculadoraCientifica extends CalculadoraBasica{

    constructor(val){
        super(val);
    }

    calculatePower(){
        var power = Math.pow(eval(document.getElementById("result").value), 2);
        document.getElementById("result").value = power;
    }

    calculateSin(){
        var sin = Math.sin(eval(document.getElementById("result").value));
        document.getElementById("result").value = sin;
    }

    calculateCos(){
        var cos = Math.cos(eval(document.getElementById("result").value));
        document.getElementById("result").value = cos;
    }

    calculateTan(){
        var tan = Math.tan(eval(document.getElementById("result").value));
        document.getElementById("result").value = tan;
    }

    calculateSqrt(){
        var raiz = Math.sqrt(eval(document.getElementById("result").value));
        document.getElementById("result").value = raiz;
    }

    calculateLog(){
        var log = Math.log10(eval(document.getElementById("result").value));
        document.getElementById("result").value = log;
    }

    calculateLn(){
        var ln = Math.log(eval(document.getElementById("result").value));
        document.getElementById("result").value = ln;
    }

    calculateFact(){
        var numb = parseInt(eval(document.getElementById("result").value));
        var fact = 1;
        for(var i= 1; i <= numb; i++){
            fact = fact * i;
        }
        document.getElementById("result").value = fact;
    }
}

var calcCien = new CalculadoraCientifica();