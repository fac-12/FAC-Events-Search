const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by");
// app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
