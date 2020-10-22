<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${task.name}"/></title>
</head>
<body>
	<div id="container">
		<h1>Task: <c:out value="${task.name}"/></h1>
		<a href="/tasks">Home</a>
		<table>
			<tr>
				<td>Creator:</td>
				<td><c:out value="${task.creator}"/></td>
			</tr>
			<tr>
				<td>Assignee:</td>
				<td><c:out value="${task.assignee.name}"/></td>
			</tr>
			<tr>
				<td>Priority:</td>
				<td><c:out value="${task.priority}"/></td>
			</tr>
			
		</table>
		<div>
	<form action="/tasks/${task.id}/edit">
    <input type="submit" value="Edit" />
	</form>
	<form:form action="/tasks/delete/${task.id}" method="POST">
                          <input type="hidden" name="_method" value="delete">
                          <input class="btn btn-link" type="submit" value="Delete"/>
                      </form:form>
	</div>
	</div>
</body>
</html>