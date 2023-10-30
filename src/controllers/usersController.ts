import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { skip } from "node:test";
import { Appointment } from "../models/Appointment";

const register = async (req: Request, res: Response) => {
  try {
    const { username, email, phone_number, password } = req.body
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email)) {
      return res.json({ mensaje: 'Correo electrónico no válido' });
    }

    const passswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z!@#$%^&*]{4,12}$/;
    if (!passswordRegex.test(password)) {
      return res.json({ mensaje: 'Password no válido' });
    }

    const encryptedPassword = bcrypt.hashSync(password, 10)

    const newUser = await User.create({
      username: username,
      email: email,
      phone_number: phone_number,
      password: encryptedPassword
    }).save()

    return res.json({
      success: true,
      message: "User created succesfully",
      token: newUser
    })
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: "user cant be created",
        error: error
      }
    )
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.findOneBy(
      {
        email: email
      }
    )

    if (!user) {
      return res.status(400).json(
        {
          success: true,
          message: 'User or password incorrect',
        }
      )
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).json(
        {
          success: true,
          message: 'User or password incorrect',
        }
      )
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      "secreto",
      {
        expiresIn: "3h",
      }
    );

    return res.json(
      {
        success: true,
        message: "User logged succesfully",
        token: token
      }
    )
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: "users cant be logged",
        error: error
      }
    )
  }
}


const profile = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneBy(
      {
        id: req.token.id
      }
    )

    return res.json(
      {
        success: true,
        message: "user profile retrieved",
        data: user
      }
    )
  } catch (error) {
    return res.json(
      {
        success: false,
        message: "user profile cant be retrieved",
        error: error
      }
    )
  }
}

const updateUserById = async(req: Request, res: Response) => {
  try {
    const {username, email, phone_number, password} = req.body

    const updateUser = await User.update(
      {
        id: req.token.id
      },
      {
        username,
        email,
        phone_number,
        password
      }
    )

    return res.json({
      success: true,
      message: "user updated",
      data: updateUser
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "user cant by updated",
      error: error
    })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const pageSize = parseInt(req.query.skip as string) || 10
    const page = parseInt(req.query.page as string) || 1

    const skip = (page - 1) * pageSize

    const users = await User.find({
      skip: skip,
      take: pageSize
    });

    return res.json(
      {
        success: true,
        message: "users retrieved",
        data: users
      }
    )

  } catch (error) {
    return res.json(
      {
        success: false,
        message: "users cant be retrieved",
        error: error
      }
    )
  }
}

const getAllAppointmentsByUserId = async(req: Request, res: Response) => {
  try {

    const AllYourAppointment = await Appointment.findBy(
      {
        user_id: req.token.id
      }
    )

    return res.json({
      success: true,
      message: "Appointments retrieved",
      data: AllYourAppointment
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "Appointments cant by retrieved",
      error: error
    })
  }
}

export { register, login, profile, getAllUsers, updateUserById, getAllAppointmentsByUserId }