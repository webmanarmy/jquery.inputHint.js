jquery.inputHint.js v2.0
  A jQuery Plugin that adds hints to <input type="text" title="Hint goes here" />

 Intended for use with the latest jQuery
  http://code.jquery.com/jquery-latest.js

 Copyright 2011, Todd Williams
 Dual licensed under the MIT or GPL Version 2 licenses.
  http://jquery.org/license

 Basic Usage:

    $(document).ready(function () { $(".text").inputHint(); });
    <input name="name" class="text" type="text" title="Enter Name" />
 
 Advanced Usage:

    $(document).ready(function () {
      $(".text").inputHint({
        fadeOutSpeed: 200,
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '12px',
        hintColor: '#888',
        padding: '4px'
      });
    });
    <input name="name" class="text" type="text" title="Enter Name" />