import { Router } from "express";
import test from "../controller/test";

const testData = Router()
testData.get("/api/test", test)

export default testData