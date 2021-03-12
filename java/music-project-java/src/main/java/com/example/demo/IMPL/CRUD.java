package com.example.demo.IMPL;

import java.util.List;

public interface CRUD {
    List<Object> getAll();

    Object getById(int Id);

    void update(Object object);

    void deleteById(int Id);
}
