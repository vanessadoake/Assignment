// document.getElementsByTagName('h1')
// $('h1').text()
$(document).ready(toDoWhenReady);

function toDoWhenReady() {
  $('.readmore').click(showMore);
  $('.readless').click(showLessContent);
}
  function showMore(event) {
    event.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();

  }

    function showLessContent(event) {
      event.preventDefault();
      $('#show-this-on-click').slideUp(function() {
        $('.readless').hide();
        $('.readmore').show();
      });

}
