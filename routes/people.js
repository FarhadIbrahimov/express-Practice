const express = require("express");
const router = express.Router();
let { people } = require("../data");

// Handle GET request to fetch a list of people
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

// Handle POST request to add a new person
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name value" });
  }
  res.status(201).json({ success: true, person: name });
});

// Handle POST request to add a new person via Postman route
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

// Handle PUT request to update a person's name by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Find the person by ID
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `There is no person with ID ${id}` });
  }

  // Update the person's name and create a new people array
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

// Handle DELETE request to remove a person by ID
router.delete("/:id", (req, res) => {
  // Find the person by ID
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res.status(404).json({
      success: false,
      msg: `There is no person with ID ${req.params.id}`,
    });
  }

  // Create a new people array excluding the person to be deleted
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
