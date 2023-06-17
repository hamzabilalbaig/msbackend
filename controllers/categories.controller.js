const db = require("../models");

exports.createCategory = async (req, res) => {
  try {
    const newCategory = await db.sequelize.models.categories.create({
      name: req.body.name,
    });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const allCategories = await db.sequelize.models.categories.findAll();
    res.status(200).json({
      success: true,
      allCategories,
      message: "appointments record created successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
