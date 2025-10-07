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

### Project Structure

```
├── app/                  # Nuxt app directory
│   └── app.vue          # Root Vue component
├── server/              # Server-side code
│   ├── api/            # API endpoints
│   │   └── health.ts   # Health check endpoint
│   ├── models/         # MongoDB models
│   │   └── Player.ts   # Player model
│   └── utils/          # Server utilities
│       └── mongoose.ts # MongoDB connection utility
├── public/             # Static assets
├── nuxt.config.ts      # Nuxt configuration
└── package.json        # Project dependencies
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```
