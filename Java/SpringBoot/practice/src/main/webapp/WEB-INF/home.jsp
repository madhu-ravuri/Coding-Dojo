<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Home</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
  
	<table>
	<div>
	<a href="/teams/new">new team</a> | 
	<a href="/players/add">add players</a> |
	<a href="/logout">logout</a>
	</div>
	    <thead>
	        <tr>
	            <th>Team</th>
	            <th>City</th>
	            <th>Action</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${teams}" var="team">
	        <tr>
	            <td><c:out value="${team.name}"/></td>
	            <td><c:out value="${team.city}"/></td>
	            <td>
	            <a href="/teams/${team.id}">view</a>
	            <form:form action="/teams/delete/${team.id}" method="POST">
                          <input type="hidden" name="_method" value="delete">
                          <input class="btn btn-link" type="submit" value="Delete"/>
                      </form:form>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	

</body>
</html>