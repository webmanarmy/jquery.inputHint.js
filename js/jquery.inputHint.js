/*!
 * jquery.inputHint.js v1.0
 *  A jQuery Plugin that adds hints to <input type="text" title="Hint goes here" />
 *
 * Intended for use with the latest jQuery
 *  http://code.jquery.com/jquery-latest.js
 *
 * Copyright 2011, Todd Williams
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *  http://jquery.org/license
 *
 * Usage:
 *  <input name="name" class="inputHint" type="text" title="Enter Name" />
 *  $(document).ready(function () { $(".inputHint").inputHint(); });
 */
(function ($) {
	$.fn.inputHint = function () {
	    try {
			$(this).each(function () {
				if($(this).val() == '' || $(this).val() == $(this).attr('title')) {
					$(this).val($(this).attr('title')).addClass('default');
				}
			});
		
    		$(this).live('click, keyup, focus', function () {
    		    if($(this).hasClass('default')) {
    		        $(this).val('').removeClass('default');
    		    }
    		}).live('blur', function () {
    		   if($(this).val() == '') {
    		       $(this).val($(this).attr('title')).addClass('default');
    		   }
    		});
    	}
    	catch(error) {}
		
		return $(this);
	};
})(jQuery);