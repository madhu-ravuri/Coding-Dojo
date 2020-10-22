<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit <c:out value="${task.name}"/></title>
</head>
<body>
<h1>Edit <c:out value="${task.name}"/></h1>
<form:form action="/tasks/edit/${task.id}" method="post" modelAttribute="task">
<form:errors path="name"/>
    <input type="hidden" name="_method" value="put">
    <p>
        <form:label path="name">Task</form:label>
        <form:input path="name"/>
    </p>
    <p>
    <form:select path="assignee" name="assignee">
		          	<c:forEach items="${users}" var="user">
		           		<form:option value="${user}"><c:out value="${user.name}"></c:out></form:option>
		           	</c:forEach>
	       		</form:select>
    </p>
    <p>
        <form:select path="priority" name="priority">
					<form:option value="High">High</form:option>
					<form:option value="Medium">Medium</form:option>
					<form:option value="Low">Low</form:option>
					</form:select>
    </p>
    <form:input type="hidden" path="creator" value="${task.creator}"/>
    <input type="submit" value="Submit"/>
</form:form>

</body>
</html>