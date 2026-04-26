const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

// Prices
const menuPrices = {
    idli: 40,
    "plain dosa": 50,
    "ghee karam dosa": 70,
    "onion dosa": 60,
    "masala dosa": 80,
    "chicken biryani": 150,
    "paneer biryani": 130,
    "veg biryani": 120,
    "paneer tikka": 160,
    "chicken tandoori": 200,
    "chicken 65": 180,
    "grill chicken": 220,
    soup: 70
};

// Bill API
app.post("/generate-bill", (req, res) => {
    const items = req.body.items;
    let total = 0;

    items.forEach(item => {
        total += menuPrices[item];
    });

    const gst = total * 0.18;
    const finalAmount = total + gst;

    res.json({
        total,
        gst,
        finalAmount
    });
});

app.listen(PORT, () => {
    console.log(`Server running `);
});