class Complaints {
    constructor() {
        this.complaints = [];
    }
    reply(complaint) {}
    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class PloductComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id} ${customer} ${details}`;
    }
}

class ServiceComplaints extends Complaints {
    reply({id, customer, details}) {
        return `Service: ${id} ${customer} ${details}`;
    }
}

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;
        if(type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new PloductComplaints();
        }
        return complaint.add({id, customer, details});
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Vova', 'service', 'Bad Service'));
console.log(registry.register('Vanya', 'products', 'Bad Product'));