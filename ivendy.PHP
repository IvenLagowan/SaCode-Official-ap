<html>
<body>
<form method="post">
Enter a number;
<input type="number" name="number">
<input type="submit" value="submit">
</form>
</html>
<?php
if($_POST)
$number = $_POST['number'];
//divide entered number by 2
//if the number is 0 then the number is evenotherwise the number is odd
if(($number % 2)==0){   
}else{
echo "$number is odd number";
}
}
?>
