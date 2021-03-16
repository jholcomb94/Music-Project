package com.example.demo.REST;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entity.Song;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SongController {
    private CRUD crud;
    @Autowired
    public SongController(@Qualifier("songCRUD") CRUD crud){
        this.crud = crud;
    }
    @GetMapping({"/retrieveAllSongs"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retrieveSong/{songID}"})
    public Object retrieveSong(@PathVariable int songID){
        return this.crud.getById(songID);
    }
    @PutMapping({"/updateSong"})
    public Object updateSong(@RequestBody Song song)
    {
        crud.update(song);
        return song;
    }
    @DeleteMapping({"/deleteSong/{id}"})
    public String deleteSong(@PathVariable int id){
        Song song = (Song) crud.getById(id);
        if(song == null)
        {
            throw new RuntimeException("Song not found! id:" + id);
        }
        crud.deleteById(id);
        return  "Deleted Song id: " + id;
    }

    @PostMapping("/addSong")
    public Song addSong(@RequestBody Song song)
    {
        song.setId(0);
        crud.update(song);
        return song;
    }


}
