import { Op } from "sequelize";
import Product from "../../../DB/models/product.model.js";
import User from "../../../DB/models/user.model.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, UserId } = req.body;
    const product = await Product.create({
      title,
      price,
      UserId,
    });
    res.json({ message: "Product Created", product });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal server error" });
  }
};

// list all products
export const listProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      // attributes: ["title", "price"],
      // where: {
      //   price: {
      //     [Op.gte]: 40000,
      //   },
      // },
      include: [{ model: User, attributes: ["name", "email"] }],
      // limit: 1,
      // offset: 1, // pagination
    });
    res.json({ products });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal server error" });
  }
};


// break till 10:07 pm 