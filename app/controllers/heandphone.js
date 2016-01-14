'use strict';

const router = require('express').Router();
const mongoose = require('mongoose');
var heandphone = mongoose.model('heandphone');

router.get('/', function (req, res) {
	heandphone.find({}).exec(function(err, heandphone) {
		res.render('heandphone_index', { data : heandphone });
	});
});
//Tambah data
router.get('/tambah', function (req, res) {
 res.render('heandphone_tambah', { title : 'Tambah heandphone', data: '' });
 });
 
 router.post('/tambah', function (req, res) {
	var merk = req.body.merk;
	var tipe = req.body.tipe;
	var warna = req.body.warna;
	var jenis = req.body.jenis;
	
	var heandphoneBaru = new heandphone ({ merk : merk, tipe: tipe, warna : warna, jenis: jenis});
	heandphoneBaru.save(function(err){
	if (err) throw err;
	res.redirect('/heandphone');
	});
	});
	
//ubah data
router.get('/ubah/:heandphone_id([0-9a-z]+)', function (req, res) {
heandphone.findOne({_id: req.params.heandphone_id}).exec(function(err, heandphone) {
if (err) throw err;
res.render('heandphone_tambah', {title: 'Ubah heandphone', data: heandphone});
});
});

router.post('/ubah/:heandphone_id([0-9a-z]+)', function (req,res) {
	var data_berubah = req.body;
	heandphone.findOneAndUpdate({_id: req.params.heandphone_id}, data_berubah).exec(function(err) {
		if (err)throw err;
	res.redirect('/heandphone');
	});
});

//hapus data
router.get('/hapus/:heandphone_id([0-9a-z]+)', function(req, res) {
	heandphone.findOneAndRemove({_id: req.params.heandphone_id}).exec(function(err){
	if (err) throw err;
	res.redirect('/heandphone');
	});
	});
module.exports = router;
