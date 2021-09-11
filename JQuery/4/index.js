$("button").click(function() {
    
    var sum = 0;
    $('#example').find('tbody tr').each(function(){
        $(this).find('td').each(function(i)
        {
            if(i == 5){
            sum += parseInt($(this).text());}
        });

    });
    $('#para1').html("Total Salary Paid: Rs."+sum);

});
