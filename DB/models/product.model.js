import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import User from "./user.model.js";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: true }
);

User.hasMany(Product, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.belongsTo(User);

export default Product;
