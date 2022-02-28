<!DOCTYPE html>  
<html>  
<head>  
</head>  
<body>  
    Name: <input type="text" id="name"><br>  
    Email: <input type="email" id="email"><br>  
    Course: <input type="text" id="course"><br>  
<input type="button" value="Set Cookie" onclick="setCookie()">  
<input type="button" value="Get Cookie" onclick="getCookie()">  
  
<script>  
    function setCookie()  
{  
    var obj = {};//Creating custom object  
    obj.name = document.getElementById("name").value;  
    obj.email = document.getElementById("email").value;  
    obj.course = document.getElementById("course").value;  
  
//Converting JavaScript object to JSON string      
var jsonString = JSON.stringify(obj);  
  
    document.cookie = jsonString;  
}  
         function getCookie()  
{  
    if( document.cookie.length!=0)  
    {  
//Parsing JSON string to JSON object  
    var obj = JSON.parse(document.cookie);  
      
        alert("Name="+obj.name+" "+"Email="+obj.email+" "+"Course="+obj.course);  
    }  
    else  
    {  
        alert("Cookie not available");  
    }  
}  
    </script>  
</body>  
</html>