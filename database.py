import sqlite3

DATABASE = "database.db"


def get_connection():
    connection = sqlite3.connect(DATABASE)
    connection.row_factory = sqlite3.Row
    return connection


def create_tables():

    connection = get_connection()
    cursor = connection.cursor()

    # ============================================================
    # ANIMALS TABLE
    # ============================================================

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS animals (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            animal_id TEXT UNIQUE NOT NULL,

            animal_name TEXT NOT NULL,

            animal_type TEXT NOT NULL,

            breed TEXT,

            gender TEXT,

            date_of_birth TEXT,

            color TEXT,

            owner_name TEXT,

            owner_phone TEXT,

            purchase_date TEXT,

            pregnancy_count INTEGER DEFAULT 0,

            calving_count INTEGER DEFAULT 0,

            milk_production REAL DEFAULT 0,

            notes TEXT,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )
    """)

    # ============================================================
    # VACCINATIONS TABLE
    # ============================================================

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS vaccinations (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            animal_id TEXT NOT NULL,

            vaccine_name TEXT NOT NULL,

            vaccination_date TEXT NOT NULL,

            next_due_date TEXT,

            veterinarian TEXT,

            notes TEXT,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (animal_id)
            REFERENCES animals (animal_id)

        )
    """)

    # ============================================================
    # MEDICAL RECORDS TABLE
    # ============================================================

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS medical_records (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            animal_id TEXT NOT NULL,

            visit_date TEXT NOT NULL,

            symptoms TEXT,

            diagnosis TEXT,

            treatment TEXT,

            medicines TEXT,

            veterinarian TEXT,

            notes TEXT,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            FOREIGN KEY (animal_id)
            REFERENCES animals (animal_id)

        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS pregnancy_records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            animal_id TEXT NOT NULL,
            pregnancy_date TEXT NOT NULL,
            expected_calving_date TEXT,
            actual_calving_date TEXT,
            calving_outcome TEXT,
            calf_count INTEGER DEFAULT 0,
            veterinarian TEXT,
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (animal_id) REFERENCES animals (animal_id)
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS milk_records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            animal_id TEXT NOT NULL,
            production_date TEXT NOT NULL,
            morning_milk REAL DEFAULT 0,
            evening_milk REAL DEFAULT 0,
            total_milk REAL DEFAULT 0,
            notes TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (animal_id) REFERENCES animals (animal_id)
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS ownership_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            animal_id TEXT NOT NULL,
            previous_owner TEXT NOT NULL,
            previous_owner_phone TEXT,
            new_owner TEXT NOT NULL,
            new_owner_phone TEXT,
            transfer_date TEXT NOT NULL,
            transfer_price REAL DEFAULT 0,
            transfer_reason TEXT,
            notes TEXT,
            FOREIGN KEY (animal_id) REFERENCES animals(animal_id)
        )
    """)

    connection.commit()
    connection.close()


if __name__ == "__main__":

    create_tables()

    print("Database and tables created successfully.")