<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Ninja</title>
</head>
<body>
	<h1>New Ninja</h1>
	<form:form method="POST" action="/ninjas" modelAttribute="ninja">
		<table>
			<tr>
				<td><form:label path="dojo">Dojo:</form:label></td>
				<td>
				<form:select path="dojo" name="dojo">
		          	<c:forEach items="${dojos}" var="dojo">
		           		<form:option value="${dojo}"><c:out value="${dojo.name}"></c:out></form:option>
		           	</c:forEach>
	       		</form:select>
	       		</td>
			</tr>
			<tr>
				<td><form:label path="firstName">First Name</form:label></td>
				<td><form:input path="firstName" /></td>
			</tr>
			<tr>
				<td><form:label path="lastName">Last Name</form:label></td>
				<td><form:input path="lastName" /></td>
			</tr>
			<tr>
				<td><form:label path="age">Age</form:label></td>
				<td><form:input type="number" path="age"/></td>
			</tr>
		</table>
		<input type="submit" value="Create">
	</form:form>
</body>
</html>