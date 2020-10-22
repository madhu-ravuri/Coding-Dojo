<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Category</title>
</head>
<body>
	<h2>New Category</h2>
	<p><form:errors path="category.*"/></p>
	<form:form action="/newcategory" method="POST" modelAttribute="category">
			<div>
				<p><form:label path="name">Name</form:label></p>
				<p><form:input path="name"/></p>
			</div>
			<input type="submit" value="Submit">
		</form:form>
</body>
</html>