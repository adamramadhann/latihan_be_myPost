const test = async(req, res) => {
    try {
        res.json({
            message : "test berhasil"
        })
    } catch (error) {
        console.error(error)
    }
}

export default test