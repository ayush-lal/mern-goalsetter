import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController";

const router = express.Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

export { router };