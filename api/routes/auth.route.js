import express from 'express';
import { signup, signin } from '../controllers/auth.controller.js';
// don't forget to Add .js after importing user defind file. like in above file auth.controller.js //

const router= express.Router();

router.post("/signup", signup);
router.post("/signin",signin)


export default router;

