const multer = require("multer");
// import data from "../frontend/public/assets/images";
//set storage
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./frontend/public/assets/images");
  },
  filename: (req, file, cb) => {
    var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

store = multer({ storage: storage });
module.exports = store;
