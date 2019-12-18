class oldCalculator {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2;
            case 'sub': return t2 - t2;
            default: return NaN;
        }
    }
}

class newCalculator {
    add(t1, t2) {
        return t1 + t2;
    }
    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalculatorAdapter {
    constructor() {
        this.calc = new newCalculator();

    }
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2);
            case 'sub': return this.calc.sub(t1, t2);
            default: return NaN;
        }
    }
}

const oldCal = new oldCalculator();
console.log(oldCal.operations(10,5, 'add'));

const newCalc = new newCalculator();
console.log(newCalc.add(10,10));

const adapterCalc = new CalculatorAdapter();
console.log(adapterCalc.operations(25,10,'sub'));