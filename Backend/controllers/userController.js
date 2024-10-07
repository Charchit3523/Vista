import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


// --------------------Route for user login------------------------------
const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {

            return res.json({
                success: false,
                message: "User does not  exists!"
            })

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {

            const token = createToken(user._id)
            res.json({
                success: true,
                token
            })


        } else {
            return res.json({
                success: false,
                message: "Invalid credentials"
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }

}


//------------------- Route dor user registration-------------------------

const registerUser = async (req, res) => {

    try {

        const { name, email, password, address, phone } = req.body;

        // Checking if email of user exist in the system

        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({
                success: false,
                message: "User already exists!"
            })
        }

        // validating eemail format and strongpassword

        if (!validator.isEmail(email)) {

            return res.json({
                success: false,
                message: "Please enter a valid email!"
            })

        }

        if (password.length < 8) {

            return res.json({
                success: false,
                message: "Password should be atleast 8 characters!"
            })

        }

        // encrypting user's password for security reason

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // Creating user

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            address,
            phone
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({
            success: true,
            token
        })

    }
    catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })

    }

}
//------------------- for fetching User data------------------------------

const fetchUser = async (req,res) => {
    
}

// -------------------Route for admin Login------------------------------

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            res.json({
                success: true,
                token
            })
        }
        else {
            res.json({
                success: false,
                message: "Invalid credentials!"
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

export { loginUser, registerUser, adminLogin } 