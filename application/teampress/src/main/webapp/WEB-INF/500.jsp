<%--
  Created by IntelliJ IDEA.
  User: Matyi
  Date: 2020. 04. 10.
  Time: 9:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="include/JSTL.jsp" %>
<html>
<head>
    <%@include file="include/Css.jsp" %>
</head>
<body class="c-app flex-row align-items-center">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="clearfix">
                <h1 class="float-left display-3 mr-4">500</h1>
                <h4 class="pt-3">Ójaj!</h4>
                <p class="text-muted">Váratlan hiba történt!</p>
            </div>
            <div class="input-prepend input-group">
                <a href="/" class="btn btn-danger btn-soft" type="button">Vissza a Főoldalra</a>
            </div>
            <div class="input-prepend input-group">
                <a href="/logout" class="btn btn-danger btn-soft" type="button">Kijelentkezés</a>
            </div>
        </div>
    </div>
</div>
</body>
</html>
