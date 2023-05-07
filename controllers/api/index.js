const express = require("express");
const api = new express.Router();
const linkInfo = require("./linkInfo") 

api.use('/linkInfo', linkInfo)

module.exports = api;
