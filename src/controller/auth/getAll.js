import db from "../../connection"

const getAll = async (req, res) => {
    try {
        const dataAll = await db.user.findMany()
        res.json(dataAll)
    } catch (error) {
        console.error(error)
    }
}

export default getAll