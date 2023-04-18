const Joi = require('joi');
const mongoose = require ('mongoose')

const carSchema = new mongoose.Schema({
    company:String,
    model:String,
    year:Number,
    color:String,
    yad:Number,
    },{timestamps:true})

exports.Carmodel = mongoose.model("cars" , carSchema)

exports.validateCar = (_reqBody) => {
    const joiSchema =  Joi.object({
        company:Joi.string().min(2).max(25).required(),
        model:Joi.string().min(1).max(25).required(),
        year:Joi.number().min(1950).max(2023).required(),
        color:Joi.string().min(2).max(50).required(),
        yad:Joi.number().min(0).max(30).required(),
    }) 
    return joiSchema.validate(_reqBody)
}