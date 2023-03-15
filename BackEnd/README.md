# Java Practice for the Capstone Project

## Intro

For this practice, I will build a simple user-company-reviewing back-end. At the end of this I should have a RESTful API that allows connected users to leave reviews and find useful information about other companies.

The API should be built from scratch with Spring using Spring Boot Initialiser.


## Making sure the database is clean and ready to use

Open Postico go to the database company_reviews (If it exists).
If it does exist then right click on it and say delete to remove it so that you are starting from a fresh start point.
Open a terminal and type in ```createdb company_reviews``` to create a fresh Database.
Note that this is only needed for the purposes of lessons ordinarily you would use the same Database and not delete it every time.

NB: If you had to change the username by which you connect to the database in the previous lessons you will need to change it again in the application.properties under the main->resources folder.


## MVP

### Models
The company reviews API needs to be built with three models with the following properties:

* Company
  * name - the name of the company eg: TGI Fridays
  * town - the town/city/village where the company is located. We will not bother with full address yet.
  * star rating - Out of 5, each company has a rating
* Review
   * date - a **string** in the form "dd-mm-yy" for the review date. Dates can be in the future or in the past
   * text - a **string** for a short review.

* User
   * name - **string** containing user's name
   * town - a **string** containing the town where the user lives. We will not record an address at this stage
   * placeOfWork - **string** containing the company where the user works.

The relationships should be:

* A Company has many Reviews
* A Review 'has' one Company
* A User 'has' many Reviews
* A Review 'has' one User

### Queries + Custom Routes

Write queries using the derived method we've shown. Connect these to suitable RESTful endpoints and decide whether you should use a filter or not for all of:

* Get all companies with a given rating
* Get all reviews for a given company
* Get all users for a given company


## Extensions


### Extension Queries + Routes

* Get all users in a given town for a given company
* Get all companies over a certain rating in a given town



## Tips / Reminders

* Stick to the RESTful routes for each resource:
   * GET `/resources`
   * GET `/resources/{id}`
   * GET `/resources?property=value`
   * POST `/resources`
   * PUT `/resources/{id}`
   * DELETE `/resources/{id}`

* You're allowd to create routes outside of this structure, but you need to be able to justify the design decision.  We of course reccomend you stick with this RESTful way of doing things.

* Clearly understand the relationships before coding. Draw it out.
* Write tests for your queries.
* Use a ddl-auto setting of `update` when doing development.
* Provide a data loader to seed some initial seed data, remember to comment out the `@Component` after you have run your server the first time otherwise it will create duplicates in your database.
* Reminder on which dependencies to use with spring Initialiser:
  * Web
  * JPA
  * Postgres
  * DevTools
  

