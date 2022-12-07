const express = require('express');
const app = express();
const PORT = 4000;
app.use(express.static('src/public'));

app.get('/',(req, res) => {
    res.render("index");
})
app.listen(PORT, () => console.log('Server listening on port:',PORT))