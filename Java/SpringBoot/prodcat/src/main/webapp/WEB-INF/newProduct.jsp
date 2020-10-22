<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Product</title>
</head>
<body>
	<h2>New Product</h2>
	<p><form:errors path="product.*"/></p>
	<form:form action="/newproduct" method="POST" modelAttribute="product">
			<div>
				<p><form:label path="name">Name</form:label></p>
				<p><form:input path="name"/></p>
			</div>
			<div>
				<p><form:label path="description">Description</form:label></p>
				<p><form:input path="description"/></p>
			</div>
			<div>
				<p><form:label path="price">Price</form:label></p>
				<p><form:input type="number" step="0.01" path="price"/></p>
			</div>
			<input type="submit" value="Submit">
		</form:form>
</body>
</html>