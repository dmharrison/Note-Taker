const router = require("express").Router();

// Import our modular routers for /notes
const notesRouter = require("./apiRoutes");

router.use("/apiRoutes", notesRouter);

module.exports = router;
