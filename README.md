TeachForIndia
=============

This is a mini project -  an application that consumes a simple REST API to store and retrieve three data fields(title, author, description). It also features an interface that can be used to easily perform these operations of storage and retrieval, using this API.

Using the API:

To add new records - 


PUT /put HTTP/1.1

Host: teachforsarincasm.com

Content-Type: application/x-www-form-urlencoded

title=inser-title&author=insert-author&description=insert-description

To retrieve records -

1) To fetch the complete data from the database


POST /get HTTP/1.1

Host: teach.sarincasm.com
  
2) To fetch data with a word in the title


POST /get/title/keyword HTTP/1.1

Host: teach.sarincasm.com

3) To fetch data about a particular author


POST /get/author/keyword HTTP/1.1

Host: teach.sarincasm.com

