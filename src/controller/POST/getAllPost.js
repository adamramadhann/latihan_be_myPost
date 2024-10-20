import db from "../../connection"

const getAllPost = async (req, res) => {
    try {
        const response = await db.post.findMany()
        res.json(response)
    } catch (error) {
        console.error(error)
    }
}

export default getAllPost