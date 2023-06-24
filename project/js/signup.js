function validform() {

    var a = document.forms["my-form"]["full-name"].value;
    var b = document.forms["my-form"]["email-address"].value;
    var c = document.forms["my-form"]["phone number"].value;
    var d = document.forms["my-form"]["select job type"].value;
    var e = document.forms["my-form"]["create password"].value;
    var g = document.forms["my-form"]["repeat password"].value;

    if (a==null || a=="")
    {
        alert("Please Enter Your Full name");
        return false;
    }else if (b==null || b=="")
    {
        alert("Please Enter Your Email address");
        return false;
    }else if (c==null || c=="")
    {
        alert("Please Enter Your Phone number");
        return false;
    }else if (d==null || d=="")
    {
        alert("Please Enter Your Job tupe");
        return false;
    }else if (e==null || e=="")
    {
        alert("Please Enter Your Password");
        return false;
    }else if (g==null || g=="")
    {
        alert("Password do not match");
        return false;
    }

}