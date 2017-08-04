import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {
    private notes : {title: string, description: string}[] = [];

constructor(private storage: Storage) {
}

    addNote(note: {title: string, description: string}) {
        this.notes.push(note);
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