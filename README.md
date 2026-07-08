# Notice Board

A full-stack Notice Board application built with **Next.js (Pages Router)**, **Prisma**, **PostgreSQL (Neon)**, and **Tailwind CSS**. The application allows users to create, view, edit, and delete notices with server-side validation and persistent storage.

## 🚀 Live Demo

Vercel: _Add your deployed Vercel URL here_

## 📂 GitHub Repository

GitHub: _Add your public GitHub repository URL here_

---

## Features

- Create a new notice
- View all notices
- Edit existing notices
- Delete notices with confirmation
- Urgent notices displayed first
- Server-side validation
- Responsive design for desktop and mobile
- Data stored in a hosted PostgreSQL database using Prisma

---

## Tech Stack

- Next.js (Pages Router)
- Prisma ORM
- PostgreSQL (Neon)
- Tailwind CSS
- Axios
- Vercel

---

## Project Structure

```text
components/
lib/
pages/
  api/
  edit/
prisma/
public/
styles/
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd notice-board
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and add your database connection:

```env
DATABASE_URL="your-neon-database-url"
```

Generate the Prisma Client:

```bash
npx prisma generate
```

Push the schema to the database:

```bash
npx prisma db push
```

Run the application:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## API Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | `/api/notices` | Get all notices |
| POST | `/api/notices` | Create a notice |
| GET | `/api/notices/:id` | Get a single notice |
| PUT | `/api/notices/:id` | Update a notice |
| DELETE | `/api/notices/:id` | Delete a notice |

---

## Database

The project uses **Prisma ORM** with a hosted **Neon PostgreSQL** database.

Notice fields:

- Title
- Body
- Category
- Priority
- Publish Date
- Optional Image

---

## One Improvement With More Time

If I had more time, I would implement image uploads using Cloudinary or Vercel Blob Storage instead of accepting image URLs. I would also add user authentication and pagination for better scalability.

---

## AI Usage

AI tools were used to assist with:
- Understanding the assignment requirements
- Reviewing the project structure
- Explaining Next.js and Prisma concepts
- Improving UI suggestions
- Debugging errors and refining API implementation

All code was reviewed, integrated, tested, and modified as needed to ensure it met the assignment requirements.

---

## Author

**Md Sahbaz Alam**