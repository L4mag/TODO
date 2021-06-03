package com.example.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String title;

    private String description;

    private Date createdAt;

    public Note(String title, String description){
        this.title = title;
        this.description = description;
        createdAt = new Date();
    }

    public Note() {

    }

    public Integer getId() {
        return id;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public boolean equals(Object o){
        if(this == o) return true;
        if(o == null || getClass() != o.getClass()) return false;
        Note note = (Note)o;
        return Objects.equals(id, note.id) &&
                Objects.equals(title, note.title) &&
                Objects.equals(description, note.description) &&
                Objects.equals(createdAt, note.createdAt);
    }

    @Override
    public int hashCode(){
        return Objects.hash(id, title, description, createdAt);
    }

    @Override
    public String toString(){
        return "Note{" +
                "id=" + id +
                ", title='" + title + "\'" +
                ", description='" + description + "\'" +
                ", createdAt='" + createdAt + "\'" +
                "}";
    }
}
