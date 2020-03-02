// const express = require("express");
// const allVideos = require("../data/allVideos");
// const videoList = require("../data/videoList");
// const router = express.Router();

// router.get("/", (req, res) => {
//     res.json(videoList);
// })

const videoListRoutes = require('./videoList');
const allVideosRoutes = require('./allVideos');


const appRouter = (app, fs) => {

    videoListRoutes(app, fs);
    allVideosRoutes(app, fs);
};

module.exports = appRouter;