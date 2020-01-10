var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:salam@rkeshmir01-i3x1b.mongodb.net/test?retryWrites=true&w=majority')
	.catch(error => console.log(error));

