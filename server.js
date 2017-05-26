let express = require('express');
let app = express();
const path = require('path');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/public/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.get('*', function (req, res) {
    res.sendFile(path.resolve('public/dist/index.html'));
})

app.listen(8000, () => console.log("Server is running on port 8000"));
