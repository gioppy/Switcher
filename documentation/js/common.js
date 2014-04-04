jQuery(function(){
  jQuery('#go-down').click(function(e){
    e.preventDefault();
    var ancor = jQuery(this).attr('href');
    jQuery.scrollTo(jQuery(ancor), 800, {
      onAfter:function(){
        window.location.hash = ancor;
      }
    });
  });
  
  jQuery('#demo .switcher-container').switcher();
  
  jQuery('.column .switcher-container').switcher();
})