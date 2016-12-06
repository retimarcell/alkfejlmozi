$("#btnLogin").on('click', function(e) {
    e.preventDefault();
    let $modal = $('.modal');
    var hasModal = $modal.length;
    if (hasModal) {

    } else {
        $modal.modal('show');
        return
    }
    
    $modal=$('');

    var formArea = $modal.find('.form-area');
    var alertArea = $modal.find('.alert');

    formArea.load("/login form", function(e) {
        $modal.modal('show');
        loginForm = $('form');
        loginForm.on('submit', function(e) {
            e.preventDefault();
        })
    })
})

//eseménykezelő

/*<div class="modal fade confirm-modal" tabindex="-1" role="dialog" id="loginModal">
    <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-header">Belépés</div>
      <div class="modal-body">
        <div class="alert alert-danger"></div>
        <div class="form-area"></div>
      </div>
    </div>
  </div>
</div>'*/