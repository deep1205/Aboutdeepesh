
function submitform()
{
    document.forms["myform"].submit();
}
jQuery(document).ready(function($){
$(document).on( 'frmFormComplete', function( event, form, response ) {
var formID = $(form).find('input[name="form_id"]').val();
});
});
