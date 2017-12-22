var util = require('util')
var Base = require('hmpo-form-wizard').Controller

var Controller = function() {
	Base.apply(this, arguments)
}

util.inherits(Controller, Base)

Controller.prototype.get = function successHandler(req, res, callback) {

	if (req.sessionModel.get('change-name') == false){
		return res.redirect('./declaration')
	} else {
	switch (req.sessionModel.get('change-of-name-reason')) {
		case 'Marriage-or-civil-partnership':
			return res.redirect('./name-change-docs#marriage')
		case 'Divorce':
			return res.redirect('./name-change-docs#divorce')
		case 'Small':
			return res.redirect('./name-change-docs#first-name')
		case 'Gender-reassigment':
			return res.redirect('./name-change-docs#gender')
		case 'I-changed-my-name-another-way':
			return res.redirect('./name-change-docs#other')
	}
	}
}

module.exports = Controller
