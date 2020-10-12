<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Details</title>
</head>
<body>
	<div id="container">
		<a href="/dashboard">Dashboard</a>
		<table>
			<tr>
				<td>Title</td>
				<td><c:out value="${song.title}" /></td>
			</tr>
			<tr>
				<td>Artist</td>
				<td><c:out value="${song.artist}" /></td>
			</tr>
			<tr>
				<td>Rating</td>
				<td><c:out value="${song.rating}" /></td>
			</tr>
			<tr>
				<td>
					<form:form action="/delete/${song.id}" method="POST">
						<input type="hidden" name="_method" value="delete">
						<input class="btn btn-link" type="submit" value="delete"/>
					</form:form>
				</td>
				<td></td>
			</tr>
		</table>
	</div>
</body>
</html>