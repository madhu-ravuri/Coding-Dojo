<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title><c:out value="${team.name}"/></title>
</head>
<body>
	<div id="container">
		<h1><c:out value="${team.name}"></c:out> of <c:out value="${team.city}"></c:out></h1>
		<table>
			<tr>
				<th>Player Name</th>
				<th>Jersey Number</th>
				<th>Actions</th>
			</tr>
			<c:forEach items="${players}" var="player">
			<tr>
				<td><c:out value="${player.firstName}" /> <c:out value="${player.lastName}" /></td>
				<td><c:out value="${player.number}" /></td>
				<td><form:form action="/players/delete/${player.id}" method="POST">
                          <input type="hidden" name="_method" value="delete">
                          <input class="btn btn-link" type="submit" value="Delete"/>
                      </form:form>
	             | <a href="/players/edit/${player.id}">edit</a></td>
			</tr>
			</c:forEach>
		</table>
	</div>
</body>
</html>