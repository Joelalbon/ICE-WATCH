-- ICE-WATCH database schema
CREATE TABLE IF NOT EXISTS reports (
  report_id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP NOT NULL,
  lat DOUBLE PRECISION NOT NULL,
  lon DOUBLE PRECISION NOT NULL,
  description TEXT NOT NULL,
  photo_url TEXT,
  verified BOOLEAN DEFAULT FALSE,
  user_id TEXT,
  source TEXT
);
