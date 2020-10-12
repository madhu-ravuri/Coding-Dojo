<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Person</title>
</head>
<body>
	<div id="container">
		<h1>New Person</h1>
		<form:form method="POST" action="/persons" modelAttribute="person">
		<p><form:errors path="firstName"/></p>
		<div>
			<form:label path="firstName">First Name:</form:label>
			<form:input path="firstName" />
		</div>
		<p><form:errors path="lastName"/></p>
		<div>
			<form:label path="lastName">Last Name:</form:label>
			<form:input path="lastName" />
		</div>
		<input type="submit" value="Create">
		</form:form>
	</div>
</body>
</html>