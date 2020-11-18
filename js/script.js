window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-QSZCBWS4Y3');
$(document).ready(function () {

    $('#dialog').hide();
    $("#dialog").dialog({
        autoOpen: true,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });
    let products_html = '<div class="row">'
    let counter = 0

    $.each(products, function (key, product) {
        products_html += counter % 3 === 0 ? '</div><div class="row">' : '';
        products_html += '<div class="col-lg-3 col-sm-12">\n' +
            '                    <img alt="pine-tree" src="img/products/' + product.image + '" alt="' + product.name + '" class="img-fluid img-thumbnail rounded img-responsive"/>\n' +
            '                        <span>' + product.name + '</span>\n' +
            '                  </div>';
        counter++;
    })
    $('#products').append(products_html);
    console.log(products_html);

})