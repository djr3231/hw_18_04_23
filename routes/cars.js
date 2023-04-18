const express= require("express");
const { Carmodel, validateCar } = require("../models/carModel");
const router = express.Router();


router.get("/" , async(req,res)=> {
  
  try{

    const perPage = 4;
    const page = req.query.page - 1 || 0;  
    const data = await Carmodel
    .find({})
    .limit(perPage)
    .skip(page * perPage)
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
});


router.post("/" , async(req,res)=>{
  const validBody = validateCar(req.body)
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try{
    const car = new Carmodel(req.body)
    await car.save();
    res.status(201).json(car)
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})


router.put("/:id" , async (req,res) =>{
    const validBody = validateCar(req.body)
    if (validBody.error) {
      return res.status(400).json(validBody.error.details);
    }
    try{
      const id = req.params.id;
      const data = await Carmodel.updateOne({_id:id},req.body);
      res.json(data);
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })
  
  
  
  router.delete("/:id", async (req,res) => {
    try{
      const id = req.params.id;
      const data = await Carmodel.deleteOne({_id:id})
      res.json(data)
    }
    catch(err){
      console.log(err);
      res.status(502).json({err})
    }
  })
  
  
  module.exports = router;