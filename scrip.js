<script>
    <input type="text" id="name">
     <input type="email" id="email">
     <input type="text" id="course"> 
<input type="button" value="Set Cookie" onclick="setCookie()">  
<input type="button" value="Get Cookie" onclick="getCookie()">  
<script>   
</script>                     
    function setCookie()  
    {  
//Declaring 3 key-value pairs  
        var info="Name="+ document.getElementById("name").value+";Email="+document.getElementById("email").value+";Course="+document.getElementById("course").value;  
//Providing all 3 key-value pairs to a single cookie  
        document.cookie=info;  
    }  
  
    function getCookie()  
    {  
        if(document.cookie.length!=0)  
        {  
       //Invoking key-value pair stored in a cookie  
        alert(document.cookie);  
        }  
        else  
        {  
        alert("Cookie not available")  
        }  
       