<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Secret Code</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
	<div id="container">
		<p id="errors">
			<c:out value="${ error }" />
		</p>
		<form method="POST" action="/trycode">
			<label>What is the code?
			<input type="text" name="code"></label>
			<button>Try Code</button>
		</form>
	</div>
</body>
</html>