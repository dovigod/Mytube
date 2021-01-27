import express from "express";
import routes from "../routes";

const globalRouter = express.Router();


globalRouter.get(routes.home, (req, res) => res.send("hello from home"));

globalRouter.get(routes.join, (req, res) => res.send("hello from join"));


globalRouter.get(routes.login, (req, res) => res.send("hello from login"));


globalRouter.get(routes.logout, (req, res) => res.send("hello from logout"));


globalRouter.get(routes.search, (req, res) => res.send("hello from search"));


export default globalRouter;
