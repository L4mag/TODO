package com.example.accessingdatamysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/data")
public class MainController {
    @Autowired
    private NoteRepository noteRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNote (
            @RequestParam String title,
            @RequestParam String description
    ){
        Note n = new Note(title, description);
        noteRepository.save(n);
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Note> getAllNotes(){
        return noteRepository.findAll();
    }
}
