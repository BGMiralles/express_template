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

const updateAppointmentByUserId = async(req: Request, res: Response) => {
  try {
    const {id, tattoo_artist_id, tattoo_id, date} = req.body

    const updateAppointment = await Appointment.update(
      {
        id,
        user_id: req.token.id
      },
      {
        tattoo_artist_id,
        tattoo_id,
        date
      }
    )

    return res.json({
      success: true,
      message: "Appointment updated",
      data: updateAppointment
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "Appointment cant by updated",
      error: error
    })
  }
}

const deleteAppointmentByUserId = async (req: Request, res: Response) => {
  try {
    const appointmentToRemove = await Appointment.findOneBy({
      user_id: req.token.id,
      id : req.body.id
    });
    if (appointmentToRemove) {
      await Appointment.remove(appointmentToRemove);
    }

    return res.json({
      success: true,
      message: "Appointment deleted",
      data: appointmentToRemove,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Appointment cant by deleted",
      error: error,
    });
  }
};

export { createAppointment, updateAppointmentByUserId, deleteAppointmentByUserId }