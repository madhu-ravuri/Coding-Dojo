<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ninja Gold Game</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
	<div id="score">
	<label>Your gold: <input value="<c:out value="${ gold }"></c:out>"></label>
	</div>
	<div id="places">
		<div class="location">
			<h4>Farm</h4>
			<p>(earns 10-20 gold)</p>
			<form method="POST" action="/submit/farm">
				<input type="hidden" name="farm">
				<button>Find Gold!</button>
			</form>
		</div>
		<div class="location">
			<h4>Cave</h4>
			<p>(earns 5-10 gold)</p>
			<form method="POST" action="/submit/cave">
				<input type="hidden" name="cave">
				<button>Find Gold!</button>
			</form>
		</div>
		<div class="location">
			<h4>House</h4>
			<p>(earns 2-5 gold)</p>
			<form method="POST" action="/submit/house">
				<input type="hidden" name="house">
				<button>Find Gold!</button>
			</form>
		</div>
		<div class="location">
			<h4>Casino</h4>
			<p>(earns/takes 0-50 gold)</p>
			<form method="POST" action="/submit/casino">
				<input type="hidden" name="casino">
				<button>Find Gold!</button>
			</form>
		</div>
	</div>
</body>
</html>