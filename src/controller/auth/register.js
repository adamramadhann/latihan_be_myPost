// Sesuaikan dengan import Prisma client di proyekmu

import db from "../../connection";
import bytrip from "bcryptjs"

const register = async (req, res) => {
    const { email, password, name } = req.body;

    try {

        const existingUser = await db.user.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (existingUser) {
            return res.status(400).json({ message: "Email sudah terdaftar" });
        }


        const hashPassword = await bytrip.hash(password, 10);
        const response = await db.user.create({
            data: {
                name,
                email: email.toLowerCase(),
                password: hashPassword,
            },
        });

        res.status(201).json({ message: "Pengguna berhasil didaftarkan", response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
};

export default register;
