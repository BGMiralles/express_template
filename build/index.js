"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/users", (req, res) => {
    return res.send();
});
app.post("/users", (req, res) => {
    return res.send();
});
app.put("/users/:id", (req, res) => {
    const filmsId = req.params.id;
    return res.send();
});
app.delete("/users/:id", (req, res) => {
    const filmsId = req.params.id;
    return res.send();
});
app.listen(4001, () => {
    console.log("Server running");
});
