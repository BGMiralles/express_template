import { Request, Response } from "express"
import { Appointment } from "../models/Appointment"


const createAppointment = async(req: Request, res: Response) => {
  try {
    const {tattoo_artist_id, tattoo_id, date} = req.body

    //validar si hace falta la info
    //tratar si hace falta la info

    const newAppointment = await Appointment.create(
      {
        user_id: req.token.id,
        tattoo_artist_id,
        tattoo_id,
        date
      }
    ).save()

    return res.json(
      {
        success: true,
        message: "Appointment retrieved",
        data: newAppointment
      }
    )
    
  } catch (error) {
    return res.json(
      {
        success: false,
        message: "Appointment cant be created",
        error: error
      }
    )
  }
}

export { createAppointment }