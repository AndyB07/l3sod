function Email() {
    var email = document.form1.email.value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
    if (email == "") {
      alert("Please fill the email.");
      document.form1.email.focus();
      return false;
    } else if (!email.match(pattern)) {
      alert("Please enter a valid email address.");
      document.form1.email.focus();
      return false;
    }
    return true;
  } 
  function validate(){
  if(document.form1.name.value==""){
  alert("Please fill the name.");
  document.form1.name.focus();
  return false;   
  }
  else if(document.form1.address.value==""){
  alert("Please fill the address.");
  document.form1.address.focus();
  return false;     
  }
  else if(document.form1.email.value==""){
  alert("Please fill the email.");
  document.form1.email.focus();
  return false;
  }
  else if(document.form1.password.value==""){
  alert("Please fill the password.");
  document.form1.password.focus();
  return false;}  
  else if(document.form1.college.value==""){
  alert("Please fill the college.");
  document.form1.college.focus();
  return false;         
  }
  else if(document.form1.password.value.length<6){
  alert("password must be atleast 6 characters.");
  document.form1.password.focus();
  return false;
  }
  else if(document.form1.check.checked==""){
  alert("you must click on checkbox");
  document.form1.check.focus();
  return false;
  }
  const password=document.getElementById("pasd");
  const confirm=document.getElementById("conf");
  if(password.value!==confirm.value){
    alert("use same password");
  }
   else{
    alert("Registration successful");
    return true;
   }
}