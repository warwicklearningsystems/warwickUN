$('#nav-drawer .list-group .list-group-item').keypress(function (e) {
    var key = e.which;
    var click = e.target;
    if (key == 13) {
        click.querySelector('a').click();
        return false;
    }
});