function submitForm(params){
   var tempParams ={
      from_name:document.getElementById("fromName").value,
	  from_email:document.getElementById("fromEmail").value,
	  date_commented:document.getElementById("date").value,
	  message:document.getElementById("msg").value,
   };
   
   emailjs.send('service_swoz2n7','template_74m79nb',tempParams)
   .then(function(res){
      console.log("success", res.status);
	
   })
}
