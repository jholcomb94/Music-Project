package com.example.demo.REST;

import com.example.demo.IMPL.CRUD;
import com.example.demo.entity.Album;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AlbumController {
    private CRUD crud;

    @Autowired
    public AlbumController(@Qualifier("albumCRUD") CRUD crud) {this.crud = crud;}
    @GetMapping({"/retrieveAllAlbums"})
    public List<Object> getAll(){
        return crud.getAll();
    }
    @GetMapping({"/retrieveAlbum/{albumId}"})
    public Object retrieveAlbum(@PathVariable int albumId){
        return this.crud.getById(albumId);
    }
    @PutMapping({"/updateAlbum"})
    public Object updateAlbum(@RequestBody Album album){
        crud.update(album);
        return album;
    }
    @DeleteMapping("/deleteAlbum/{id}")
    public String deleteAlbum(@PathVariable int id){
        Album album = (Album) crud.getById(id);
        if(album == null)
        {
            throw new RuntimeException("Album not found! id: " + id);
        }
        crud.deleteById(id);
        return "Deleted Album id : " + id;
    }

    @PostMapping("/addAlbum")
    public Album addAlbum(@RequestBody Album album){
        album.setId(0);
        crud.update(album);
        return album;
    }
}
