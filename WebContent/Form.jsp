<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

<button onclick="showRichest()">Show richest</button>

<%@ page import="coreservlets.*" %>

 
 
  <script>
  function showRichest() {
	  <% Customer richest = 
		  CustomerUtils.getRichestCustomer(); %>
		   Richest is <%= richest.getFirstName() %> <%= richest.getLastName() %>
		   Balance is: <%= richest.getFormattedBalance() %>
  }
  </script>
  <script src ="./scripts/ajax-utils.js"></script>
</body>
</html>