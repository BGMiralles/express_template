"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/films", (req, res) => {
    return res.send();
});
app.post("/films", (req, res) => {
    return res.send();
});
app.put("/films/:id", (req, res) => {
    const filmsId = req.params.id;
    return res.send();
});
app.delete("/films/:id", (req, res) => {
    const filmsId = req.params.id;
    return res.send();
});
app.listen(4000, () => {
    console.log("Server running");
});
