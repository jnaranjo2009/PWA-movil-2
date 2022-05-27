
//servi worker
if('serviceWorker' in navigator){
    console.log('si puede');

    navigator.serviceWorker.register('./sw.js')
    .then(res => console.log('sw cargado correctamente'))
    .catch(err => console.log('no se cargao el serviworker'));
}
else{
    console.log('no se puede');
}


//scroll suavizado
$(document).ready(function(){
    $("menu a").click(function(e)
    {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        })
        return false;
    });
});