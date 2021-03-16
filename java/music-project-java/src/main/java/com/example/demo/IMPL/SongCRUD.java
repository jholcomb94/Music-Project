package com.example.demo.IMPL;

import com.example.demo.entity.Song;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;
@Repository
public class SongCRUD implements CRUD{
    private final EntityManager manager;

    public SongCRUD(EntityManager entity) { this.manager = entity; }

    @Override
    @Transactional
    public List<Object> getAll() {
        Session session = this.manager.unwrap(Session.class);
        Query<Object> query =  session.createQuery("from Song");
        return query.getResultList();
    }

    @Override
    @Transactional
    public Object getById(int Id) {
       Session session = this.manager.unwrap(Session.class);
       return session.get(Song.class,Id);
    }

    @Override
    @Transactional
    public void update(Object song) {
        Session session = this.manager.unwrap(Session.class);
        session.saveOrUpdate(song);
    }

    @Override
    @Transactional
    public void deleteById(int Id) {
        Session session = this.manager.unwrap(Session.class);
        Song s = session.get(Song.class,Id);
        session.delete(s);
    }
}
