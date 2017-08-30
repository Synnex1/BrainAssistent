import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';

@Injectable()
export class NoteService {
private notes : Note[] = [];

constructor(private storage: Storage) {
}

    addNote(note: Note) {
        this.notes.push(note);
        this.storage.set('notes', this.notes);
    }

    //not working yet ------------------------------------------------>
     removeNote(note: Note) {
        //this.notes.splice(this.notes.indexOf(note), 1);
        //this.storage.set('notes', this.notes);
        //this.storage.remove(key);         //key needed for removing note!!!
    }

    loadNotes() {
        return this.storage.get('notes').then(
            (notes) => {
                this.notes = notes == null ? [] : notes;
                return this.notes;
            });
    }

    getNotes() {
        return this.notes;
    }

    editNote(note: Note) {
        
    }

    filterNotes(searchTerm) {
        return this.notes.filter((note) => {
            return note.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }
}