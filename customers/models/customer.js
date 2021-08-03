
const customers = require("./ca-500.json")

function getAll() {
    return customers;
}

function getOne(id) {
    return customers.find((customer) => customer.id == id);
}

function getZero() {
    return customers.find((customer) => customer.id == 0);
}

// for creating a customer
function create(customer) {
    const newCust = {}
    newCust.id = Date.now() % 100000;
    newCust.first_name = customer.first_name;
    newCust.last_name = customer.last_name;
    newCust.company_name = customer.company_name;
    newCust.address = customer.address;
    newCust.city = customer.city;
    newCust.province = customer.province;
    newCust.postal = customer.postal;
    newCust.phone1 = customer.phone1;
    newCust.phone2 = customer.phone2;
    newCust.email = customer.email;
    newCust.web = customer.web;

    customers.push(newCust);
}

function deleteOne(id) {
    const idx = customers.findIndex(customer => customer.id == id);
    customers.splice(idx, 1);
    // console.log("delete")
}


function updateOne(id, customer) {
    const idx = customers.find(customer => customer.id == id);
    // replace item
    idx.first_name = customer.first_name;
    idx.last_name = customer.last_name;
    idx.company_name = customer.company_name;
    idx.address = customer.address;
    idx.city = customer.city;
    idx.province = customer.province;
    idx.postal = customer.postal;
    idx.phone1 = customer.phone1;
    idx.phone2 = customer.phone2;
    idx.email = customer.email;
    idx.web = customer.web;
}


module.exports = {
    getAll,
    getOne,
    create,
    getZero,
    updateOne,
    deleteOne,
}