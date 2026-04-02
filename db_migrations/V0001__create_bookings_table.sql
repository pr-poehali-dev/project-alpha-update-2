CREATE TABLE t_p92666155_project_alpha_update.bookings (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  route TEXT,
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);