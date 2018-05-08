const express = require('express');
const router = express.Router();

// Get /questions
// Route for question collection
router.get('/', (req, res) => {
  // return all the questions
    res.json({response: "You sent me a GET request"});
});

// Post /questions
// Route for creating questions
router.post('/', (req, res) => {
  // return all the questions
  res.json({
    response: "You sent me a POST request",
    body: req.body
  });
});

// Get /questions/:id
// Route for specific questions
router.get('/:qID', (req, res) => {
  // return specific the questions
    res.json({response: "You sent me a GET request for " + req.params.qID});
});

// Post /questions/:id/answers
// Route for creating an answer
router.post('/:qID/answers', (req, res) => {
  // return specific answer
  res.json({
    response: "You sent me a POST request to /answers",
    questionId: req.params.qID,
    body: req.body
  });
});

// PUT /questions/:id/answers/:id
// Edit a specific answer
router.put('/:qID/answers/:aID', (req, res) => {
  res.json({
    response: "You sent me a PUT request to /answers",
    questionId: req.params.qID,
    answerID: req.params.aID,
    body: req.body
  });
});

// DELETE /questions/:id/answers/:id
// Edit a specific answer
router.delete('/:qID/answers/:aID', (req, res) => {
  res.json({
    response: "You sent me a DELETE request to /answers",
    questionId: req.params.qID,
    answerID: req.params.aID,
  });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Edit a specific answer
router.post('/:qID/answers/:aID/vote-:dir', (req, res) => {
  res.json({
    response: "You sent me a POST request to /vote-" + req.params.dir,
    questionId: req.params.qID,
    answerID: req.params.aID,
    vote: req.params.dir
  });
});

module.exports = router;