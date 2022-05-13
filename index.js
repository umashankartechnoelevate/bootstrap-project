function validate()
{
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let sub=document.getElementById("sub");
    let comm=document.getElementById("comm");

    if(name.value=="")
    {
        // alert("please enter name")
        document.getElementById("nameerror").innerHTML="Please enter your name"
    }
    if(email.value=="")
    {
        document.getElementById("emailerror").innerHTML="Please enter your valid email id"
    }
    if(sub.value=="")
    {
        document.getElementById("suberror").innerHTML="Please enter your name"
    }
    if(comm.value=="")
    {
        document.getElementById("commerror").innerHTML="Please enter your name"
    }

}

