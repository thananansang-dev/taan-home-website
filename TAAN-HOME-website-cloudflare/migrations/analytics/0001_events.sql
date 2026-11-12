CREATE TABLE IF NOT EXISTS analytics_events (
 id TEXT PRIMARY KEY, session TEXT NOT NULL, kind TEXT NOT NULL CHECK(kind IN ('pageview','click')),
 path TEXT NOT NULL, target TEXT NOT NULL DEFAULT '', referrer TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS analytics_events_time ON analytics_events(created_at);
