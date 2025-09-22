// File: backend/controllers/contact.controller.ts
import Contact from "../models/contact.model";

export class ContactController {
public saveContact = async (req:any, res:any) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newLead = new Contact({ name, email, message });
    await newLead.save();

    res.status(201).json({ message: "Lead saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
};
