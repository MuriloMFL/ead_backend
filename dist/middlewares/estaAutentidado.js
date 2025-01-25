"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estaAutentidado = estaAutentidado;
const jsonwebtoken_1 = require("jsonwebtoken");
function estaAutentidado(req, res, next) {
    const tokenAutenticado = req.headers.authorization;
    if (!tokenAutenticado) {
        return res.status(401).end();
    }
    const [, token] = tokenAutenticado.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        req.id_usuario = sub;
        return next();
    }
    catch (err) {
        return res.status(401).end();
    }
}
