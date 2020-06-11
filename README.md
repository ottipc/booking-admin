# Booking-admin

## React Admin to Create Events

The Admin is based on marmelab react-admin

Docs : https://github.com/marmelab/react-admin



## REST API

The Rest Api is based on POSTGREST.

Docs : http://postgrest.org/en/v7.0.0/

The Booking Admin have three entities : 

* http://37.61.202.252:3035/event
* http://37.61.202.252:3035/user
* http://37.61.202.252:3035/booking
 
At the moment no Authorization is needed


Test Api for the Admin :  http://37.61.202.252:3035

### Get all Events 

**GET http://37.61.202.252:3035/event**

Response :

[
  {
    "id": 1,
    "start": "1999-01-08T00:00:00",
    "end": "1999-01-08T00:00:00",
    "address": "{}",
    "created": "1999-01-08T00:00:00",
    "created_by": "",
    "last_modified": "2020-06-11T21:47:45.522332",
    "last_modified_by": "",
    "title": "Testevent",
    "description": "",
    "price": 0.00
  }
]

### Create an Event 

**POST http://37.61.202.252:3035/event**

Request :

{
  "title" : "Testevent",
	"start" : "1999-01-08",
	"end" : "1999-01-08",
	"address" : {},
  "created" : "1999-01-08",
  "created_by": "",
  "last_modified_by" : "",
  "description" : "",
  "price" : 0.00
	
}




