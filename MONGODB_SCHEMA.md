# MongoDB Schema Documentation

## Collections Overview

This application uses 5 main MongoDB collections to manage volleyball coaching data:

1. **players** - Core player information
2. **skillHistory** - Historical skill assessments
3. **rankHistory** - Rank change tracking
4. **trainings** - Training session records
5. **tournaments** - Tournament and team data

## Collection Schemas

### 1. Players Collection

Main collection storing all player information.

**Required Fields:**
- `firstName` (String) - Player's first name
- `lastName` (String) - Player's last name
- `startDate` (Date) - When the player started playing
- `rank` (Enum) - Current rank: "bronze", "silver", or "gold"

**Optional Fields:**
- `dateOfBirth` (Date)
- `position` (Enum) - "setter", "libero", "outside_hitter", "middle_blocker", "opposite", "defensive_specialist"
- `technicalSkills` (Object)
  - `serving`, `passing`, `setting`, `spiking`, `blocking`, `digging` (1-10 scale)
- `physicalAttributes` (Object)
  - `height` (Number, cm)
  - `jumpHeight` (Number, cm)
  - `speed` (Number, 1-10 scale)
- `overallSkill` (Number) - Calculated average of technical skills
- `trainingStats` (Object)
  - `totalTrainings` (Number)
  - `currentStreak` (Number)
  - `lastTrainingDate` (Date)
- `notes` (String)

**Indexes:**
- `{ lastName: 1, firstName: 1 }`
- `{ rank: 1 }`
- `{ overallSkill: -1 }`
- `{ 'trainingStats.totalTrainings': -1 }`

**Example:**
```javascript
{
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: ISODate("2005-03-15"),
  position: "outside_hitter",
  startDate: ISODate("2023-09-01"),
  rank: "silver",
  technicalSkills: {
    serving: 7,
    passing: 8,
    setting: 5,
    spiking: 9,
    blocking: 7,
    digging: 6
  },
  physicalAttributes: {
    height: 185,
    jumpHeight: 75,
    speed: 8
  },
  overallSkill: 7.0,
  trainingStats: {
    totalTrainings: 45,
    currentStreak: 3,
    lastTrainingDate: ISODate("2025-10-05")
  },
  notes: "Excellent spiker, needs work on setting"
}
```

### 2. Skill History Collection

Tracks changes in player skills over time.

**Required Fields:**
- `playerId` (ObjectId) - Reference to player
- `date` (Date) - When assessment was made
- `technicalSkills` (Object) - All 6 skills (serving, passing, setting, spiking, blocking, digging)

**Optional Fields:**
- `physicalAttributes` (Object)
- `overallSkill` (Number)
- `notes` (String)

**Indexes:**
- `{ playerId: 1, date: -1 }`

**Example:**
```javascript
{
  playerId: ObjectId("..."),
  date: ISODate("2025-10-01"),
  technicalSkills: {
    serving: 7,
    passing: 8,
    setting: 5,
    spiking: 9,
    blocking: 7,
    digging: 6
  },
  overallSkill: 7.0,
  notes: "Monthly assessment - showing improvement in passing"
}
```

### 3. Rank History Collection

Records all rank changes over time.

**Required Fields:**
- `playerId` (ObjectId) - Reference to player
- `date` (Date) - When rank change occurred
- `oldRank` (Enum) - "bronze", "silver", "gold", or null
- `newRank` (Enum) - "bronze", "silver", or "gold"

**Optional Fields:**
- `reason` (String) - Explanation for rank change

**Indexes:**
- `{ playerId: 1, date: -1 }`

**Example:**
```javascript
{
  playerId: ObjectId("..."),
  date: ISODate("2025-08-15"),
  oldRank: "bronze",
  newRank: "silver",
  reason: "Consistent improvement in all technical skills"
}
```

### 4. Trainings Collection

Records each training session.

**Required Fields:**
- `date` (Date) - Training date
- `skillsWorkedOn` (Array) - Skills practiced: "serving", "passing", "setting", "spiking", "blocking", "digging", "physical", "tactics"

**Optional Fields:**
- `duration` (Number) - Minutes
- `attendees` (Array of Objects)
  - `playerId` (ObjectId)
  - `performanceNotes` (String)
- `generalNotes` (String)

**Indexes:**
- `{ date: -1 }`

**Example:**
```javascript
{
  date: ISODate("2025-10-05"),
  duration: 120,
  skillsWorkedOn: ["serving", "passing", "tactics"],
  attendees: [
    {
      playerId: ObjectId("..."),
      performanceNotes: "Excellent serving today, 80% success rate"
    },
    {
      playerId: ObjectId("..."),
      performanceNotes: "Struggled with passing under pressure"
    }
  ],
  generalNotes: "Focused on serve-receive situations. Good intensity overall."
}
```

### 5. Tournaments Collection

Records tournaments and team compositions.

**Required Fields:**
- `name` (String) - Tournament name
- `date` (Date) - Tournament date
- `teams` (Array) - Team compositions
  - `teamName` (String)
  - `players` (Array of ObjectIds)
  - `averageSkill` (Number) - Optional
  - `rankDistribution` (Object) - Optional
    - `bronze`, `silver`, `gold` (Numbers)

**Optional Fields:**
- `location` (String)
- `results` (Array)
  - `teamName` (String)
  - `wins` (Number)
  - `losses` (Number)
  - `ranking` (Number)
- `notes` (String)

**Indexes:**
- `{ date: -1 }`

**Example:**
```javascript
{
  name: "Fall Championship 2025",
  date: ISODate("2025-10-15"),
  location: "Sports Center Arena",
  teams: [
    {
      teamName: "Team A",
      players: [ObjectId("..."), ObjectId("..."), ObjectId("...")],
      averageSkill: 7.2,
      rankDistribution: { bronze: 1, silver: 1, gold: 1 }
    }
  ],
  results: [
    { teamName: "Team A", wins: 3, losses: 1, ranking: 1 }
  ],
  notes: "Very competitive tournament"
}
```

## Useful Queries

### Get Player Progression
```javascript
// Get all skill history for a player
db.skillHistory.find({ playerId: ObjectId("...") }).sort({ date: 1 })
```

### Get Players by Rank
```javascript
// Get all gold-ranked players sorted by skill
db.players.find({ rank: "gold" }).sort({ overallSkill: -1 })
```

### Get Recent Trainings
```javascript
// Get trainings since October 1, 2025
db.trainings.find({ date: { $gte: ISODate("2025-10-01") } }).sort({ date: -1 })
```

### Get Player's Training Attendance
```javascript
// Get all trainings a player attended
db.trainings.find({ "attendees.playerId": ObjectId("...") }).sort({ date: -1 })
```

### Calculate Team Balance
```javascript
// Get rank distribution and average skill by rank
db.players.aggregate([
  { $match: { rank: { $in: ["bronze", "silver", "gold"] } } },
  { $group: {
      _id: "$rank",
      avgSkill: { $avg: "$overallSkill" },
      count: { $sum: 1 }
    }
  }
])
```

### Get Player with Full History
```javascript
// Get player with training and skill history
db.players.aggregate([
  { $match: { _id: ObjectId("...") } },
  { $lookup: {
      from: "trainings",
      localField: "_id",
      foreignField: "attendees.playerId",
      as: "trainingsAttended"
    }
  },
  { $lookup: {
      from: "skillHistory",
      localField: "_id",
      foreignField: "playerId",
      as: "skillProgression"
    }
  }
])
```
