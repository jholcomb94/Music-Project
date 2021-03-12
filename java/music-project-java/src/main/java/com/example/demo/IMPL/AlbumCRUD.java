package com.example.demo.IMPL;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.entity.Album;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
@Repository
public class AlbumCRUD implements CRUD{
    private final EntityManager manager;
    @Autowired
    public AlbumCRUD(EntityManager manager) {
        this.manager = manager;
    }

    @Override
    @Transactional
    public List<Object> getAll() {
        Session session = this.manager.unwrap(Session.class);
        Query<Object> query  = session.createQuery("from Album");
        return query.getResultList();
    }
    @Override
    @Transactional
    public Object getById(int Id) {
        Session session = manager.unwrap(Session.class);
        return session.get(Album.class,Id);
    }

    @Override
    @Transactional
    public void update(Object album) {
        Session session = manager.unwrap(Session.class);
        session.saveOrUpdate(album);
    }

    @Override
    @Transactional
    public void deleteById(int Id) {
        Session session = manager.unwrap(Session.class);
        Album a = session.get(Album.class,Id);
        session.delete(a);
    }
}
