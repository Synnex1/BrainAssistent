import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Note } from '../model/note.model';

@Injectable()
export class NoteService {
private notes : Note[] = [];

constructor(private storage: Storage) {
}
    saveNotes() {
        this.storage.set("notes", this.notes);
    }

    addNote(note: Note) {
        this.notes.unshift(note);
        this.saveNotes();
    }

    //not working yet ------------------------------------------------>
     removeNote(note: Note) {
         let index: number = this.notes.indexOf(note);
         if(index !== -1) {
             this.notes.splice(index, 1);
         }
         this.saveNotes();
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