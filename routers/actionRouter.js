const express = require('express');
const router = express.Router();
const actionsDB = require('../data/helpers/actionModel');

// need to get actions working

router.get('/', (req, res) => {
    actionsDB
        .get()
        .then(projects => res.json(projects))
        .catch(err => res.status(500).json({ error: "Action information could not be retrieved"}))
})

// specific action

router.get('/:id', (req, res) => {
    const id = req.params.id;
    actionsDB   
        .get(id)
        .then(action => {
            if(action.id) {
                res.json(action)
            }
            else {
                res
                    .status(404)
                    .json({ message: "The action with that specified ID was not found"})
            }
        }) // this catch probably is not necessary since i have an else statement
        .catch(err => {
            res
                .status(500)
                .json({ message: "Failed to retrieve action "})
        })
})

//post check to see that the proj id exists 

router.post('/', (req, res) => {
    const {project_id, description, notes};
    if(!project_id || !description || !notes) {
        res
            .status(400)
            .json({ message: "Please input project id/description/notes to continue"})
    }
})
