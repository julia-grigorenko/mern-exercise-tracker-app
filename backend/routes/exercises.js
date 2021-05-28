const router = require('express').Router();
const ExerciseCtrl = require('../controllers/exercise-ctrl.js');


router.get('/', ExerciseCtrl.getExercises);
router.post('/add', ExerciseCtrl.addExercise);
router.get('/:id', ExerciseCtrl.getExercise);
router.delete('/:id', ExerciseCtrl.deleteExercise);
router.post('/update/:id', ExerciseCtrl.updateExercise);

module.exports = router;