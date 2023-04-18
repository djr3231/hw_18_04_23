const { default: axios } = require("axios");
const express= require("express");
const router = express.Router();

router.get("/" ,async (req,res)=> {
    try{
        const url = "https://monkeys.co.il/api2/covid19.php";
        const resp = await axios.get(url)
        res.json(resp.data)
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
})

router.get("/search/countryData/:name" ,async (req,res)=> {
    try{
        const name = req.params.name;
        const url = "https://monkeys.co.il/api2/covid19.php";
        const resp = await axios.get(url)
        const sB_Country_c = await resp.data.find(item => item.country === name)
        res.json(sB_Country_c)
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
})

module.exports = router;