# Student Management API

This project is a RESTful API built using **Express** and **Sequelize** for managing student information, course details, and fee structures.

## 📁 API Endpoints

---

## 🡩‍🎓 User Routes

| Method | Endpoint              | Description               |
|--------|------------------------|---------------------------|
| POST   | `/user`               | Create a new student      |
| GET    | `/user`               | Get all students          |
| GET    | `/user/:enrollmentNumber` | Get a single student by enrollment number |
| PUT    | `/user/:enrollmentNumber` | Update student info      |
| DELETE | `/user/:enrollmentNumber` | Delete student           |
| PATCH  | `/user/:enrollmentNumber` | Partially update student info |

### 🔸 POST `/user`

#### Body:

```json
{
  "name": "John Doe",
  "enrollmentNumber": "ENR123",
  "gender": "Male",
  "mobileNumber": 9876543210,
  "fatherName": "Robert Doe",
  "f_occupation": "Engineer",
  "mothersName": "Anna Doe",
  "m_occupation": "Teacher",
  "f_mobileNumber": 9876543200,
  "course_id": "CSE101",
  "course_name": "Computer Science",
  "program": "B.Tech",
  "year": 2,
  "semester": 4,
  "address": "123 Street",
  "city": "Metropolis",
  "pincode": 123456,
  "busFacility": true,
  "busStop": "Main Gate"
}
```

### 🔸 Params

- `enrollmentNumber` (string) – required for GET/PUT/PATCH/DELETE by ID

---

## 📚 Course Routes

| Method | Endpoint                | Description                   |
|--------|------------------------|-------------------------------|
| POST   | `/course`              | Add a new course              |
| GET    | `/course`              | Get all courses               |
| GET    | `/course/:course_id`   | Get course by ID              |
| PUT    | `/course/:course_id`   | Update course                 |
| DELETE | `/course/:course_id`   | Delete course                 |
| PATCH  | `/course/:course_id`   | Partially update course info  |

### 🔸 POST `/course`

#### Body:

```json
{
  "course_id": 101,
  "course_name": "Computer Science",
  "total_registered_students": 60,
  "course_duration_years": 4,
  "total_semesters": 8
}
```

### 🔸 Params

- `course_id` (number) – required for GET/PUT/PATCH/DELETE by ID

---

## 💵 Fees Routes

| Method | Endpoint                     | Description                          |
|--------|------------------------------|--------------------------------------|
| POST   | `/fees`                      | Add fee record for a student         |
| GET    | `/fees`                      | Get all fee records                  |
| GET    | `/fees/:course_id`           | Get fee record by course id          |
| PUT    | `/fees/:enrollment_no`       | Update fee record                    |
| DELETE | `/fees/:enrollment_no`       | Delete fee record                    |
| PATCH  | `/fees/:enrollment_no`       | Partially update fee record          |

### 🔸 POST `/fees`

#### Body:

```json
{
  "enrollment_no": "ENR123",
  "course_name": "Computer Science",
  "course_id": "CSE101",
  "total_course_fee": 400000,
  "semester_1_fee": "50000",
  "semester_2_fee": "50000",
  "semester_3_fee": "50000",
  "semester_4_fee": "50000",
  "semester_5_fee": "50000",
  "semester_6_fee": "50000",
  "semester_7_fee": "50000",
  "semester_8_fee": "50000"
}
```

### 🔸 Params

- `enrollment_no` (string) – required for GET/PUT/PATCH/DELETE by ID

---

## 💠 Setup

```bash
npm install
node index.js
```

Ensure your database is running and properly configured in `connection.js`.

---

## 📌 Notes

- All models are defined using Sequelize.
- MySQL is assumed as the database.
- Input validation and authentication are not included yet.

---

## 📞 Contact

For issues or questions, feel free to reach out to the developer team.

