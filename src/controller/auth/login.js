import jwt from 'jsonwebtoken'
import db from '../../connection'
import byscrip from 'bcryptjs'

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const lowerCaseEmail = email.toLowerCase()
        const getUser = await db.user.findUnique({
            where : {
                email : lowerCaseEmail
            }
        })
        if (!getUser) {
            return res.status(404).json({message : "email tidak ditemukan !! "})
        }

        const getPassword = await byscrip.compare(password, getUser.password)
        if(!getPassword) {
            return res.status(404).json({message : "password tidak ditemukan !! "})
        }

        
            const token = jwt.sign({userId : getUser.id}, process.env.JWT_SECRET_KEY, {
                expiresIn : "3d"
            })

        res.json({token})
    } catch (error) {
        res.json(error)
        console.error(error)
    }       
} 

export default login


// import jwt from 'jsonwebtoken';
// import db from '../../connection';
// import bcrypt from 'bcryptjs'; // Perbaikan nama library

// const login = async (req, res) => {
//     const { email, password } = req.body;

//     // Validasi input
//     if (!email || !password) {
//         return res.status(400).json({ message: "Email dan password harus diisi!" });
//     }

//     try {
//         const lowerCaseEmail = email.toLowerCase(); // Pastikan email tidak undefined
//         const getUser = await db.user.findUnique({
//             where: {
//                 email: lowerCaseEmail
//             }
//         });

//         // Jika user tidak ditemukan
//         if (!getUser) {
//             return res.status(404).json({ message: "Email tidak ditemukan!" });
//         }

//         // Verifikasi password
//         const isPasswordValid = await bcrypt.compare(password, getUser.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: "Password salah!" });
//         }

//         const token = jwt.sign({userId : getUser.id}, process.env.JWT_SCRET_KEY, {
//             expiresIn : "3d"
//         })

//         res.json({token})
//     } catch (error) {
//         res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
//         console.error(error);
//     }
// };

// export default login;
