(function($) {
	var setup = {
	  switcher:function(target, settings){
  	  $(target).each(function(){
  	    var $this = $(this);
  	    $('.filter-active', $this).click(function(){
  	      $('.switcher', $(this).parent()).slideToggle('fast');
        })
        $('a', $this).click(function(){
          var $link = $(this);
          var activeText = $link.text();
          $('a.selected', $this).removeClass('selected');
          $('.filter-active', $this).text(activeText);
          $('.switcher', $this).slideUp('fast', function(){
            $link.addClass('selected');
          });
          return settings.follow;
        })
      });
	  }
	},
	methods = {
    init:function(options){
      if(this.length){
    	  var settings = {
      	  follow:false
    	  }
    	  
    	  return this.each(function(){
      	  if(options){
        	  $.extend(settings, options)
      	  }
      	  setup.switcher(this, settings);
    	  })
      }
    }
  };
  
  $.fn.switcher = function(method){
    if(methods[method]){
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
		}else if(typeof method === 'object' || ! method){
			return methods.init.apply(this, arguments);
		}else{
			$.error('Method '+method+' does not exist on jQuery.switcher');
		}
  }
	  
})(jQuery);		
