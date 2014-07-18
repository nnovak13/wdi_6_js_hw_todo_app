var ToDoApp = {
  initialize: function() {
    $('#da-Golden-Snitch').click(function(event) {
      alert('You did it!');
      event.preventDefault();
    });

    // $('#disorient').click(this.mirrorText);
    // $('#random-color-button, .color-changing').click(this.randomizeColor);
    // $('#word-form').submit(this.addFunnyWord);
    // $('#words-list').on('click', 'li', this.randomizeColor);
    // $('#randomize-words-button').click($.proxy(this.randomizeWords, this));
  },

  // mirrorText: function() {
  //   $(this).toggleClass('mirror');

};
// $(document).ready(function() {

// });

$(document).ready(function(){ ToDoApp.initialize(); });

// In the $(document).ready() handler in app_ready.js, add a click event handler to your "Create" button that calls a function on TodoApp, which will create the item from the text in the form field
