(function (exports) {
  function NoteController(noteListModel) {
      this.noteListModel = noteListModel;
      this.view = new NoteListView(this.noteListModel);
  };

  NoteController.prototype.renderHtml = function() {
    test = document.getElementById("app");
    test.innerHTML = this.view.htmlWrap();
  }
  exports.NoteController = NoteController;
})(this);
  