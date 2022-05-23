const exp = require("express");
const { connect } = require("mongoose");
const { success, error } = require("consola");
// Bring in the app 
const { DB, DBL, PORT } = require("./config");



// Initialize the application
const app = exp();
app.use(exp.json())
app.use('/employee',require("./routes/employee.route"));

const startApp = async () => {
    try {
      // Connection With DB
      await connect(DB, {
        
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
  
      success({
        message: `Successfully connected with the Database \n${DB}`,
        badge: true
      });
  
      // Start Listenting for the server on PORT
      app.listen(PORT, () =>
        success({ message: `Server started on PORT ${PORT}`, badge: true })
      );
    } catch (err) {
      error({
        message: `Unable to connect with Database \n${err}`,
        badge: true
      });
      startApp();
    }
  };
  
  startApp();