<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit <c:out value="${player.firstName}"/> <c:out value="${player.lastName}"/></title>
</head>
<body>
<h1>Edit <c:out value="${player.firstName}"/> <c:out value="${player.lastName}"/></h1>
<form:form action="/players/edit/${player.id}" method="post" modelAttribute="player">
    <input type="hidden" name="_method" value="put">
    <p>
        <form:label path="firstName">First Name</form:label>
        <form:errors path="firstName"/>
        <form:input path="firstName"/>
    </p>
    <p>
        <form:label path="lastName">Last Name</form:label>
        <form:errors path="lastName"/>
        <form:textarea path="lastName"/>
    </p>
    <p>
    <form:select path="team" name="team">
		          	<c:forEach items="${teams}" var="team">
		           		<form:option value="${team}"><c:out value="${team.name}"></c:out></form:option>
		           	</c:forEach>
	       		</form:select>
    </p>
    <p>
        <form:label path="number">Jersey Number</form:label>
        <form:errors path="number"/>
        <form:input path="number"/>
    </p>
    <input type="submit" value="Submit"/>
</form:form>

</body>
</html>