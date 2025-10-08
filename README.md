# SJL-Cerebro
Tool for sport joie lille to track player

## Tech Stack
- **Nuxt 4.1.3** - Vue.js framework for production
- **MongoDB** - Database for storing player data
- **Mongoose** - MongoDB ODM for data modeling

## Setup

### Prerequisites
- Node.js 18+ or Node.js 20+
- MongoDB instance (local or remote)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd SJL-Cerebro
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` and update the MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/sjl-cerebro
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

### API Endpoints

- `GET /api/health` - Check MongoDB connection status
- `GET /api/collections` - View all collections and their document counts

### Database Schema

The application uses MongoDB with the following collections:

#### Players Collection
Stores comprehensive player information including:
- Personal details (firstName, lastName, dateOfBirth)
- Position and rank (bronze, silver, gold)
- Technical skills (serving, passing, setting, spiking, blocking, digging) - rated 1-10
- Physical attributes (height, jumpHeight, speed)
- Training statistics (totalTrainings, currentStreak, lastTrainingDate)
- Overall skill calculation

#### Skill History Collection
Tracks player skill progression over time with historical snapshots of:
- Technical skills assessments
- Physical attributes measurements
- Overall skill ratings
- Assessment notes and dates

#### Rank History Collection
Records all rank changes with:
- Old and new rank
- Date of change
- Reason for promotion/demotion

#### Training Collection
Logs training sessions including:
- Date and duration
- Skills worked on
- Attendance list with performance notes
- General session notes

#### Tournament Collection
Manages tournament data:
- Tournament details (name, date, location)
- Team compositions with player assignments
- Team balance metrics (average skill, rank distribution)
- Tournament results

### Project Structure

```
├── app/                     # Nuxt app directory
│   └── app.vue             # Root Vue component
├── server/                 # Server-side code
│   ├── api/               # API endpoints
│   │   ├── health.ts      # Health check endpoint
│   │   └── collections.ts # Collections info endpoint
│   ├── models/            # MongoDB models
│   │   ├── Player.ts      # Player model with technical/physical attributes
│   │   ├── SkillHistory.ts # Historical skill tracking
│   │   ├── RankHistory.ts  # Rank change tracking
│   │   ├── Training.ts     # Training session records
│   │   └── Tournament.ts   # Tournament and team management
│   └── utils/             # Server utilities
│       └── mongoose.ts    # MongoDB connection utility
├── public/                # Static assets
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Project dependencies
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```
