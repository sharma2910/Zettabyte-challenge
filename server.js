
const express = require('express');
const app = express();

app.use(express.static(`./dist/challenge4`));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/challenge4/' }
    );
});

app.listen(process.env.PORT || 8080);