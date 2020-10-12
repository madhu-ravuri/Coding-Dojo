<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New License</title>
</head>
<body>
		<h1>New License</h1>
		<form:form method="POST" action="/licenses" modelAttribute="license">
		<div>
			<form:label path="person">Person:</form:label>
			<form:select path="person" name="person">
	          	<c:forEach items="${persons}" var="person">
              		<form:option value="${person}"><c:out value="${person.firstName} ${person.lastName }"></c:out></form:option>
              	</c:forEach>
         	</form:select>
		</div>
		<p><form:errors path="state"/></p>
		<div>
			<form:label path="state">State:</form:label>
			<form:input path="state" />
		</div>
		<p><form:errors path="expirationDate"/></p>
		<div>
			<form:label path="expirationDate">Expiration Date:</form:label>
			<form:input path="expirationDate" type="date" />
		</div>
		<input type="submit" value="Create">
		</form:form>
</body>
</html>