<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="../include/JSTL.jsp" %>
<html>
<head>
    <title>Teampress | </title>
    <%@include file="../include/Css.jsp" %>
</head>
<body>
<%@include file="../include/Loader.jsp" %>
<div id="pcoded" class="pcoded">
    <div class="pcoded-overlay-box"></div>
    <div class="pcoded-container navbar-wrapper">
        <%@include file="../include/Header.jsp" %>
        <div class="pcoded-main-container">
            <div class="pcoded-wrapper">
                <%@include file="../include/Sidebar.jsp" %>
                <div class="pcoded-content" style="overflow-y: scroll; top:4em">
                    <div class="pcoded-inner-content">
                        <div class="main-body">
                            <div class="page-wrapper">
                                <div class="page-body">
                                    <c:if test="${sessionHandler.userHasPermission('ADMIN')}">
                                        <div class="row animated fadeInUpBig">
                                            <div class="col-xl-6 col-lg-8 col-md-12 col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h4 class="card-title">Klub létrehozás</h4>
                                                        <hr>
                                                        <f:form id="form" cssClass="form-wp1" name='f' htmlEscape="true" action='/org/organization' method='POST' modelAttribute="model">
                                                            <div class="form-group row">
                                                                <label for="name" class="col-sm-4 col-form-label">Név</label>
                                                                <div class="col-sm-8 label-static">
                                                                    <f:input id="name" type="text" required=""  path="name" cssErrorClass="form-control" cssClass="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div class="form-group row">
                                                                <label for="name" class="col-sm-4 col-form-label">Type</label>
                                                                <div class="col-sm-8 label-static">
                                                                    <f:input id="type" type="text" required=""  path="type" cssErrorClass="form-control" cssClass="form-control"/>
                                                                </div>
                                                            </div>
                                                            <f:hidden path="version" id="version"/>
                                                            <f:hidden path="id" id="id"/>
                                                            <div class="form-group row">
                                                                <div class="dt-btn-flex">
                                                                    <input id="submit" class="btn btn-primary btn-soft" name="save" type="submit" value="Mentés"/>
                                                                    <button type="button" id="clear-form-btn" class="btn btn-light btn-soft" onclick="window.location = '/org/organization'">
                                                                        Mégse
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </f:form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="card">
                                                    <div class="card-header">
                                                        <h4 class="card-title">Klubbok</h4>
                                                    </div>
                                                    <div class="card-body">
                                                        <table id="table" class="table table-striped table-bordered" style="width:100%">
                                                            <thead>
                                                            <tr>
                                                                <th>Név</th>
                                                                <th>Típus</th>
                                                                <th search="disabled"></th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <c:forEach var="data" items="${datas}">
                                                                <tr>
                                                                    <td>${data.name}</td>
                                                                    <td>${data.type}</td>
                                                                    <td>
                                                                        <button type="button" class="btn btn-info btn-soft" onclick="get(${data.id})"><i class="cil-description"></i> Módosítás</button>
                                                                        <button type="button" class="btn btn-danger btn-soft" onclick="del(${data.id})"><i class="cil-trash"></i> Törlés</button>
                                                                    </td>
                                                                </tr>
                                                            </c:forEach>
                                                            </tbody>
                                                            <tfoot>
                                                            </tfoot>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </c:if>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<%@include file="../include/IE.jsp" %>
<%@include file="../include/JavaScript.jsp" %>
<script src="<c:url value="/assets/js/admin/Organization.js"/>"></script>
</body>
</html>
