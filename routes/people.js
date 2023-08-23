const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// Handle GET request to fetch a list of people
router.get("/", getPeople);

// Handle POST request to add a new person
router.post("/", createPerson);

// Handle POST request to add a new person via Postman route
router.post("/postman", createPersonPostman);

// Handle PUT request to update a person's name by ID
router.put("/:id", updatePerson);

// Handle DELETE request to remove a person by ID
router.delete("/:id", deletePerson);

module.exports = router;
