class Subject {
    constructor() {
        this.observes = [];
    }
    subscribe(observer) {
        this.observes.push(observer);
    }
    unsubscribe(observer) {
        this.observes = this.observes.filter(obs =>  obs !== observer);
    }
    fire(action) {
        this.observes.forEach(observer => {
            observer.update(action);
        });
    }
}

class Observer {
    constructor(state) {
        this.state = state;
        this.initialState = state;
    }
    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state;
                break;
            case 'DECREMENT':
                this.state = --this.state;
                break;
            case 'ADD':
                this.state += action.payload;
                break;
            default: this.state = this.initialState;
        }

    }
}

const stream$ = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire({ type: 'INCREMENT'});
stream$.fire({ type: 'INCREMENT'});
stream$.fire({ type: 'DECREMENT'});
stream$.fire({ type: 'ADD', payload: 10});

console.log(obs1.state);
console.log(obs2.state);