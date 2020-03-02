const dataPath = require("../data/allVideos.json");

const allVideosRoutes = (app) => {
    app.get("/allVideos/:id", (req, res) => {
        const videoId = dataPath.find(videoObj => {
            return req.params.id === videoObj.id;
        });
        res.send(videoId);
    });
};

module.exports = allVideosRoutes;