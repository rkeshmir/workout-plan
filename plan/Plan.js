const mongoose = require('mongoose');
const PlanSchema = new mongoose.Schema({
    name: String,
    default_period: Number,
    items: [
        {
            period: Number,
            name: String,
            sets: [
                {
                    number: Number
                }
            ]
        }
    ]
});
mongoose.model('Plan', PlanSchema);
module.exports = mongoose.model('Plan');
