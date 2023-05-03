import { Router } from "express";

import { Todo } from '../models/todo';

let todos: Todo[] = [];

const routes = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({todos: todos });
});

router.post('/todo', (req, res, next) => {
    const newTodo:Todo ={
        id: new Date().toISOString(),//curent date cunverted to string
   text: req.body.text
    };

    todos.push(newTodo);
    res.status(200).json({Message: "Updated todo", todos: todos});
});

router.put('/todo/todoId', (req, res, next) => {
    const tid= req.params.todoId;
    const todoIndex = todos.findIndex(todoItem) => todoItem.id === tid=== tid);
    if(todoIndex >= 0) {
        todos[todoIndex] = {id: todos[todoItem].id, text:req,body.text)};
    }
    res.status(404).json({ message: "Could not find item" });
});

router.delete('/todo/:todoId', (req, res, next) => {
    todos= todos.filter(todoItem => todoItem.id !== req.params.todId)
res.status(200).json({message:'deleted todo', todos: todos})
});


export default router;