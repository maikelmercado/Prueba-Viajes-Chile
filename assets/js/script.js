//JavaScript Bootstrap tooltip initialization
$(document).ready(
    function(){
      
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
          return new bootstrap.Tooltip(tooltipTriggerEl)
        })

  // Tooltip para todos los elementos con data-bs-toggle="tooltip"
  $(function () {
      $('[data-toggle="tooltip"]').tooltip();
  });


  // Validación del formulario de contacto

  $('button.btn-primary').click(function() {
    var nombreInput = $('#nombreInput').val();
    var asuntoInput = $('#asuntoInput').val();
    var mensajeInput = $('#mensajeTextarea').val();
    if (nombreInput === '' || asuntoInput === '' || mensajeInput === '') {
        alert('SE DEBEN COMPLETAR TODOS LOS CAMPOS!');
    } else {
        alert('SU MENSAJE HA SIDO ENVIADO CON ÉXITO!');
    }
  });
  
        

  
        
});

