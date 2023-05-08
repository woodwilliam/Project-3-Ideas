const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    plusReacto,
    sansReacto} = require('../../controllers/thoughtControllers');
// /api/thoughts
router.route('/').get(getThoughts, createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId')
.post(plusReacto).delete(sansReacto)

module.exports = router;