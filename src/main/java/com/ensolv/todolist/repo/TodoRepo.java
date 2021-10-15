package com.ensolv.todolist.repo;

import com.ensolv.todolist.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<Item, Long> {
}
