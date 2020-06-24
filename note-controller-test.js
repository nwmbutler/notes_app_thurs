const { NoteList } = require("./note-list-model");
const { assert } = require("console");
const { NoteController } = require("./note-controller");

function instantiateNoteController() {
  var list = new NoteList;
  var controller = new NoteController(list);
  assert.isTrue(controller.noteListModel instanceof NoteList);
}

function innnerHTMLContainsPassedFavourite() {
  var list = new NoteList;
  var controller = new NoteController(list);
  list.addNote('Pesto');

  assert.isTrue(document.get)

}



instantiateNoteController();