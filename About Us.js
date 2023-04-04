function matchpass()
{
    var fp=document.f1.password.value;
    var sp=document.f1.password2.value;
    if( fp==sp )
    {
        return true;
    }
    else 
    {
        alert("Password must be same!!");
        return false;
    }
} 
function naam()
{
    var a=document.f1.name.value;
    if(a=="")
    {
        alert("Name can't be blank!!");
        return false;
    }
    else
    {
        return true;
    }
}
function matchpass2()
{
    var b=document.f1.password.value;
    if(b.length<5)
    {
        alert("Password should be atleast 5 characters long!!");
        return false;
    }
}
function mailvalidation()
{
    var c=document.f1.email.value;
    var at=c.indexOf("@");
    var dot=c.lastIndexOf(".");
    if(at<1 || dot<at+2)
    {
        alert("Enter a valid email address");
        return false;
    }
}