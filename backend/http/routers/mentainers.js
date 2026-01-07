import { Router } from "express";
import addquestion from "../controllers/mentainers.questionadd.js";

const router = Router();

router.post('/addquestion',addquestion);

export default router;