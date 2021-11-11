const fs = require('fs');
const path = require('path');
const { render } = require('../app');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('index');
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let id = req.params.id;
		let product = products.find(val => {
			if (val.id == id){
				return val;
			}
			
		});
		res.render('detail',{product,toThousand})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		res.render('product-create-form');
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render('product-edit-form');
	},
	// Update - Method to update
	update: (req, res) => {
		res.render('products');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.render('products');
	}
};

module.exports = controller;