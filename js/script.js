jQuery(document).ready(function () {
     
    $(".phone").mask("+375 (99) 999-99-99");    
   
    jQuery('.btn').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
                    form.find('.status').html('Форма отправлена успешно');
    			},
    			error:	 function() {
    			     form.find('.status').html('Серверная ошибка');
    			}
    		});
    	}
    });


});