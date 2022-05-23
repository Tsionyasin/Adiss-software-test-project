const { date } = require('yup');
const Employee = require('../models/employee.model');



exports.AddEmployee = async (req, res) =>{
    const {name, date, gender, salary} = req.body;
    if (!name){
        res.status(400).json({
            status: 'fail',
            message: 'name can not be empty'
        })
    }
    if (!gender){
        res.status(400).json({
            status: 'fail',
            message: 'name can not be empty'
        })
    }
    if (!name){
        res.status(400).json({
            status: 'fail',
            message: 'name can not be empty'
        })
    }
    let newEmployee = new Employee({name, date, gender, salary});

    await newEmployee.save();
    console.log(newEmployee)

      return res.status(200).json({
        status: 'succes',
        message: 'registration successful'

      })

    
}
exports.GetEmployeeById = async(req, res) =>{
    const id = req.params.id;
    Employee.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "id not found" + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({
            message: "error retriving with id" +
              id
          });
      })
}
exports.EditEmployee = async(req, res) => {
    
    const id = req.params.id;
    const { name, gender, salary } = req.body;
    const newData = { name, gender, salary }
    Employee.updateOne({id: id}, newData).then(

        () => {
            res.status(201).json({
              message: 'updated successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
        }
    


exports.GetEmployee = async(req, res) =>{
    const EmployeeList = await Employee.find({})
    res.json(EmployeeList);
}

exports.DeleteEmployee = async(req, res) =>{
  Employee.deleteOne({_id: req.params.id}).then(
      ()=>{
          res.status(200).json({
              message: 'Deleted!'
          });
      }
  ).catch(
      (error) => {
          res.status(400).json({
              error: error
          });
      }
  );

      }
