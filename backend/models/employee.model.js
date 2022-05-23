const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EmployeeSchema = new Schema ({
  
    name:{
       type: String,
       required: true
    },

    date:{
        type: Date,
        default: Date.now()
    },
    gender: {
       type: String,
       required: true
    },
    Salary: {
        type: Number
    }

}, {
    timestamps: true
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee
