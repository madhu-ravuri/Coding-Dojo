<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Team</title>
</head>
<body>
	<div id="container">
		<h1>New Team</h1>
		<form:errors path="team.*"/>
		<form:form method="POST" action="/createteam" modelAttribute="team">
			<div>
				<form:label path="name">Name:</form:label>
				<form:input path="name" />
			</div>
			<div>
				<form:label path="city">City:</form:label>
				<form:input path="city" />
			</div>
			<input type="submit" value="Create">
		</form:form>
	</div>
</body>
</html>