function instantiateNoteController() {
  var list = new NoteList;
  var controller = new NoteController(list);
  assert.isTrue(controller.noteListModel instanceof NoteList);
}

function innnerHTMLContainsPassedFavourite() {
  var list = new NoteList;
  var controller = new NoteController(list);


  controller.renderHtml();
  assert.isTrue(this.div.id === 'Pesto')
}



instantiateNoteController();
innnerHTMLContainsPassedFavourite();