import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
    const authHeader = req.headers["authorization"];


    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token tidak ada atau format salah!" });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: "Token invalid atau telah kedaluwarsa!" });
        }

        // Simpan userId dari token ke request
        req.userId = decoded.userId;
        next();
    });

};

export default authentication;
