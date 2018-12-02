$('.nextarrow').click(function() {
  var openImage = $('.images img.open');
  $('.images img').removeClass('open');
  var nextImage = openImage.next('img');

  if (nextImage.length !=0)
  {
    nextImage.addClass('open');

  }
  else {
    $('.images img').first().addClass('open');
  }
});

$('.prearrow').click(function() {
  var openImage = $('.images img.open');
  $('.images img').removeClass('open');
  var preImage = openImage.prev('img')

  if (preImage.length !=0)
  {
    preImage.addClass('open');
  }
  else {
    $('.images img').last().addClass('open');
  }
});
