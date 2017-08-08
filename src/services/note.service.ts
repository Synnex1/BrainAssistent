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
        this.notes.splice(this.notes.indexOf(note));
        this.storage.set('notes', this.notes);
    }

    getNotes() {
        return this.storage.get('notes')
            .then(
                (notes) => {
                    // if notes is empty -> return empty array , otherwise return notes array
                    this.notes = notes == null ? [] : notes;
                    // returns a copy of the array in the storage
                    return this.notes.slice();
                }
            );
    }
}