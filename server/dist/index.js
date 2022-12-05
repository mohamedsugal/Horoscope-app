"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 7777;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/user', (req, res) => {
    console.log(req.body);
});
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
