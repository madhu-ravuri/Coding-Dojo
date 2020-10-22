<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>New Player</title>
</head>
<body>
	<h1>New Player</h1>
	<form:form method="POST" action="/createplayer" modelAttribute="player">
	<form:errors path="firstName"/>
	<form:errors path="lastName"/>
	<form:errors path="number"/>
		<table>
			<tr>
				<td><form:label path="team">Team:</form:label></td>
				<td>
				<form:select path="team" name="team">
		          	<c:forEach items="${teams}" var="team">
		           		<form:option value="${team}"><c:out value="${team.name}"></c:out></form:option>
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
				<td><form:label path="number">Jersey Number</form:label></td>
				<td><form:input type="number" path="number"/></td>
			</tr>
		</table>
		<input type="submit" value="Create">
	</form:form>
</body>
</html>