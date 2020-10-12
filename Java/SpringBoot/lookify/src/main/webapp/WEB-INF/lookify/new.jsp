<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>   
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Song</title>
</head>
<body>
	<div id="container">
		<a href="/dashboard">Dashboard</a>
		<form:form action="/songs" method="POST" modelAttribute="song">
			<p><form:errors path="title"/></p>
			<p><form:errors path="artist"/></p>
			<p><form:errors path="rating"/></p>
			<table>
				<tr>
					<td><form:label path="title">Title</form:label></td>
					<td><form:input path="title" /></td>
				</tr>
				<tr>
					<td><form:label path="artist">Artist</form:label></td>
					<td><form:input path="artist" /></td>
				</tr>
				<tr>
					<td><form:label path="rating">Rating(1-10)</form:label></td>
					<td><form:input path="rating" type="number" name="rating" /></td>
				</tr>
			</table>
			<input type="submit" value="Create">
		</form:form>
	</div>
</body>
</html>