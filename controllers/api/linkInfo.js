const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const linlInfoSchema = new Schema(require("../../models/linkInfo"));
const LinlInfo = mongoose.model("LinkInfos", linlInfoSchema);

router
    .get("/short/:key", async (req, res, next) => {
        try {
            let query = {short : req.params.key}
            const data = await LinlInfo.find(query);
            return res.status(200).send({ status: "success", data: data });
        } catch (error) {
            return res.status(500).send({ status: "error", message: error.message });
        }
    })
    .get("/", async (req, res, next) => {
        try {
            let query = req.query ? req.query : {};
            const data = await LinlInfo.find(query);
            return res.status(200).send({ status: "success", data: data });
        } catch (error) {
            return res.status(500).send({ status: "error", message: error.message });
        }
    })
    .post("/", async (req, res, next) => {
        try {
            let datacreate = { ...req.body };
            const itemCreated = await LinlInfo.create(datacreate);
            return res.status(201).send({ status: "success", data: itemCreated })
        } catch (error) {
            return res.status(500).send({ status: "error", message: error.message });
        }
    })
    .delete("/:id", async (req, res, next) => {
        let id = req.params.id
        const itemDeleted = await LinlInfo.deleteOne({ _id: id });
        return res.json({ data: itemDeleted });
    });


module.exports = router;
