const mongoose = require('mongoose');

const DivisioncategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
})


DivisioncategorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

DivisioncategorySchema.set('toJSON', {
    virtuals: true,
});

exports.Division = mongoose.model('Division', DivisioncategorySchema);