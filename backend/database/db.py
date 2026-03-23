import sqlite3

conn = sqlite3.connect("news.db", check_same_thread=False)
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    link TEXT,
    summary TEXT
)
""")

conn.commit()