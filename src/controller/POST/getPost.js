import db from "../../connection"

const getPost = async (req, res) => {
    const userId = req.userId
    const { judul, body } = req.body
    try {
        const response = await db.post.create({
            data : {
                judul, body, userId
            }
        })
        res.json(response)
    } catch (error) {
        console.info(error)
        res.json(error)
    }
}

export default getPost