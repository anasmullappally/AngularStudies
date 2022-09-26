const dotenv = require("dotenv");
dotenv.config();
const form = require("../models/formModel");
module.exports = {
  submitForm: async (req, res) => {
    console.log(req.body);
    try {
        const response = await form.create({ ...req.body });
        res.status(200).json({ msg: "Form Submitted" });
        
    } catch (err) {
        console.log(err);
        res.status(400).json({error:err})
    }
   
  },
};
