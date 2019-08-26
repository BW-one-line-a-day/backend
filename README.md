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
| auth      | POST   | /api/auth/register                    | Creates a new `user` profile using the information sent inside the `body` of the request and returns a message along with the new `user` and a JSON Web Token in the `body` of the response.   |
| auth      | POST   | /api/auth/login                       | Uses the credentials sent inside the `body` to authenticate the user. On successful login, returns a message with the `user` info and a JSON Web Token token in the `body` of the response. |






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