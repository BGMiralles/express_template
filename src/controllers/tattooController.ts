import { Request, Response } from "express";
import { Tattoo } from "../models/Tattoo";

const createTattoo = async (req: Request, res: Response) => {
  try {
    const { work, description, price } = req.body;

    const descriptionregex = /^[a-zA-Z]+$/;
    if (!descriptionregex.test(description) || description < 0 || description > 255) {
      return res.status(400).json({ message: "Invalid description" });
    }

    const priceRegex = /^\d{1,10}$/;
    if (!priceRegex.test(price)) {
      return res.status(400).json({ message: "Invalid price" });
    }

    const newTattoo = await Tattoo.create({
      id: req.token.id,
      work,
      description,
      price,
    }).save();

    return res.json({
      success: true,
      message: "Appointment retrieved",
      data: newTattoo,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Appointment cant be created",
      error: error,
    });
  }
};

const updateTattoById = async (req: Request, res: Response) => {
  try {
    const { id, work, description, price } = req.body;

    const descriptionregex = /^[a-zA-Z]+$/;
    if (!descriptionregex.test(description) || description < 0 || description > 255) {
      return res.status(400).json({ message: "Invalid description" });
    }

    const priceRegex = /^\d{1,10}$/;
    if (!priceRegex.test(price)) {
      return res.status(400).json({ message: "Invalid price" });
    }

    const updateWork = await Tattoo.update(
      {
        id,
      },
      {
        work,
        description,
        price,
      }
    );

    return res.json({
      success: true,
      message: "Work updated",
      data: updateWork,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Work cant by updated",
      error: error,
    });
  }
};
const deleteTattoo = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;

    const tattooToRemove = await Tattoo.findOneBy({
      id,
    });
    if (tattooToRemove) {
      await Tattoo.remove(tattooToRemove);
    }

    return res.json({
      success: true,
      message: "Work deleted",
      data: tattooToRemove,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Work cant by deleted",
      error: error,
    });
  }
};

export { createTattoo, updateTattoById, deleteTattoo };
