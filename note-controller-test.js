function instantiateNoteController() {
var list = new NoteList;
var controller = new NoteController(list);
assert.isTrue(controller.noteList instanceof NoteList);
}