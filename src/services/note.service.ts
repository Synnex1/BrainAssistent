export class NoteService {
    private notes : {title: string, description: string}[] = [];

    addNote(note: {title: string, description: string}) {
        this.notes.push(note);
    }

    getNotes() {
        //return copy of the array
        return this.notes.slice();
    }
}