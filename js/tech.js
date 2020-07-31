var mob_template, img_template;

function showTemplate1(template, data) {
    var html = template(data);
    $('#content').html(html);
}

function showTemplate2(template, data) {
    var html = template(data);
    $('#content1').html(html);
}


$(document).ready(function() {
    var source = $('#mob-template').html();
    mob_template = Handlebars.compile(source);

    source = $('#image-template').html();
    img_template = Handlebars.compile(source);



    $('#lol').click(function() {
        showTemplate1(mob_template, gallary);
    });
    $('#lol2').click(function() {
        showTemplate2(img_template, gallary);
    });

    /* $('#ndabtn').click(() => {
        //  showTemplate(po_template, galary);
        var html = template1(galary);
        console.log(html);
        $('#content').html(html);
    });
*/
});