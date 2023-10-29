import { Request, Response } from "express";
import { Tattoo_artist } from "../models/Tattoo_artists";

const registerTattoArtist = async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body

    const newArtist = await Tattoo_artist.create({
      name,
      password
    }).save()

    return res.json({
      success: true,
      message: "Artist created succesfully",
      token: newArtist
    })
  } catch (error) {
    return res.status(500).json(
      {
        success: false,
        message: "Artist cant be created",
        error: error
      }
    )
  }
}

const createTask = async(req: Request, res: Response) => {
  try {
    const name = req.body.name

    //validar si hace falta la info
    //tratar si hace falta la info

    const tattoo_artists = await Tattoo_artist.create(
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

// const getAllTasksByUserId = async(req: Request, res: Response) => {
//   try {
//     const taskId = req.params.id
//     const task = await Tattoo_artist.findOne(
//       {
//         select: {
//           id: true,
//           title: true,
//           status: true,
//           created_at: true,
//           user: {
//             id: true,
//             username: true,
//             email: true
//           }
//         },
//         where:{
//           id: parseInt(taskId)
//         },
//         relations: {
//           user: true,
//         },
//       }
//     )

//     return res.json({
//       success: true,
//       message: "tasks by user retrieved",
//       data: task
//     })
//   } catch (error) {
//     return res.json({
//       success: false,
//       message: "tasks cant by user retrieved",
//       error: error
//     })
//   }
// }

// const getTaskByUserId = async(req: Request, res: Response) => {
//   try {
//     const taskId = req.params.id

//     const task = await Tattoo_artist.findOneBy(
//       {
//         id: parseInt(taskId),
//         id: req.token.id
//       }
//     )

//     if (!task) {
//       return res.status(404).json({
//         success: true,
//         message: "task by user doesnt found",
//       })
//     }

//     return res.json({
//       success: true,
//       message: "task by user retrieved",
//       data: task
//     })
//   } catch (error) {
//     return res.json({
//       success: false,
//       message: "task cant by user retrieved",
//       error: error
//     })
//   }
// }

// const updateTaskById = async(req: Request, res: Response) => {
//   try {
//     // recuperamos la info
//     const title = req.body.title
//     const description = req.body.description
//     const status = req.body.status

//     // validar la info

//     // comprobarmos si la task nos pertenece 
//     const taskId = req.params.id

//     const task = await Tattoo_artist.findOneBy(
//       {
//         id: parseInt(taskId),
//         user_id: req.token.id
//       }
//     )

//     if (!task) {
//       return res.status(404).json({
//         success: true,
//         message: "task by user doesnt found and cant updated",
//       })
//     }

//     const updateTask = await Tattoo_artist.update(
//       {
//         id: parseInt(taskId)
//       },
//       {
//         title: title,
//         description: description,
//         status: status
//       }
//     )

//     return res.json({
//       success: true,
//       message: "task updated",
//       data: updateTask
//     })
//   } catch (error) {
//     return res.json({
//       success: false,
//       message: "task cant by updated",
//       error: error
//     })
//   }
// }

export { registerTattoArtist, createTask }