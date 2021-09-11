$('.add-row').click(function(){
    var nam = $('#name').val();
$('table').find('tbody')
         .append('<tr><td><input type = "checkbox" name = "record"></td><td>'+nam+'</td></tr>')
});
/*
 $('.delete-row').click(function(){
 $('table').find('tbody').each(function(){
	 $(this).find('tr').each(function(){
     $(this).find('td').each(function(){
     $("input[@name = record]").each(function(){
            if($(this).is(":checked")){
				document.write('ujjwal');     
			}
			});
			
			for(var y=0; y<x.length; y++){
				if(x[y].
				{
					$(this).parent('tr').remove();
					document.write('ujjwal');
					}}
				});
    });
});
});
$('delete-row').click(function(){
 $('table').on('click' , '.record' , function(){
$(this).parents('remove')
  })
 })
 
*/
$('.delete-row').on('click' , function(){
    $('table tr').has('input[name = "record"]:checked').remove();
});
