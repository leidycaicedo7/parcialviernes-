const { Router } = require("express");
const router = Router();
const apiRoute = '/api';
const controllerspeso= require("../Controllers/controllerspeso")

router.get(apiRoute + '/peso',controllerspeso.getAll);
router.post(apiRoute + '/peso',controllerspeso.create);



module.exports = router;