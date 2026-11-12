ALTER TABLE analytics_events ADD COLUMN channel TEXT NOT NULL DEFAULT 'ข้อมูลเดิม / ไม่ทราบ';
ALTER TABLE analytics_events ADD COLUMN utm_source TEXT NOT NULL DEFAULT '';
ALTER TABLE analytics_events ADD COLUMN utm_medium TEXT NOT NULL DEFAULT '';
ALTER TABLE analytics_events ADD COLUMN utm_campaign TEXT NOT NULL DEFAULT '';
