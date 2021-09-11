$('input').change(function(){
    var ch = $('input:checkbox:checked').length;
    if(ch!= 1){
    document.getElementById('result').innerHTML = ch+" boxes are checked";}
    else
    {
        document.getElementById('result').innerHTML = ch+" box is checked";
    }
});
