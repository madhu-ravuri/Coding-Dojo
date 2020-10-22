<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create Task</title>
</head>
<body>
	<h1>Create a new task</h1>
	<form:form method="POST" action="/createtask" modelAttribute="task">
		<table>
			<tr>
				<td><form:label path="name">Task</form:label></td>
				<td><form:input path="name" /></td>
				<td><form:errors path="name" /></td>
			</tr>
			<tr>
				<td><form:label path="assignee">Assignee:</form:label></td>
				<td>
				<form:select path="assignee" name="assignee">
		          	<c:forEach items="${users}" var="user">
		           		<form:option value="${user}"><c:out value="${user.name}"></c:out></form:option>
		           	</c:forEach>
	       		</form:select>
	       		</td>
			</tr>
			<tr>
				<td><form:label path="priority">Priority:</form:label></td>
				<td>
					<form:select path="priority" name="priority">
					<form:option value="High">High</form:option>
					<form:option value="Medium">Medium</form:option>
					<form:option value="Low">Low</form:option>
					</form:select>
				</td>
			</tr>
		</table>
		<input type="submit" value="Create">
	</form:form>
</body>
</html>