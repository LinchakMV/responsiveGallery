$.ajax({
  url: 'http://82.196.1.83:9571',
  dataType: 'json',
  success: function(response) { $.each(response, function(index, value){
  	$(function(){
  		var a = value.filename;
  		var width = value.width;
  		var height = value.height;
  		// console.log(a);
  		$("#basicExample").append('<div class="item" style="height:'+height+'px; width:'+width+'px"><img src="http://82.196.1.83:9571/'+a+'"></div>');
  		$("#basicExample").justifiedGallery({
  			// margins: 4,
  			// rowHeight: auto
  			maxRowHeight: '200',
  			lastRow: 'justify'
  		});
  	})
	
  });
    
  
}
});
