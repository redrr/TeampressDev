<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../include/JSTL.jsp" %>
<html>
    <head>
        <%@include file="../include/Head.jsp" %>
    </head>
    <body>
        <%@include file="../include/Sidebar.jsp" %>
        <div class="c-wrapper c-fixed-components">
            <%@include file="../include/Header.jsp" %>
            <div class="c-body">
                <main class="c-main">
                    <div class="container-fluid">
                        <div class="ui-view">
                            <div class="fade-in">
                                <c:if test="${sessionHandler.userHasPermission('ADMIN')}">
                                    <div class="row">
                                        <div class="card col-12">
                                            <div class="card-header">
                                                <h4 class="card-title">Felállások</h4>
                                            </div>
                                            <div class="card-body">
                                                <table id="table" class="table table-striped table-bordered" style="width:100%">
                                                    <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Egyesület</th>
                                                        <th>Felhasználó</th>
                                                        <th>Sorsolás</th>
                                                        <th>Meccs</th>
                                                        <th>X</th>
                                                        <th>Y</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <c:forEach var="data" items="${datas}">
                                                        <tr>
                                                            <td>${data.id}</td>
                                                            <td>${data.organization.name}</td>
                                                            <td>${data.user.name}</td>
                                                            <td>${data.sorsolas.getDateAs(false)} : ${data.sorsolas.hazai} - ${data.sorsolas.vendeg}</td>
                                                            <td>${data.customGame.getDateAs(false)} : ${data.customGame.team} - ${data.customGame.enemy}</td>
                                                            <td>${data.xCordinate}</td>
                                                            <td>${data.yCordinate}</td>
                                                        </tr>
                                                    </c:forEach>
                                                    </tbody>
                                                    <tfoot>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </c:if>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <%@include file="../include/Footer.jsp" %>
            <%@include file="../include/Js.jsp" %>
            <script src="<c:url value="/assets/js/admin/GamePlan.js"/>"></script>
        </div>
    </body>
</html>
