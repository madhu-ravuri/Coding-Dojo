<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dojo Survey Index</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
	<form method="POST" action="/submit">
	<label>Your Name: <input type="text" name="name"></label>
	<label>Dojo Location: 
		<select name="location">
			<option value="San Jose">San Jose</option>
			<option value="Burbank">Burbank</option>
			<option value="Seattle">Seattle</option>
		</select>
	</label>
	<label>Favorite Language: 
		<select name="language">
			<option value="Python">Python</option>
			<option value="C++">C++</option>
			<option value="Java">Java</option>
		</select>
	</label>
	<label>Comment (optional):</label>
	<textarea name="comment"></textarea>
	<button>Submit</button>
	</form>
</body>
</html>