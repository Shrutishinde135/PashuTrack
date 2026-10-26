from flask import Flask, render_template, request, redirect, url_for, session
from database import get_connection, create_tables
import qrcode
import os
from datetime import date

app = Flask(__name__)

# Secret key for login sessions
app.secret_key = "pashutrack_secret_key"

# Create database tables
create_tables()


# ============================================================
# HOME
# ============================================================

@app.route("/")
def home():
    return render_template("index.html")


# ============================================================
# LOGIN
# ============================================================

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        if username == "admin" and password == "admin123":

            session["user_id"] = 1
            session["username"] = "admin"
            session["role"] = "admin"

            return redirect(url_for("dashboard"))

        elif username == "farmer" and password == "farmer123":

            session["user_id"] = 2
            session["username"] = "farmer"
            session["role"] = "farmer"

            return redirect(url_for("dashboard"))

        elif username == "vet" and password == "vet123":

            session["user_id"] = 3
            session["username"] = "vet"
            session["role"] = "veterinarian"

            return redirect(url_for("dashboard"))

        else:

            return render_template(
                "login.html",
                error="Invalid username or password."
            )

    return render_template("login.html")


# ============================================================
# LOGOUT
# ============================================================

@app.route("/logout")
def logout():

    session.clear()

    return redirect(url_for("login"))


# ============================================================
# DASHBOARD
# ============================================================

# ============================================================
# DASHBOARD
# ============================================================

@app.route("/dashboard")
def dashboard():

    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    try:
        # ----------------------------------------------------
        # 1. Total registered animals
        # ----------------------------------------------------
        cursor.execute("""
            SELECT COUNT(*)
            FROM animals
        """)
        total_animals = cursor.fetchone()[0]

        # ----------------------------------------------------
        # 2. Vaccinations due today or overdue
        # ----------------------------------------------------
        cursor.execute("""
            SELECT COUNT(*)
            FROM vaccinations
            WHERE next_due_date IS NOT NULL
              AND TRIM(next_due_date) != ''
              AND date(next_due_date) <= date('now', 'localtime')
        """)
        vaccinations_due = cursor.fetchone()[0]

        # ----------------------------------------------------
        # 3. Animals with a pregnancy record
        # ----------------------------------------------------
        cursor.execute("""
            SELECT COUNT(DISTINCT animal_id)
            FROM pregnancy_records
            WHERE pregnancy_date IS NOT NULL
              AND TRIM(pregnancy_date) != ''
              AND (
                  actual_calving_date IS NULL
                  OR TRIM(actual_calving_date) = ''
              )
        """)
        pregnant_animals = cursor.fetchone()[0]

        # ----------------------------------------------------
        # 4. Total medical records
        # ----------------------------------------------------
        cursor.execute("""
            SELECT COUNT(*)
            FROM medical_records
        """)
        medical_cases = cursor.fetchone()[0]

        # ----------------------------------------------------
        # 5. Five most recently registered animals
        # ----------------------------------------------------
        cursor.execute("""
            SELECT *
            FROM animals
            ORDER BY id DESC
            LIMIT 5
        """)
        recent_animals = cursor.fetchall()

    finally:
        connection.close()

    return render_template(
        "dashboard.html",
        total_animals=total_animals,
        vaccinations_due=vaccinations_due,
        pregnant_animals=pregnant_animals,
        medical_cases=medical_cases,
        recent_animals=recent_animals,
        username=session.get("username"),
        role=session.get("role")
    )

# ============================================================
# ADD ANIMAL
# ============================================================

@app.route("/add-animal", methods=["GET", "POST"])
def add_animal():

    if "user_id" not in session:
        return redirect(url_for("login"))

    if request.method == "POST":

        animal_name = request.form["animal_name"]
        animal_type = request.form["animal_type"]
        breed = request.form["breed"]
        gender = request.form["gender"]
        date_of_birth = request.form["date_of_birth"]
        color = request.form["color"]
        owner_name = request.form["owner_name"]
        owner_phone = request.form["owner_phone"]
        purchase_date = request.form["purchase_date"]
        pregnancy_count = request.form["pregnancy_count"]
        calving_count = request.form["calving_count"]
        milk_production = request.form["milk_production"]
        notes = request.form["notes"]

        connection = get_connection()
        cursor = connection.cursor()

        # Generate unique animal ID
        cursor.execute("SELECT COUNT(*) FROM animals")
        count = cursor.fetchone()[0] + 1

        animal_id = f"PA-{count:04d}"

        # Save animal information
        cursor.execute("""
            INSERT INTO animals (
                animal_id,
                animal_name,
                animal_type,
                breed,
                gender,
                date_of_birth,
                color,
                owner_name,
                owner_phone,
                purchase_date,
                pregnancy_count,
                calving_count,
                milk_production,
                notes
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            animal_id,
            animal_name,
            animal_type,
            breed,
            gender,
            date_of_birth,
            color,
            owner_name,
            owner_phone,
            purchase_date,
            pregnancy_count,
            calving_count,
            milk_production,
            notes
        ))

        connection.commit()
        connection.close()

        # ========================================================
        # GENERATE QR CODE
        # ========================================================

        qr_data = url_for(
            "animal_details",
            animal_id=animal_id,
            _external=True
        )

        qr = qrcode.make(qr_data)

        qr_folder = os.path.join(
            app.static_folder,
            "qr_codes"
        )

        os.makedirs(qr_folder, exist_ok=True)

        qr_path = os.path.join(
            qr_folder,
            f"{animal_id}.png"
        )

        qr.save(qr_path)

        return redirect(
            url_for(
                "animal_details",
                animal_id=animal_id
            )
        )

    return render_template("add_animal.html")


# ============================================================
# ALL ANIMALS
# ============================================================

@app.route("/animals")
def animals():

    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT *
        FROM animals
        ORDER BY id DESC
    """)

    animals = cursor.fetchall()

    connection.close()

    return render_template(
        "animals.html",
        animals=animals,
        username=session.get("username"),
        role=session.get("role")
    )


# ============================================================
# ANIMAL DETAILS
# ============================================================

@app.route("/animal/<animal_id>")
def animal_details(animal_id):

    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT *
        FROM animals
        WHERE animal_id = ?
    """, (animal_id,))

    animal = cursor.fetchone()

    connection.close()

    if animal is None:
        return "Animal not found", 404

    return render_template(
        "animal_details.html",
        animal=animal,
        username=session.get("username"),
        role=session.get("role")
    )


# ============================================================
# VACCINATION RECORDS
# ============================================================

@app.route("/vaccination/<animal_id>")
def vaccination(animal_id):

    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    # Get animal
    cursor.execute("""
        SELECT *
        FROM animals
        WHERE animal_id = ?
    """, (animal_id,))

    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    # Get vaccination records
    cursor.execute("""
        SELECT *
        FROM vaccinations
        WHERE animal_id = ?
        ORDER BY vaccination_date DESC
    """, (animal_id,))

    vaccinations = cursor.fetchall()

    connection.close()

    return render_template(
        "vaccination.html",
        animal=animal,
        vaccinations=vaccinations,
        username=session.get("username"),
        role=session.get("role")
    )


# ============================================================
# ADD VACCINATION
# ============================================================

@app.route("/add-vaccination/<animal_id>", methods=["GET", "POST"])
def add_vaccination(animal_id):

    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    # Check whether animal exists
    cursor.execute("""
        SELECT *
        FROM animals
        WHERE animal_id = ?
    """, (animal_id,))

    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    if request.method == "POST":

        vaccine_name = request.form["vaccine_name"]
        vaccination_date = request.form["vaccination_date"]
        next_due_date = request.form["next_due_date"]
        veterinarian = request.form["veterinarian"]
        notes = request.form["notes"]

        cursor.execute("""
            INSERT INTO vaccinations (
                animal_id,
                vaccine_name,
                vaccination_date,
                next_due_date,
                veterinarian,
                notes
            )
            VALUES (?, ?, ?, ?, ?, ?)
        """, (
            animal_id,
            vaccine_name,
            vaccination_date,
            next_due_date,
            veterinarian,
            notes
        ))

        connection.commit()
        connection.close()

        return redirect(
            url_for(
                "vaccination",
                animal_id=animal_id
            )
        )

    connection.close()

    return render_template(
        "add_vaccination.html",
        animal=animal,
        username=session.get("username"),
        role=session.get("role")
    )
@app.route("/medical-records/<animal_id>")
def medical_records(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    cursor.execute(
        """
        SELECT * FROM medical_records
        WHERE animal_id = ?
        ORDER BY visit_date DESC, id DESC
        """,
        (animal_id,)
    )

    records = cursor.fetchall()
    connection.close()

    return render_template(
        "medical_records.html",
        animal=animal,
        medical_records=records,
        username=session.get("username"),
        role=session.get("role")
    )


@app.route("/add-medical-record/<animal_id>", methods=["GET", "POST"])
def add_medical_record(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    if request.method == "POST":
        visit_date = request.form.get("visit_date", "").strip()
        symptoms = request.form.get("symptoms", "").strip()
        diagnosis = request.form.get("diagnosis", "").strip()
        treatment = request.form.get("treatment", "").strip()
        medicines = request.form.get("medicines", "").strip()
        veterinarian = request.form.get("veterinarian", "").strip()
        notes = request.form.get("notes", "").strip()

        if not visit_date:
            connection.close()
            return "Visit date is required.", 400

        cursor.execute(
            """
            INSERT INTO medical_records (
                animal_id,
                visit_date,
                symptoms,
                diagnosis,
                treatment,
                medicines,
                veterinarian,
                notes
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                animal_id,
                visit_date,
                symptoms,
                diagnosis,
                treatment,
                medicines,
                veterinarian,
                notes
            )
        )

        connection.commit()
        connection.close()

        return redirect(
            url_for("medical_records", animal_id=animal_id)
        )

    connection.close()

    return render_template(
        "add_medical_record.html",
        animal=animal,
        username=session.get("username"),
        role=session.get("role")
    )


@app.route("/pregnancy-records/<animal_id>")
def pregnancy_records(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    cursor.execute(
        """
        SELECT *
        FROM pregnancy_records
        WHERE animal_id = ?
        ORDER BY pregnancy_date DESC, id DESC
        """,
        (animal_id,)
    )
    pregnancy_records_list = cursor.fetchall()
    connection.close()

    return render_template(
        "pregnancy_records.html",
        animal=animal,
        pregnancy_records=pregnancy_records_list,
        username=session.get("username"),
        role=session.get("role")
    )


@app.route("/add-pregnancy-record/<animal_id>", methods=["GET", "POST"])
def add_pregnancy_record(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    if request.method == "POST":
        pregnancy_date = request.form.get(
            "pregnancy_date", ""
        ).strip()

        expected_calving_date = request.form.get(
            "expected_calving_date", ""
        ).strip()

        actual_calving_date = request.form.get(
            "actual_calving_date", ""
        ).strip()

        calving_outcome = request.form.get(
            "calving_outcome", ""
        ).strip()

        calf_count = request.form.get(
            "calf_count", "0"
        ).strip()

        veterinarian = request.form.get(
            "veterinarian", ""
        ).strip()

        notes = request.form.get(
            "notes", ""
        ).strip()

        if not pregnancy_date:
            connection.close()
            return "Pregnancy confirmation date is required.", 400

        try:
            calf_count = int(calf_count or 0)

            if calf_count < 0:
                raise ValueError

        except ValueError:
            connection.close()
            return "Calf count must be zero or a positive number.", 400

        # Save the pregnancy and calving record.
        cursor.execute(
            """
            INSERT INTO pregnancy_records (
                animal_id,
                pregnancy_date,
                expected_calving_date,
                actual_calving_date,
                calving_outcome,
                calf_count,
                veterinarian,
                notes
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                animal_id,
                pregnancy_date,
                expected_calving_date or None,
                actual_calving_date or None,
                calving_outcome or None,
                calf_count,
                veterinarian,
                notes
            )
        )

        # Increase pregnancy count by one.
        cursor.execute(
            """
            UPDATE animals
            SET pregnancy_count = COALESCE(pregnancy_count, 0) + 1
            WHERE animal_id = ?
            """,
            (animal_id,)
        )

        # Increase calving count only when an actual calving
        # date is entered and at least one calf is recorded.
        if actual_calving_date and calf_count > 0:
            cursor.execute(
                """
                UPDATE animals
                SET calving_count = COALESCE(calving_count, 0) + 1
                WHERE animal_id = ?
                """,
                (animal_id,)
            )

        connection.commit()
        connection.close()

        return redirect(
            url_for("pregnancy_records", animal_id=animal_id)
        )

    connection.close()

    return render_template(
        "add_pregnancy_record.html",
        animal=animal,
        username=session.get("username"),
        role=session.get("role")
    )

@app.route("/milk-records/<animal_id>")
def milk_records(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    cursor.execute(
        """
        SELECT * FROM milk_records
        WHERE animal_id = ?
        ORDER BY production_date DESC, id DESC
        """,
        (animal_id,)
    )
    records = cursor.fetchall()

    cursor.execute(
        """
        SELECT
            COALESCE(SUM(morning_milk), 0),
            COALESCE(SUM(evening_milk), 0),
            COALESCE(SUM(total_milk), 0)
        FROM milk_records
        WHERE animal_id = ?
        """,
        (animal_id,)
    )
    totals = cursor.fetchone()

    connection.close()

    return render_template(
        "milk_records.html",
        animal=animal,
        milk_records=records,
        total_morning=totals[0],
        total_evening=totals[1],
        total_production=totals[2],
        username=session.get("username"),
        role=session.get("role")
    )


@app.route("/add-milk-record/<animal_id>", methods=["GET", "POST"])
def add_milk_record(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    if request.method == "POST":
        production_date = request.form.get(
            "production_date", ""
        ).strip()

        morning_milk = request.form.get(
            "morning_milk", "0"
        ).strip()

        evening_milk = request.form.get(
            "evening_milk", "0"
        ).strip()

        notes = request.form.get("notes", "").strip()

        if not production_date:
            connection.close()
            return "Production date is required.", 400

        try:
            morning_milk = float(morning_milk or 0)
            evening_milk = float(evening_milk or 0)

            if (
                morning_milk < 0
                or evening_milk < 0
                or not all(map(
                    lambda value: value < float("inf"),
                    [morning_milk, evening_milk]
                ))
            ):
                raise ValueError

        except ValueError:
            connection.close()
            return "Milk quantities must be valid non-negative numbers.", 400

        total_milk = morning_milk + evening_milk

        cursor.execute(
            """
            INSERT INTO milk_records (
                animal_id,
                production_date,
                morning_milk,
                evening_milk,
                total_milk,
                notes
            )
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (
                animal_id,
                production_date,
                morning_milk,
                evening_milk,
                total_milk,
                notes
            )
        )

        connection.commit()
        connection.close()

        return redirect(
            url_for("milk_records", animal_id=animal_id)
        )

    connection.close()

    return render_template(
        "add_milk_record.html",
        animal=animal,
        username=session.get("username"),
        role=session.get("role")
    )

@app.route("/ownership-history/<animal_id>")
def ownership_history(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    cursor.execute("""
        SELECT * FROM ownership_history
        WHERE animal_id = ?
        ORDER BY transfer_date DESC, id DESC
    """, (animal_id,))

    ownership_records = cursor.fetchall()
    connection.close()

    return render_template(
        "ownership_history.html",
        animal=animal,
        ownership_records=ownership_records,
        username=session.get("username"),
        role=session.get("role")
    )


@app.route("/add-ownership-transfer/<animal_id>", methods=["GET", "POST"])
def add_ownership_transfer(animal_id):
    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM animals WHERE animal_id = ?",
        (animal_id,)
    )
    animal = cursor.fetchone()

    if animal is None:
        connection.close()
        return "Animal not found", 404

    if request.method == "POST":
        previous_owner = request.form["previous_owner"].strip()
        previous_owner_phone = request.form["previous_owner_phone"].strip()
        new_owner = request.form["new_owner"].strip()
        new_owner_phone = request.form["new_owner_phone"].strip()
        transfer_date = request.form["transfer_date"]
        transfer_price = request.form["transfer_price"]
        transfer_reason = request.form["transfer_reason"].strip()
        notes = request.form["notes"].strip()

        if not previous_owner or not new_owner or not transfer_date:
            connection.close()
            return "Previous owner, new owner, and transfer date are required.", 400

        try:
            transfer_price = float(transfer_price or 0)

            if transfer_price < 0 or transfer_price == float("inf"):
                raise ValueError

        except ValueError:
            connection.close()
            return "Please enter a valid, non-negative transfer price.", 400

        cursor.execute("""
            INSERT INTO ownership_history (
                animal_id,
                previous_owner,
                previous_owner_phone,
                new_owner,
                new_owner_phone,
                transfer_date,
                transfer_price,
                transfer_reason,
                notes
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            animal_id,
            previous_owner,
            previous_owner_phone,
            new_owner,
            new_owner_phone,
            transfer_date,
            transfer_price,
            transfer_reason,
            notes
        ))

        # Update the animal's current owner details.
        cursor.execute("""
            UPDATE animals
            SET owner_name = ?, owner_phone = ?
            WHERE animal_id = ?
        """, (new_owner, new_owner_phone, animal_id))

        connection.commit()
        connection.close()

        return redirect(
            url_for("ownership_history", animal_id=animal_id)
        )

    connection.close()

    return render_template(
        "add_ownership_transfer.html",
        animal=animal,
        username=session.get("username"),
        role=session.get("role")
    )



# ============================================================
# ALL VACCINATION RECORDS
# ============================================================

@app.route("/all-vaccinations")
def all_vaccinations():

    if "user_id" not in session:
        return redirect(url_for("login"))

    connection = get_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            vaccinations.*,
            animals.animal_name,
            animals.animal_type
        FROM vaccinations
        LEFT JOIN animals
            ON vaccinations.animal_id = animals.animal_id
        ORDER BY vaccinations.next_due_date ASC
    """)

    vaccination_records = cursor.fetchall()
    connection.close()

    return render_template(
    "all_vaccinations.html",
    vaccination_records=vaccination_records,
    now_date=date.today().isoformat(),
    username=session.get("username"),
    role=session.get("role")

    )

# ============================================================
# RUN APPLICATION
# ============================================================

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )