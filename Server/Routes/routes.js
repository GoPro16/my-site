var express = require('express');
var router = express.Router();



var WebMethods = require('../Controllers/WebController.js');
/* ============ API ENDPOINTS ============ */


/* ============ WEB ENDPOINTS ============ */
router.get("/",WebMethods.getHome);

router.get("/blogs",WebMethods.getBlogs);
router.post("/blogs",WebMethods.postBlog);


module.exports = router;