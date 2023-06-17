const db = require("../models");
const S3 = require("aws-sdk/clients/s3");
const awss = "arn:aws:s3:::medicalsupplies";
const bucketname = "medicalsupplies";
const awsRegion = "ap-southeast-2";
const awsAccessKey = "AKIAUP4X73WW7TKQ2ZCM";
const awsSecretKey = "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";
const fs = require("fs");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const s3 = new S3({
  region: awsRegion,
  accessKeyId: awsAccessKey,
  secretAccessKey: awsSecretKey,
  s3ForcePathStyle: true,
});

const uploadFile = async (file) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketname,
    Body: fileStream,
    Key: file.filename,
    ContentType: file.mimetype,
  };

  return s3.upload(uploadParams).promise();
};

exports.createItem = async (req, res) => {
  try {
    const file = req.file;
    const result = await uploadFile(file);
    const newItem = await db.items.create({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      description: req.body.description,
      colors: req.body.colors,
      variant: req.body.variant,
      serialNumber: req.body.serialNumber,
      productCode: req.body.productCode,
      imageURL: result.Location,
    });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const allItems = await db.sequelize.models.items.findAll();
    res.status(200).json({
      success: true,
      allItems,
      message: "appointments record created successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const deleteItem = await db.items.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deleteItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllItemsByCategory = async (req, res) => {
  try {
    const allItems = await db.sequelize.models.items.findAll({
      where: {
        category: req.body.category,
      },
    });
    res.status(200).json({
      success: true,
      allItems,
      message: "appointments record created successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
