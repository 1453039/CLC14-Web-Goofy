$(document).ready(function() {
    $('#confirm_checkout').change(function() {
        if ($("input:radio[name=radioGroup]:checked").val() == 3) {
            $("#infor").slideDown();
        } else {
            $("#infor").slideUp();
        }
    });
});