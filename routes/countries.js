const express = require("express");
const { Countrymodel, validateCountry } = require("../models/countryModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const perPage = 4;
    const page = req.query.page - 1 || 0;
    const data = await Countrymodel.find({})
      .limit(perPage)
      .skip(page * perPage);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.get("/search/country/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const data = await Countrymodel.find({});
    const sB_Country = data.find(item => item.name=== name)

    res.json(sB_Country);



  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.post("/", async (req, res) => {
  const validBody = validateCountry(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const country = new Countrymodel(req.body);
    await country.save();

    res.status(201).json(country);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.put("/:id", async (req, res) => {
  const validBody = validateCountry(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    const id = req.params.id;
    const data = await Countrymodel.updateOne({ _id: id }, req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Countrymodel.deleteOne({ _id: id });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(502).json({ err });
  }
});

module.exports = router;
