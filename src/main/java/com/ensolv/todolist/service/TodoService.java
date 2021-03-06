package com.ensolv.todolist.service;

import com.ensolv.todolist.model.Item;
import com.ensolv.todolist.repo.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
@CrossOrigin("http://localhost:3000")
public class TodoService {
    private final TodoRepo todorepo;

    @Autowired
    public TodoService(TodoRepo todorepo) {
        this.todorepo = todorepo;
    }

    public Item addItem(Item item){
        return todorepo.save(item);
    }

   public List<Item> findAllItems(){
        return todorepo.findAll();
   }

   public Item findItemById(Long id){
        return todorepo.findById(id).orElseThrow(()-> new IllegalArgumentException("USER NOT FOUND"));
   }

   public Item updateItem(Item item){
        return todorepo.save(item);
   }

   public void deleteItem(Long id){
        todorepo.deleteById(id);
   }
}
