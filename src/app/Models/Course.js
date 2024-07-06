const mongoose = require('mongoose');
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    videoId: String,
    level: String,
    author: String,
    slug: { type: String, slug: "name", unique: true }
}, { timestamps: true });

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model("Course", Course)
