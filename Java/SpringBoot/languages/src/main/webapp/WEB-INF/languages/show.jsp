<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${language.name}</title>
</head>
<body>
   <p><a href="/languages">Dashboard</a></p>
<h1><c:out value="${language.name}"/></h1>
<p><c:out value="${language.creator}"/></p>
<p><c:out value="${language.version}"/></p>
<a href="/languages/edit/${language.id}">Edit</a>
<a href="/languages/delete/${language.id}">Delete</a>
	

</body>
</html>