$(document).ready(function() {
  
    $('.btn_reserve').click(function(){
    $('.md1').fadeIn(0);
      $('body').css('overflow', 'hidden');
  });
    $('.btn_tnx').click(function(){
    $('.md2').fadeIn(0);
      $('body').css('overflow', 'hidden');
  });
    $('.btn-recall').click(function(){
    $('.md3').fadeIn(0);
      $('body').css('overflow', 'hidden');
  });
    $('.btn_order').click(function(){
    $('.md4').fadeIn(0);
      $('body').css('overflow', 'hidden');
  });
  $('.close').click(function(){
    $('.md').fadeOut(0);
      $('body').css('overflow', 'visible');
  });
    
     $('.filter > li').click(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
                else {
                    $(this).addClass('active');
                }
            });
            
            $('.agree').click(function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                }
                else {
                    $(this).addClass('active');
                }
            });

});



var values = [15000, 18000, 22000, 27000, 30000, 50000, 75000, 125000, 150000, 270000, 350000, 600000, 750000];
var slider = $('#price-slider').slider({
      range: true,
      steps: values,
      create: function(e, ui){
      $('#price-slider').slider('values', 1, values.length - 1);
      $('#min_price').val(values[0]);
      $('#max_price').val(values[values.length - 1]);
      },
     slide: function(event, ui){
       $('#min_price').val(ui.stepValue[0]);
       $('#max_price').val(ui.stepValue[1]);
     }
  });