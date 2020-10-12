<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dojo Page</title>
</head>
<body>
	<div id="container">
		<h1><c:out value="${dojo.name}"></c:out> Ninjas</h1>
		<table>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Age</th>
			</tr>
			<c:forEach items="${ninjas}" var="ninja">
			<tr>
				<td><c:out value="${ninja.firstName}" /></td>
				<td><c:out value="${ninja.lastName}" /></td>
				<td><c:out value="${ninja.age}" /></td>
			</tr>
			</c:forEach>
		</table>
	</div>
</body>
</html>