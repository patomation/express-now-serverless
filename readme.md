# Express Server-less using Now by Zeit
A server-less express implementation.
Instead of using one monolithic express app it uses individual lambda servers for each rout.
So if one part crashes the rest will still work.
With that in mind each route in the ```routes``` folder is considered a lambda, however, all import the same custom express module. But each instance has its own version of it. So if there is a bug with the ```createExpressApp.js``` file or the database the entire thing crashes. Not sure if this makes it not serverless.... but each rout runs on its own lambda using ```now```.

## Technologies
- ExpressJS
- Lambda architecture
- MongoDB
- Helmet (Basic security)
- Now deployment

## Getting Started:

### Dev
Make an ```.env``` file by conpying ```.env-default```
```bash
$ cp .env-default .env
```
Add mongodb url to the file making sure to replace [user], [password] and [clusterId] with the correct credentials.
```
MONGODB_URL=mongodb+srv://[user]:[password]@cluster0-[clusterId].mongodb.net/test?retryWrites=true
```
Run local server
```bash
$ node local.server.js
```

### Installing now cli
```bash
$ npm install -g now
```

### Deploy
Add mongodb secret to the server environment variables. Make sure to replace [user], [password] and [clusterId] with the correct credentials. Or copy your url from mongodb.
```bash
now -e MONGODB_URL="mongodb+srv://[user]:[password]@cluster0-[clusterId].mongodb.net/test?retryWrites=true"
```
This deploys the project with the enviroment variable.

Alternatively, you could always add it to the ```now.json``` config so you can deploy with just the now command. This could work if its a private repo and you don't care about other contributors knowing the database credentials.
```json
{
  "env": {
    "MONGODB_URL": "mongodb+srv://[user]:[password]@cluster0-[clusterId].mongodb.net/test?retryWrites=true"
  }
}
```
Create a now instance of app using the ```now cli```.
```bash
$ now
```

Now your up and running!


### Configuration
Edit ```now.json```
- Change project name
- Add new lambda routes.
# API

- GET /users/ - Returns all users.
- GET /users/:id - Returns specific user.
- POST /users/ - Adds a new user.
  - headers: [username, password]
- PUT /user/:id/password - Changes password.
  - headers: [password]
- DELETE /users/:id - Removes user by id.

### Handy Curl Snippets
Mongoose CRUD (Create, Read, Update, Delete)
- Add new user
```
curl -X POST -d "username=mynewuser&password=coolpassword" localhost:8080/api/v1/users
```
- Update Password
```
curl -X PUT -d "password=newpassword" localhost:8080/api/v1/users/5cdccf0dc61e550d0b7b86e7/password
```
- Get User(s)
```
curl -g  localhost:8080/api/v1/users
```
- Get a User by ID
```
curl -g  localhost:8080/api/v1/users/5cdccf0dc61e550d0b7b86e7
```
- Delete user
```
curl -X DELETE  localhost:8080/api/v1/users/5cdccf0dc61e550d0b7b86e7
```


### Further Readings:
I found this guide helpfull:
[Serverless Now Express](https://medium.com/@bmikkelsen22/designing-a-serverless-express-js-api-using-zeit-now-6e52aa962235) - See this to look at house mongo db is connected. For later use....
