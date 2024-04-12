$('a').on('click', function(e){
    e.preventDefault();
    let valor   = $("#valor").text();
    let vl = valor.replace("R$", "")
    let link = $(this).attr('href');
    location.href= link + '?vl='+vl;
});
