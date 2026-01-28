const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/schedule', (req, res) => {
    console.log("استلمت مهمة عالمية:", req.body);
    res.json({ status: "success", message: "تمت الجدولة بنجاح في السحابة" });
});

// هذا السطر هو الذي يجعل Render يشغل السيرفر بنجاح
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Wasabi Server is running on port ${PORT}`);
});

