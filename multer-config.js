
//this is the diskStorage code for showing the file in browser and display it by using multer  
//this is code of secomnd day in coaching so dont confuse anywhere video also availabale for understanding the code 

const multer = require('multer')
const path =  require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+ path.extname(file.originalname);
      cb(null,  uniqueSuffix)
      
    }
    
  })
  
  const upload = multer({ storage: storage })


  module.exports = upload;




  // this is the code of Disk Storage for uploading file in a upload directory with public folder in your file or with ststic .join code this code is taught in first day and secod day upar wala code likh hai humne  ok dont confuse anywhere if ho gya to video hai apne pass 

// const multer = require("multer")
// const path = require("path")

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads')
//   },
//   filename: function (req, file, cb) {
//     console.log(file)
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+path.extname(file.originalname)
//     cb(null, uniqueSuffix)
//   }

// })

// const upload = multer({ storage: storage })
// module.exports = upload



