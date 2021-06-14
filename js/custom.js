(function($){
  $(document).ready(function(){
    $('.username .name-field input').focus(function(){
      $('.name-field label').hide();
    });
    $('.username .email-field input').focus(function(){
      $('.email-field label').hide();
    });
    $('.sk1').pieChart({
      barColor: '#30BAE7',
      trackColor:'#DFE0ED',
      lineWidth: '12', 
      size: '140',
    });
       $('.sk2').pieChart({
      barColor: '#D64C8A',
      trackColor:'#DFE0ED',
      lineWidth: '12', 
      size: '140',
    });
   $('.sk3').pieChart({
      barColor: '#A5C6A9',
      trackColor:'#DFE0ED',
      lineWidth: '12', 
      size: '140',
    });
   $('.sk4').pieChart({
      barColor: '#EB7D4A',
      trackColor:'#DFE0ED',
      lineWidth: '12', 
      size: '140',
    });
    var mixingKorbo = mixitup('.portfolio-boxes');
    $('.carousel').carousel();
     });
})(jQuery)