const express = require("express");
const router = express.Router();

const MensRanking = require("../models/mens");

//Handling POST RESTAPI REQUEST
router.post("/mens", async(req, res) => {

    try {
        const addingMensRecord = new MensRanking(req.body);
        console.log(req.body);
        const insertMen = await addingMensRecord.save();
        res.status(201).send(insertMen);

    } catch (e) {

        res.status(400).send(e);
    }
});

//Handling GET REQUEST
router.get("/mens", async(req, res) => {

    try {
        const getManRanking = await MensRanking.find({}).sort("name");
        res.status(201).send(getManRanking);

    } catch (e) {

        res.status(400).send(e);
    }
});

//Handling Individual GET REQUEST
router.get("/mens/:id", async(req, res) => {

    try {
        const _id = req.params.id;
        const getMenRankingByID = await MensRanking.find({ _id });
        res.status(201).send(getMenRankingByID);

    } catch (e) {

        res.status(400).send(e);
    }
});

//Handling Individual Update REQUEST
router.patch("/mens/:id", async(req, res) => {

    try {
        const _id = req.params.id;
        const updateMenRankingByID = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(201).send(updateMenRankingByID);

    } catch (e) {

        res.status(500).send(e);
    }
});


//Handling Individual Delete REQUEST
router.delete("/mens/:id", async(req, res) => {

    try {
        const deleteMenRankingByID = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(201).send(deleteMenRankingByID);

    } catch (e) {

        res.status(500).send(e);
    }
});

module.exports = router;