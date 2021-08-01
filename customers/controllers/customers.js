
const Customer = require("../models/customer");



function index(req, res) {
    res.render("customers/index", {
        customers: Customer.getAll()
    });
};

function show(req, res) {
    // console.log("req" + req.params.id);
    res.render("customers/show", {
        customers: Customer.getOne(req.params.id)
    });
    // console.log(customers.id)
};

function newCust(req, res) {
    res.render('customers/new',{
        // customers: Customer.getZero()
        customers: {id:0}
    })
    // console.log()
};

function create(req, res) {
    Customer.create(req.body);
    
    res.redirect("/customers");
};

function edit(req, res) {
    
    res.render("customers/new", {
        customers: Customer.getOne(req.params.id)
    });
    console.log(Customer.getOne(req.params.id))
};

function update(req, res) {
    Customer.updateOne(req.params.id, req.body)
    res.redirect('/customers/' + req.params.id)
    
}

function deleteCust(req, res) {
    Customer.deleteOne(req.params.id);
    res.redirect('/customers')
    // console.log(Customer.getAll())
}

module.exports = {
    index, 
    show, 
    new: newCust,
    create,
    edit,
    update,
    delete: deleteCust,
};