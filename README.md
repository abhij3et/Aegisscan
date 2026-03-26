# AegisScan - The Sentinel AI

**AI-Based Cargo Image Inspection for Customs and Border Security**

## Overview

AegisScan is a modern, full-stack web application for detecting suspicious, misdeclared, or prohibited objects in cargo X-ray images. Built with React, Vite, and Supabase, it provides customs and border security agencies with an intelligent screening platform.

## Features

- **User Authentication** - Secure Supabase authentication for operators
- **Real-time Image Upload** - Upload and analyze cargo X-ray images instantly
- **AI Object Detection** - Detect and classify suspicious items with confidence scoring
- **Bounding Box Visualization** - See exactly where threats are detected
- **Live Feed Monitoring** - Real-time scan analysis interface
- **Analytics Dashboard** - View system performance metrics and trends
- **Scan History** - Persistent storage of all scans and detections
- **Risk Scoring** - Automatic threat level classification

## Tech Stack

**Frontend**
- React 18 with Vite
- Tailwind CSS for styling
- Material Design icons

**Backend & Database**
- Supabase for authentication and database
- PostgreSQL for data persistence
- Row-Level Security (RLS) for data protection

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Supabase account (already configured)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── contexts/        # React context (Auth)
├── lib/             # Utilities (Supabase client)
├── pages/           # Page components (Home, Analytics, LiveFeed, Contact)
├── App.jsx          # Main app component
├── main.jsx         # Entry point
└── tailwind.css     # Global styles
```

## Database Schema

### Tables
- **users** - User profiles and operator info
- **scans** - Cargo scan records with metadata
- **detections** - AI-detected objects and bounding boxes
- **scan_results** - Overall scan classification and notes

All tables have Row-Level Security enabled to ensure users can only access their own data.

## Environment Variables

The `.env` file should contain:
```
VITE_SUPABASE_URL=https://[project].supabase.co
VITE_SUPABASE_SUPABASE_ANON_KEY=[your-key]
```

These are pre-configured in the project.

## Authentication Flow

1. Users sign up with email and password
2. Create operator profile with unique ID
3. Automatic user record creation in database
4. Session management via Supabase Auth
5. RLS policies ensure data isolation

## Live Feed Features

- Upload cargo X-ray images
- Real-time AI detection processing
- Visual bounding boxes for detected threats
- Confidence scores for each detection
- Threat level classification (Nominal/Medium/High)
- Operator notes and logging
- Archive and finalize reports

## Analytics Dashboard

- Real-time system performance metrics
- Scans per hour tracking
- Total threats detected
- Detection accuracy statistics
- Historical trend analysis
- Scan history with filtering

## Home Dashboard

- System status overview
- Quick access to scanner
- Recent scan analysis
- Regional health status
- Active scan count
- Infrastructure monitoring

## Use Cases

- Customs cargo inspection
- Airport baggage screening
- Border security scanning
- Logistics shipment verification
- Automated threat detection

## Security

- All data encrypted at rest and in transit
- AES-256 encryption for sensitive data
- Row-Level Security on database tables
- Authenticated user sessions
- Audit logging for all operations

## Future Enhancements

- Integration with real ML/AI object detection APIs
- Advanced threat classification models
- Multi-user collaboration features
- Custom alerting and notifications
- API access for third-party integrations
- Mobile app for field operators

## License

Proprietary - AegisScan
