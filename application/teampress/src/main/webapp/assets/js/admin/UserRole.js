$(document).ready(function () {
    $().ready(function () {
        createDataTable('table')
    });
});

function del(id){
    $.post(
        "/usr/userrole/del",
        {
            id: id
        },
        function (result) {
            window.location = '/usr/userrole';
        });
}

function get(id){
    $.post(
        "/usr/userrole/get",
        {
            id: id
        },
        function (result) {
            var u = JSON.parse(result);
            $('#id').val(u.id);
            $('#userId').val(u.user).trigger('change');
            $('#roleId').val(u.role).trigger('change');
        });
}
