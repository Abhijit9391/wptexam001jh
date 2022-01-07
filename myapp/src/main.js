const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
const { addMessage, showmessage } = require("./user");

app.listen(4000, () => console.log("Server Started"));

app.get("/user", async (req, res) => {

    let list = await showMessage();
    res.json(list);
});

app.post("/add-message", async (req, res) => {
    const message = req.body;
    await addMessage(message);
    res.json({ message: "Message Added successfully" });
})