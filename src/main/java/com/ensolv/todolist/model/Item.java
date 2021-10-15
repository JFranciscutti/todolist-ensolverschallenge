package com.ensolv.todolist.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Item implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable=false,updatable=false)
    private Long id;
    @NotNull
    private String title;
    private boolean done;

    public void setTitle(String title) {
        this.title = title;
    }

    public Item() {
    }

    public Item(Long id, String title, boolean done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}
