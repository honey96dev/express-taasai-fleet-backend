import express from "express";
import expressJwt from "express-jwt";
import {session} from "core/config";

import authRouter from "./api/auth";
import coreRouter from "./api/core";
import driversRouter from "./api/drivers";
// import accountRouter from "./api/account";

const router = express.Router();

router.use("/", expressJwt({secret: session.secret})
  .unless({
    path: [
      /\/auth\/*/,
    ]
  }));

router.use("/auth", authRouter);
router.use("/core", coreRouter);
router.use("/drivers", driversRouter);
// router.use("/account", accountRouter);

export default router;
