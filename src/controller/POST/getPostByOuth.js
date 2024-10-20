import db from "../../connection";

const getPostByAuth = async (req, res) => {
    const userId = req.userId;  // Pastikan middleware sebelumnya mengatur req.userId dengan benar
    // const { id } = req.params;
    // const paramsId = parseInt(id);  // Parsing id dari params

    
    
    try {
            
        
        const getPost = await db.post.findFirst({
            where: {
                userId
            },
        });

        if (!getPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.json(getPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred" });
    }
};

export default getPostByAuth;
