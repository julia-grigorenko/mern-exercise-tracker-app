const Exercise = require('../models/exercise.model');

const getExercises = async (req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
}
const getExercise = async (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        // return 404 if no user found, return user otherwise.
        if(!exercise || exercise.length == 0) {
            res.status(404).json({message: "Exercise not found!"});
        } else {
            res.status(302).json(exercise);
        }
    })
    .catch(err => res.status(400).json('Error: ' + err));
}
const addExercise = async (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}
const updateExercise = async (req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}
const deleteExercise = async (req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = {
    getExercises,
    getExercise,
    addExercise,
    updateExercise,
    deleteExercise
}