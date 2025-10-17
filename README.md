# educify-backend

## Project Setup
- Initialize project

```
git clone https://github.com/ameh0429/educify-backend.git
cd educify-backend
npm init -y
```

- Install dependencies

```
npm install express cors dotenv express-validator
npm install --save-dev nodemon
```

- Update `package.json` to use ESM

```
"type": "module"
```

## API Endpoints Summary
- `GET /api/tutors` - Get all tutors with filters

Expected response:

```
{
    "success": true,
    "data": [
        {
            "id": "1",
            "name": "Guy Hawkins",
            "verified": true,
            "subjects": [
                "Algebra",
                "Math"
            ],
            "rating": 4,
            "totalReviews": 3380,
            "experience": 5,
            "tutorSince": "2023-07-12",
            "languages": [
                "English",
                "Yoruba"
            ],
            "hourlyRate": 16,
            "location": "Online",
            "available": true,
            "bio": "An impeccable tutor",
            "education": [
                {
                    "years": "2016 - 2020",
                    "institution": "Université de Grenoble - Grenoble",
                    "degree": "Master en Français Langue Etrangère (FLE)"
                }
            ],
            "avatar": "avatar-url",
            "schedules": []
        }
    ],
    "count": 1
}
```
- `GET /api/tutors/:id` - Get specific tutor

Expected response:

```
{
    "success": true,
    "data": {
        "id": "1",
        "name": "Guy Hawkins",
        "verified": true,
        "subjects": [
            "Algebra",
            "Math"
        ],
        "rating": 4,
        "totalReviews": 3380,
        "experience": 5,
        "tutorSince": "2023-07-12",
        "languages": [
            "English",
            "Yoruba"
        ],
        "hourlyRate": 16,
        "location": "Online",
        "available": true,
        "bio": "An impeccable tutor",
        "education": [
            {
                "years": "2016 - 2020",
                "institution": "Université de Grenoble - Grenoble",
                "degree": "Master en Français Langue Etrangère (FLE)"
            }
        ],
        "avatar": "avatar-url",
        "schedules": []
    }
}
```



- `GET /api/tutors/:id/schedule` - Get tutor's schedule

Expected response:

```
{
    "success": true,
    "data": {
        "tutorId": "1",
        "schedule": {
            "Mon": [
                {
                    "time": "2:30 AM - 3:30 AM",
                    "available": false
                },
                {
                    "time": "3:00 AM - 4:00 AM",
                    "available": false
                },
                {
                    "time": "5:00 AM - 6:00 AM",
                    "available": true
                }
            ],
            "Tue": [
                {
                    "time": "2:30 AM - 3:30 AM",
                    "available": false
                },
                {
                    "time": "3:00 AM - 4:00 AM",
                    "available": false
                },
                {
                    "time": "5:00 AM - 6:00 AM",
                    "available": false
                }
            ],
            "Wed": [
                {
                    "time": "2:30 AM - 3:30 AM",
                    "available": true
                },
                {
                    "time": "3:00 AM - 4:00 AM",
                    "available": true
                },
                {
                    "time": "5:00 AM - 6:00 AM",
                    "available": true
                }
            ],
            "Thu": [
                {
                    "time": "2:30 AM - 3:30 AM",
                    "available": false
                },
                {
                    "time": "3:00 AM - 4:00 AM",
                    "available": true
                },
                {
                    "time": "5:00 AM - 6:00 AM",
                    "available": false
                }
            ],
            "Fri": [
                {
                    "time": "2:30 AM - 3:30 AM",
                    "available": false
                },
                {
                    "time": "3:00 AM - 4:00 AM",
                    "available": true
                },
                {
                    "time": "5:00 AM - 6:00 AM",
                    "available": false
                }
            ],
            "Sat": [
                {
                    "time": "2:30 AM - 3:30 AM",
                    "available": false
                },
                {
                    "time": "3:00 AM - 4:00 AM",
                    "available": false
                },
                {
                    "time": "5:00 AM - 6:00 AM",
                    "available": true
                }
            ],
            "Sun": [
                {
                    "time": "2:30 AM - 3:30 AM",
                    "available": true
                },
                {
                    "time": "3:00 AM - 4:00 AM",
                    "available": true
                },
                {
                    "time": "5:00 AM - 6:00 AM",
                    "available": false
                }
            ]
        }
    }
}
```
- `GET /api/lessons/tutor/:tutorId` - Get lessons by tutor

Expected response:

```
{
    "success": true,
    "data": [
        {
            "id": "1",
            "tutorId": "1",
            "subject": "Algebra",
            "rate": 50,
            "duration": 30,
            "type": "Trial",
            "location": "Online",
            "isFree": true
        }
    ]
}
```

- `GET /api/lessons/:id` - Get specific lesson

Expected response:

```
{
    "success": true,
    "data": {
        "id": "1",
        "tutorId": "1",
        "subject": "Algebra",
        "rate": 50,
        "duration": 30,
        "type": "Trial",
        "location": "Online",
        "isFree": true
    }
}
```

- `GET /api/schedule/availability` - Check availability

Expected response:

```
{
    "success": true,
    "available": true
}
```

- POST /api/schedule/bookings - Create booking

Expected request:

```
{
    "tutorid": 1,
    "date": "13/17/2025",
    "time": "2:00pm"
}
```

Expected response:

```
{
    "success": true,
    "data": {
        "id": "1",
        "tutorid": 1,
        "date": "13/17/2025",
        "time": "2:00pm",
        "status": "pending",
        "createdAt": "2025-10-17T20:35:39.534Z"
    },
    "message": "Booking created successfully"
}
```

- `GET /api/schedule/bookings/:id` - Get booking

Expected response:

```
{
    "success": true,
    "data": {
        "id": "1",
        "tutorid": 1,
        "date": "13/17/2025",
        "time": "2:00pm",
        "status": "pending",
        "createdAt": "2025-10-17T20:35:39.534Z"
    }
}
```
- `PATCH /api/schedule/bookings/:id` - Update booking

Expected request:

```
{
    "tutorid": 1,
    "date": "12/17/2025",
    "time": "2:00pm"
}
```

Expected response:

```
{
    "success": true,
    "data": {
        "id": "1",
        "tutorid": 1,
        "date": "13/17/2025",
        "time": "2:00pm",
        "createdAt": "2025-10-17T20:35:39.534Z",
        "updatedAt": "2025-10-17T20:41:01.901Z"
    },
    "message": "Booking updated successfully"
}
```

- `POST /api/checkout/calculate` - Calculate total

Expected request:

```
{
  "lessons": [
    { "rate": 50, "quantity": 2 },
    { "rate": 30, "quantity": 1 }
  ],
  "promoCode": "SAVE10"
}
```
Expected response:

```
{
    "success": true,
    "data": {
        "subtotal": 130,
        "discount": 13,
        "total": 117,
        "currency": "USD"
    }
}
```

- `POST /api/checkout/validate-promo` - Validate promo code

Expected request:

```
{
  "code": "SAVE10"
}
```
Expected response:

```
{
    "success": true,
    "valid": true,
    "message": "Promo code is valid"
}
```
- `POST /api/checkout/process-payment` - Process payment

Expected request:

```
{
  "amount": 117,
  "paymentMethod": "credit_card"
}
```
Expected response:

```
{
    "success": true,
    "data": {
        "transactionId": "TXN1760734245501",
        "status": "success",
        "amount": 117,
        "currency": "USD",
        "paymentMethod": "credit_card",
        "processedAt": "2025-10-17T20:50:45.508Z"
    },
    "message": "Payment processed successfully"
}
```
## Running the Application

```
// Development mode
npm run dev

// Production mode
npm start
```

