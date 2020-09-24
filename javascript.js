function create(){
    if($('#formCreate').valid() && validAvatar()){
        alert('Create thành công !');
        $('input').val('');
        $('.showAvatar').attr('src', 'images/avatar.png');
    }
}

function validAvatar() {
    if ($('#avatar').val() != ''){
        $('#msg_error').css('display', 'none');
        return true;
    }else {
        $('#msg_error').css('display', 'block');
        return false;
    }
}

function changAvatar(element){
    let img = element.files[0];
    let reader = new FileReader();
    reader.onloadend = function(){
        $('.showAvatar').attr('src', reader.result);
    }
    reader.readAsDataURL(img);
}