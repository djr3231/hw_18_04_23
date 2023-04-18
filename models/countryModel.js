const Joi = require('joi');
const mongoose = require ('mongoose')

const countrySchema = new mongoose.Schema({
    name:String,
    pop:Number,
    capital:String,
    img_url:String,
},{timestamps:true})

exports.Countrymodel = mongoose.model("countries" , countrySchema)

exports.validateCountry = (_reqBody) => {
    const joiSchema =  Joi.object({
        name:Joi.string().min(3).max(30).required(),
        pop:Joi.number().min(1).required(),
        capital:Joi.string().min(3).max(80).required(),
        img_url:Joi.string().min(2).required(),
    }) 
    return joiSchema.validate(_reqBody)
}