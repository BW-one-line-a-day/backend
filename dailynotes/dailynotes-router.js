const express = require('express');

const DailyNotes = require('./dailynotes-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await DailyNotes.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get notes' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const notes = await DailyNotes.findById(id);

    if (notes) {
      res.json(notes);
    } else {
      res.status(404).json({ message: 'Could not find daily post with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get daily posts' });
  }
});

router.get('/user/:id/posts', async (req, res) => {
  try {
    const { id } = req.params
    const notes = await DailyNotes.findByUserId(id);
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get notes' });
  }
})


router.post('/', async (req, res) => {
  try {
  const notes = await DailyNotes.add(req.body);
    res.status(201).json({message: 'Note created sucessfully'});
  } catch (err) {

    res.status(500).json({ message: 'Failed to create new daily post' });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const notes = await DailyNotes.findById(id);

    if (notes) {
      const updatedNote = await DailyNotes.update(changes, id);
      res.json(updatedNote);
    } else {
      res.status(404).json({ message: 'Could not find daily post with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update daily post' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await DailyNotes.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find daily post with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete daily post' });
  }
});

module.exports = router;