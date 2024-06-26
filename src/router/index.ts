import { Router } from "express";
import homeRouter from "./home.route";
import authRouter from "./auth.route";

const appRouter = Router();

appRouter.use("/", homeRouter);
appRouter.use("/auth", authRouter);

export default appRouter;
