
 $(function () {

   $('div:first-of-type').css("display","block");
   $('h3').click(function () {
     $(this).next().slideToggle(200);
     $('div').not($(this).next()).slideUp(200);
   });
 });
