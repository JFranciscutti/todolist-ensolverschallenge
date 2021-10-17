package com.ensolv.todolist.controller;

import com.ensolv.todolist.model.Item;
import com.ensolv.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping("/all")
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = todoService.findAllItems();
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Long id){
        Item i = todoService.findItemById(id);
        return new ResponseEntity<>(i,HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Item> addItem(@RequestBody Item item) {
        Item i= todoService.addItem(item);
        return new ResponseEntity<>(i, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Item> update(@RequestBody Item item){
        Item i= todoService.updateItem(item);
        return new ResponseEntity<>(i, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        todoService.deleteItem(id);
        return new ResponseEntity<Item>(HttpStatus.OK);
    }
}
