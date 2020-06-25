(function (exports) {
  function NoteController(noteList) {
      this.noteListModel = noteList;
      this.view = new NoteListView(this.noteListModel);
  };

  NoteController.prototype.renderHtml = function() {
    test = document.getElementById("app");
    test.innerHTML = this.view.htmlWrap();
  }
  exports.NoteController = NoteController;
})(this);
  