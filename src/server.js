import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("Not Allowed");
    };
    console.log("Allowed, you may continue.");
    next();
};

const handleHome = (req, res) => {
    return res.end();
};
const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);