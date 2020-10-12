<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Dojo</title>
</head>
<body>
	<div id="container">
		<h1>New Dojo</h1>
		<form:form method="POST" action="/dojos" modelAttribute="dojo">
			<div>
				<form:label path="name">Name:</form:label>
				<form:input path="name" />
			</div>
			<input type="submit" value="Create">
		</form:form>
	</div>
</body>
</html>