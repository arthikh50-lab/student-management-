# Student Management API

A RESTful API built with Node.js and Express for managing student records.

## Features

* Add a student
* View all students
* View a single student
* Update student information
* Delete student records

## Technologies

* Node.js
* Express.js

## Installation

```bash
git clone <repository-url>
cd student-api
npm install
npm start
```

Server runs at:

```text
http://localhost:3000
```

## API Endpoints

### Get All Students

```http
GET /api/students
```

### Get Student By ID

```http
GET /api/students/:id
```

### Create Student

```http
POST /api/students
```

### Update Student

```http
PUT /api/students/:id
```

### Delete Student

```http
DELETE /api/students/:id
```
