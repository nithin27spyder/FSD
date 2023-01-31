

function loginvalidation(){
  var email = document.forms["loginform"]["email"].value;
  var password = document.forms["loginform"]["password"].value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
     
    if (email == "" || !email.match(mailformat)) {
      alert("Please enter a valid email address");
      document.forms["loginform"]["email"].style.border="2px solid red";
      document.forms["loginform"]["email"].style.background="red";
      return false;
    }
    else if (password == "" || !password.match(passformat)) {
      alert("Please enter a valid password.password must be 8 characters atleast 1 number,1 letter,1 special character");
      document.forms["loginform"]["password"].style.border="2px solid red";
      document.forms["loginform"]["password"].style.background="red";
      return false;
    }
    else{
        document.forms["loginform"]["email"].style.border="2px solid green";
        document.forms["loginform"]["email"].style.background="green";
        document.forms["loginform"]["password"].style.border="2px solid green";
        document.forms["loginform"]["password"].style.background="green";
        alert("Login Successful");
        
        
    }
  }

function signUpvalidation(){
    var name = document.forms["signupform"]["name"].value;
    var email = document.forms["signupform"]["email"].value;
    var password = document.forms["signupform"]["password"].value;
    var confpassword = document.forms["signupform"]["confirmpwd"].value;
    var nameformat = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var passformat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
     
    if (name == "" || !name.match(nameformat)) {
      alert("Please enter a valid  name");
      document.forms["signupform"]["name"].style.border="2px solid red";
      document.forms["signupform","name"].style.background="red";
      return false;
    }
    else if (email == "" || !email.match(mailformat)) {
      alert("Please enter a valid email address");
      document.forms["signupform"]["email"].style.border="2px solid red";
      document.forms["signupform"]["email"].style.background="red";
      return false;
    }
    else if (password == "" || !password.match(passformat)) {
      alert("Please enter a valid password.password must be 8 characters atleast 1 number,1 letter,1 special character");
      document.forms["signupform"]["password"].style.border="2px solid red";
      document.forms["signupform"]["password"].style.background="red";
      return false;
    }
    else if (confpassword == "" || !confpassword.match(passformat)) {
      alert("Password do not match");
      document.forms["signupform"]["confirmpwd"].style.border="2px solid red";
      document.forms["signupform"]["confirmpwd"].style.background="red";
      return false;
    }
    else if (password === confpassword.match(passformat)) {
      alert("Entered password is same");
      document.forms["signupform"]["password"].style.border="2px solid red";
      document.forms["signupform"]["password"].style.background="red";
      document.forms["signupform"]["confirmpwd"].style.border="2px solid red";
      document.forms["signupform"]["confirmpwd"].style.background="red";
      return false;
    }else{
        document.forms["signupform"]["name"].style.border="2px solid green";
        document.forms["signupform"]["name"].style.background="green";
        document.forms["signupform"]["email"].style.border="2px solid green";
        document.forms["signupform"]["email"].style.background="green";
        document.forms["signupform"]["password"].style.border="2px solid green";
        document.forms["signupform"]["password"].style.background="green";
        document.forms["signupform"]["confirmpwd"].style.border="2px solid green";
        document.forms["signupform"]["confirmpwd"].style.background="green";
        alert("signup succesful");
    }
  }