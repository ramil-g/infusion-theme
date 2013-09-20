/**
 * @file
 * A JavaScript file for the theme.
 *
 */

(function($, Drupal, window, document, undefined) {

    $(document).ready(function() {
        /* script for the expanding search field */
        var input = $('input[name=search_block_form]');
        var divInput = $('div.form-item-search-block-form');
        var width = divInput.width();
        var outerWidth = divInput.parent().width() - (divInput.outerWidth() - width) - 28;
        var submit = $('#search-block-form input[type="submit"]');
        var txt = input.val();

        input.bind('focus', function() {
            if (input.val() === txt) {
                input.val('');
            }
            $(this).animate({color: '#000'}, 300); // text color
            $(this).parent().animate({
                width: outerWidth + 'px',
                backgroundColor: '#fff', // background color
                paddingRight: '43px'
            }, 300, function() {
                if (!(input.val() === '' || input.val() === txt)) {
                    if (!($.browser.msie && $.browser.version < 9)) {
                        submit.fadeIn(300);
                    } else {
                        submit.css({display: 'block'});
                    }
                }
            }).addClass('focus');
        }).bind('blur', function() {
            $(this).animate({color: '#b4bdc4'}, 300); // text color
            $(this).parent().animate({
                width: width + 'px',
                backgroundColor: '#e8edf1', // background color
                paddingRight: '15px'
            }, 300, function() {
                if (input.val() === '') {
                    input.val(txt)
                }
            }).removeClass('focus');
            if (!($.browser.msie && $.browser.version < 9)) {
                submit.fadeOut(100);
            } else {
                submit.css({display: 'none'});
            }
        }).keyup(function() {
            if (input.val() === '') {
                if (!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeOut(300);
                } else {
                    submit.css({display: 'none'});
                }
            } else {
                if (!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeIn(300);
                } else {
                    submit.css({display: 'block'});
                }
            }
        });

    });


})(jQuery, Drupal, this, this.document);
