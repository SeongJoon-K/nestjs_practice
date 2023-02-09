import { Router } from "express";
import { createCat, deleteCat, patchCat, readAllcats } from "./cats.service";

const router = Router();

router.get("/cats", readAllcats);
router.post("/cats", createCat);

router.put("/cats/:id", patchCat);

router.delete("/cats/:id", deleteCat);

export default router;
