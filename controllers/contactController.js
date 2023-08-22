const asyncHandler = require("express-async-handler");
const Contact = require("../models/connectModels");
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ contacts });
});

const createContact = asyncHandler(async (req, res) => {
  console.log("the request is:", req.body);
  const { name, email, phoneno } = req.body;
  if (!name || !email || !phoneno) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phoneno,
  });
  res.status(201).json({ contact });
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("not found");
  }
  res.status(200).json({ contact });
});

const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let contact;

  try {
    contact = await Contact.findById(id);
  } catch (error) {
    throw new Error("Contact not found");
  }
  if (!contact) {
    res.status(404);
    throw new Error("not found");
  }

  const updatedContact = await contact.updateOne({ email: "sharan@gmail.com" });

  res.status(200).json({ message: "updated" });
});

const deleteContact = asyncHandler(async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  let contact;

  try {
    contact = await Contact.findById(id);
  } catch (error) {
    throw new Error("Contact not found");
  }
  if (!contact) {
    res.status(404);
    throw new Error("not found");
  }

  await contact.deleteOne();
  res.status(200).json({ message: "Deleted" });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
