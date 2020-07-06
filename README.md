# simple-mock-server

## Getting started
* Go to the folder with project
* Install npm packages `npm install`
* Run the script `npm run mock-server`


##Examples:

GET http:\\localhost:3000\api\books

Result:
{
  "id": 1,
  "name": "Romeo and Juliet",
  "author": "William Shakespeare",
  "genre": "Love story"
}

PUT http:\\localhost:3000\api\book


Result:
{
  "name": "Romeo and Juliet Rus",
  "author": "William Shakespeare",
  "genre": "Love story"
}
