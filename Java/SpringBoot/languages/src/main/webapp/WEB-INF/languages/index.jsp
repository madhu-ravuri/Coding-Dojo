<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>  
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Languages</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
  
	<table>
	    <thead>
	        <tr>
	            <th>Name</th>
	            <th>Creator</th>
	            <th>Version</th>
	            <th>Action</th>
	        </tr>
	    </thead>
	    <tbody>
	        <c:forEach items="${languages}" var="language">
	        <tr>
	            <td><a href="/languages/${language.id}"><c:out value="${language.name}"/></a></td>
	            <td><c:out value="${language.creator}"/></td>
	            <td><c:out value="${language.version}"/></td>
	            <td>
	            <form:form action="/languages/delete/${language.id}" method="POST">
                          <input type="hidden" name="_method" value="delete">
                          <input class="btn btn-link" type="submit" value="Delete"/>
                      </form:form>
	             | <a href="/languages/edit/${language.id}">edit</a></td>
	        </tr>
	        </c:forEach>
	    </tbody>
	</table>
	<div>
		<form:form action="/languages" method="POST" modelAttribute="language">
			<div>
				<p><form:label path="name">Name</form:label></p>
				<p><form:errors path="name"/></p>
				<p><form:input path="name"/></p>
			</div>
			<div>
				<p><form:label path="creator">Creator</form:label></p>
				<p><form:errors path="creator"/></p>
				<p><form:input path="creator"/></p>
			</div>
			<div>
				<p><form:label path="version">Version</form:label></p>
				<p><form:errors path="version"/></p>
				<p><form:input path="version"/></p>
			</div>
			<input type="submit" value="Submit">
		</form:form>
	</div>

</body>
</html>