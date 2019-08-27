# ONE LINE A DAY BACK-END SERVER

## Server

Not deployed yet

## Dependencies

- "axios": "^0.19.0",
- "bcryptjs": "^2.4.3",
- "cors": "^2.8.5",
- "dotenv": "^8.1.0",
- "express": "^4.17.1",
- "helmet": "^3.20.0",
- "jsonwebtoken": "^8.5.1",
- "knex": "^0.19.2",
- "sqlite3": "^4.1.0"

## devDependencies

- "cross-env": "^5.2.0",
- "jest": "^24.8.0",
- "nodemon": "^1.19.1",
- "supertest": "^4.0.2"

# DUMMY USER ACCOUNTS

```
  email: test@gmail.com
  password: password

  email: admin@gmail.com
  password: password

```


# SUMMARY OF API ENDPOINTS

| Table     | Method | Endpoint                              | Description                                                                                                                                                                                    |
| --------- | ------ | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users      | POST   | /api/auth/register                    | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| users      | POST   | /api/auth/login                       | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` info and a JSON Web Token token in the `body` of the response.   |
| users      | DELETE   | /api/users/:id                       | Deletes the user with the provided ID. Cannot be undone. Does not delete user's posts from DB. |
| dailylines      | GET   | /api/dailyposts                   | Retruns all `daily posts` created by all users. Can be used to filter by `user_id` to match with the user's id.   |
| dailylines      | GET   | /api/dailyposts/:id                   | returns a specific `daily post` by the id.   |
| dailylines      | POST   | /api/dailyposts             | Creates a new `daily post`. Requires "user_id" to be set to the user's id and "note" which includes the post text for that day.   |
| dailylines      | PUT   | /api/dailyposts/:id                   | Update the `daily post` with the provided id. Only requires "note" field.    |
| dailylines      | DELETE   | /api/dailyposts/:id                   | Delete the `daily post` with the provided id. Cannot be undone.    |






# AUTH ROUTES

## **REGISTER**

### **Registers a user**

_Method Url:_ `/api/auth/register`

_HTTP method:_ **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name        | type   | required | description    |
| ----------- | ------ | -------- | -------------- |
| `email`     | String | Yes      | Must be unique |
| `password`  | String | Yes      |                |


_example:_

```
{
  "email": "greg@gmail.com"
  "password": "password",

}
```

#### Response

##### 201 (Created)

> If you successfully register a user the endpoint will return an HTTP response with a status code `201` and a body as below.

```
{
    {
        "id": 6,
        "email": "trevor@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6InRyZXZvciIsImlhdCI6MTU2MTQwMTU3MSwiZXhwIjoxNTYxNDg3OTcxfQ.oflH8T88CZhObzBj3oRCBkqKeau-8jLC9yeDO8JJZ94"
    }
}
```

##### 406 (Not Acceptable)

> If you are missing your email or password, the endpoint will return an HTTP response with a status code `406` and a body as below.

```
{
  "message": "Email and password required"
}
```


# DAILY POST ROUTES'

### Create a post

_Method Url:_ `/api/dailyposts`
_HTTP method:_ **[POST]**

#### Body

| name        | type   | required | description    |
| ----------- | ------ | -------- | -------------- |
| `note`     | String | Yes      | The text to be displayed |
| `user_id`  | String | Yes      |  Would retreive from localstorage. Used to match post to users. |
| `date`     | String | Yes      | 8 digit number mmddyyyy


### Update a post

_Method Url:_ `/api/dailyposts/:id`
_HTTP method:_ **[PUT]**

#### Body

| name        | type   | required | description    |
| ----------- | ------ | -------- | -------------- |
| `note`     | String | Yes      | Will update the `daily post` text |
| `date`     | String | No      | Can update the date if wanted |
