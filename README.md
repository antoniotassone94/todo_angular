# Application to manage a personal TODO list

**Authors:** Antonio Tassone and Rafael Merlotto

**Version:** 1.0.0

This project contains a classical application to manage a todo list. The application is composed by two parts: backend and frontend. Both these parts are independents. The application is responsive, it can adapt on all device for each width.

How to use the application? Follow these steps:
1) move inside the backend directory
2) execute the command ```npm install``` to installing all the dependencies
3) create a database on mongodb dbms with personal account
4) make a file named ```.env```, in this file create one variable named ```DB_CONN_STRING``` with the url to connect to the database
5) start the backend with the command ```npm start```
6) move inside the frontend directory
7) execute  the command ```npm install``` to installing all the dependencies
8) start the angular application with the command ```ng serve```

Good luck for all!

**Important**: in the step number 3, to create the database is possible use compass (gui to use mongodb), to create a local database on the machine, in this case the url to connect the database is ```http://localhost:27017/namedatabase``` with namedatabase which is the name of the database chosen. The port standard of mongodb is 27017, but can be change in future release.
