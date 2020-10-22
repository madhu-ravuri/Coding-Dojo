<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Task Manager</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
  <h1>Welcome <c:out value="${user.name}"/></h1>
  <a href="/logout">Logout</a>
	<table>
	    <thead>
	        <tr>
	            <th>Task</th>
	            <th>Creator</th>
	            <th>Assignee</th>
	            <th>Priority</th>
	        </tr>
	    </thead>
	    <tbody>
	    	<c:forEach items="${tasks}" var="task">
	        <tr>
	            <td><a href="/tasks/${task.id}"><c:out value="${task.name}"/></a></td>
	            <td><c:out value="${task.creator}"/></td>
	            <td><c:out value="${task.assignee.name}"/></td>
	            <td><c:out value="${task.priority}"/></td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	<div>
	<form action="/tasks/new">
    <input type="submit" value="Create Task" />
	</form>
	</div>
	

</body>
</html>