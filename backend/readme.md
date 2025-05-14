# Registration API

A Node.js Express server for handling user registrations and storing them in a CSV file.

## Project Structure

```
registration-api/
├── data/                  # Data storage (auto-created)
│   └── registrations.csv  # CSV file with registration data
├── src/                   # Source code
│   ├── config/            # Configuration
│   │   └── index.js       # Application settings
│   ├── middleware/        # Express middleware
│   │   └── index.js       # Middleware setup
│   ├── routes/            # API routes
│   │   ├── health.js      # Health check endpoint
│   │   ├── register.js    # Registration endpoint
│   │   └── index.js       # Route aggregator
│   ├── services/          # Business logic
│   │   └── csv-service.js # CSV operations
│   ├── utils/             # Utilities
│   │   ├── logger.js      # Logging utility
│   │   └── write-queue.js # Concurrency control
│   └── app.js             # Express app setup
├── index.js               # Entry point
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Features

- RESTful API for user registration
- CSV storage with concurrent write protection
- Data validation
- Proper error handling
- Logging system

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/register` - Registration endpoint

## Getting Started

### Prerequisites

- Node.js 14 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Server

Development mode with auto-restart:
```
npm run dev
```

Production mode:
```
npm start
```

## Registration Format

Required fields:
- firstName
- lastName
- email

Optional fields:
- phone
- birthDate
- category
- groupName
- isGroup

Example request:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "category": "Individual",
  "isGroup": false
}
```
