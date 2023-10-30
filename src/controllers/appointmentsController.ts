import { Request, Response } from "express"


const createAppointment = async(req: Request, res: Response) => {
  try {
    const name = req.body.name

    //validar si hace falta la info
    //tratar si hace falta la info

    const newAppointment = await Tattoo_artist.create(
      {
        name: name,
        id: req.token.id
      }
    ).save()

    return res.json(
      {
        success: true,
        message: "users retrieved",
        data: tattoo_artists
      }
    )
    
  } catch (error) {
    return res.json(
      {
        success: false,
        message: "task cant be created",
        error: error
      }
    )
  }
}

export { createAppointment }