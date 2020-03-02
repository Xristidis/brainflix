const videoListRoutes = (app, fs) => {
    const dataPath = './data/videoList.json';

    // READ
    app.get('/videoList', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });
};

module.exports = videoListRoutes;