import { Router } from "express";
import { maintenerssignup, maintenerssignin } from "../controllers/mainterners.auth.js";
import {addquestion} from "../controllers/mainterners.questionadd.js";
import { Question } from "../services/Mainterners.Question.js";

const router = Router();

router.post('/auth/signup', maintenerssignup);
router.post('/auth/login',maintenerssignin);
// router.post('/auth');
router.post('/addquestion',addquestion);
router.post('/question', Question);

export default router;