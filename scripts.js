function messagePrompt() {
    //Show message
    var email = prompt("Write your email here", "");
    //Check for email
        if (email != null && email != ""){
            alert("Thanks for your email!");
        }
        //Check if user press cancel
        else if (email === null){
            alert("You can come anytime!")
        }
        //Check if user didn't put a email 
        else {
            alert("You didn't write any email!");
            email = prompt("Write your email here", "")
            if (email != null && email != "") {
                alert("Thanks for your email!");
            } else {
                alert("You can come anytime!")
            }
        }
    }