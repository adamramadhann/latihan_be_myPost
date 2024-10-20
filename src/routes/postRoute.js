import { Router } from "express";
import autentication from "../middlewer/autentication";
import getPost from "../controller/POST/getPost";
import getAllPost from "../controller/POST/getAllPost";
import getPostByOuth from "../controller/POST/getPostByOuth";


const postRoute = Router()
postRoute.post("/api/post/user", autentication, getPost)
postRoute.get("/api/getAllPost", getAllPost)
postRoute.post("/api/postById", getPostByOuth)

export default postRoute

