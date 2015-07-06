function processForm(){
    
    var FisrtName;
    var LastName;
    var Address;
    var PhoneNumber;
    
    FirstName = document.getElementById("FirstName");
    LastName = document.getElementById("LastName");
    Address = document.getElementById("Address");
    PhoneNumber= document.getElementById("PhoneNumber");
    WebsiteComments= document.getElementById("WebsiteComments");
    
    content = document.getElementById("output")
    
    
	
	content.innerText = "Hello my name is " + FirstName.value + " My Last Name is " + LastName.value + " I live in " + Address.value + " and my Phone Number is " + 
        PhoneNumber.value + " , " + WebsiteComments.value 

  

}