/* =========================================================
   PASHUTRACK DASHBOARD JAVASCRIPT
   QR SCANNER + DASHBOARD FUNCTIONS
   ========================================================= */


/* =========================================================
   SHOW COMING SOON
   ========================================================= */

function showComingSoon(feature) {

    /*
        QR Scanner is now implemented.
    */

    if (feature === "scanQR") {
        openQRScanner();
        return;
    }


    /*
        Register Animal
    */

    if (feature === "registerAnimal") {

        window.location.href = "/add-animal";
        return;

    }


    /*
        View Animals
    */

    if (feature === "viewAnimals") {

        window.location.href = "/animals";
        return;

    }

    /*
    Add Vaccination
*/

if (feature === "addVaccination") {

    window.location.href = "/animals";
    return;

}


    /*
        Other features are still under development.
    */

    let message = "This feature is coming soon.";

    if (feature === "addVaccination") {
        message = "Vaccination module is coming soon.";
    }

    else if (feature === "addMedical") {
        message = "Medical records module is coming soon.";
    }

    else if (feature === "medicalRecords") {
        message = "Medical records module is coming soon.";
    }

    else if (feature === "pregnancyCalving") {
        message = "Pregnancy and calving module is coming soon.";
    }

    else if (feature === "milkProduction") {
        message = "Milk production module is coming soon.";
    }

    else if (feature === "ownershipHistory") {
        message = "Ownership history module is coming soon.";
    }

    else if (feature === "analytics") {
        message = "Analytics module is coming soon.";
    }

    else if (feature === "qrIdentification") {
        message = "QR identification module is available through Scan QR.";
    }

    alert(message);
}


/* =========================================================
   QR SCANNER
   ========================================================= */

let qrScanner = null;


/*
   Load the QR scanning library dynamically.
   This means you do not need to install another Python package.
*/

function loadQRLibrary() {

    return new Promise((resolve, reject) => {

        /*
           Check if library is already loaded.
        */

        if (typeof Html5Qrcode !== "undefined") {

            resolve();
            return;

        }


        /*
           Create script element.
        */

        const script = document.createElement("script");

        script.src = "https://unpkg.com/html5-qrcode";

        script.onload = function () {

            resolve();

        };

        script.onerror = function () {

            reject(
                new Error("Unable to load QR scanner library.")
            );

        };

        document.head.appendChild(script);

    });

}


/* =========================================================
   OPEN QR SCANNER
   ========================================================= */

async function openQRScanner() {

    /*
       Create scanner window.
    */

    const overlay = document.createElement("div");

    overlay.id = "qrScannerOverlay";


    overlay.innerHTML = `

        <div class="qr-scanner-box">

            <div class="qr-scanner-header">

                <div>

                    <h2>
                        📱 Scan Animal QR
                    </h2>

                    <p>
                        Point your camera at the animal QR code.
                    </p>

                </div>

                <button
                    id="closeQRScanner"
                    class="qr-close-button"
                >
                    ✕
                </button>

            </div>


            <div
                id="qr-reader"
                class="qr-reader"
            ></div>


            <div
                id="qr-scan-status"
                class="qr-scan-status"
            >
                Starting camera...
            </div>


            <div class="qr-scanner-instructions">

                <p>
                    🐄 Scan the QR code attached to the animal.
                </p>

                <p>
                    The animal's digital profile will open automatically.
                </p>

            </div>

        </div>

    `;


    document.body.appendChild(overlay);


    /*
       Add scanner styling.
    */

    addQRScannerStyles();


    /*
       Close button.
    */

    document
        .getElementById("closeQRScanner")
        .addEventListener(
            "click",
            closeQRScanner
        );


    /*
       Load QR library.
    */

    try {

        await loadQRLibrary();

        startQRScanner();

    }

    catch (error) {

        document
            .getElementById("qr-scan-status")
            .textContent =
            "Unable to load QR scanner. Please check your internet connection.";

        console.error(error);

    }

}


/* =========================================================
   START CAMERA
   ========================================================= */

function startQRScanner() {

    const status =
        document.getElementById("qr-scan-status");


    if (!status) {
        return;
    }


    status.textContent =
        "Please allow camera access when your browser asks.";


    qrScanner = new Html5Qrcode("qr-reader");


    const scannerConfig = {

        fps: 10,

        qrbox: {
            width: 250,
            height: 250
        }

    };


    /*
       Try to use the back camera first.
    */

    qrScanner
        .start(
            {
                facingMode: "environment"
            },

            scannerConfig,

            onQRScanSuccess,

            onQRScanError

        )

        .then(function () {

            status.textContent =
                "Camera is ready. Scan the animal QR code.";

        })

        .catch(function (error) {

            console.error(error);

            status.textContent =
                "Camera could not start. Please allow camera permission and try again.";

        });

}


/* =========================================================
   SUCCESSFUL QR SCAN
   ========================================================= */

function onQRScanSuccess(decodedText, decodedResult) {

    console.log(
        "QR Code Scanned:",
        decodedText
    );


    const status =
        document.getElementById("qr-scan-status");


    if (status) {

        status.textContent =
            "QR detected! Opening animal profile...";

    }


    /*
       Stop camera before opening profile.
    */

    if (qrScanner) {

        qrScanner
            .stop()
            .then(function () {

                handleScannedQR(decodedText);

            })

            .catch(function () {

                handleScannedQR(decodedText);

            });

    }

    else {

        handleScannedQR(decodedText);

    }

}


/* =========================================================
   HANDLE SCANNED QR
   ========================================================= */

function handleScannedQR(decodedText) {

    /*
       The QR generated by PashuTrack contains
       the animal profile URL.

       Example:

       http://127.0.0.1:5000/animal/PA-0003
    */


    if (
        decodedText.startsWith("http://") ||
        decodedText.startsWith("https://")
    ) {

        window.location.href = decodedText;

        return;

    }


    /*
       If QR contains only Animal ID.
    */

    if (
        decodedText.startsWith("PA-")
    ) {

        window.location.href =
            "/animal/" +
            encodeURIComponent(decodedText);

        return;

    }


    /*
       Unknown QR.
    */

    alert(
        "This QR code is not a valid PashuTrack animal QR code."
    );

}


/* =========================================================
   QR SCAN ERROR
   ========================================================= */

function onQRScanError(errorMessage) {

    /*
       We intentionally do not show every scanning error
       because the scanner continuously checks the camera.
    */

}


/* =========================================================
   CLOSE QR SCANNER
   ========================================================= */

function closeQRScanner() {

    /*
       Stop camera.
    */

    if (qrScanner) {

        qrScanner
            .stop()
            .then(function () {

                qrScanner.clear();

                qrScanner = null;

                removeQRScanner();

            })

            .catch(function () {

                qrScanner = null;

                removeQRScanner();

            });

    }

    else {

        removeQRScanner();

    }

}


/* =========================================================
   REMOVE SCANNER WINDOW
   ========================================================= */

function removeQRScanner() {

    const overlay =
        document.getElementById(
            "qrScannerOverlay"
        );


    if (overlay) {

        overlay.remove();

    }

}


/* =========================================================
   QR SCANNER STYLING
   ========================================================= */

function addQRScannerStyles() {

    /*
       Avoid adding the same styles twice.
    */

    if (
        document.getElementById(
            "pashutrackQRStyles"
        )
    ) {

        return;

    }


    const style =
        document.createElement("style");


    style.id =
        "pashutrackQRStyles";


    style.textContent = `

        #qrScannerOverlay {

            position: fixed;

            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            background: rgba(0, 0, 0, 0.75);

            display: flex;

            align-items: center;

            justify-content: center;

            z-index: 99999;

            padding: 20px;

            box-sizing: border-box;

        }


        .qr-scanner-box {

            background: white;

            width: 100%;

            max-width: 520px;

            max-height: 90vh;

            overflow-y: auto;

            border-radius: 20px;

            padding: 25px;

            box-sizing: border-box;

            box-shadow:
                0 20px 60px rgba(0, 0, 0, 0.3);

        }


        .qr-scanner-header {

            display: flex;

            justify-content: space-between;

            align-items: flex-start;

            gap: 20px;

            margin-bottom: 20px;

        }


        .qr-scanner-header h2 {

            margin: 0 0 8px 0;

            font-size: 24px;

            color: #20351f;

        }


        .qr-scanner-header p {

            margin: 0;

            color: #666;

            font-size: 14px;

        }


        .qr-close-button {

            border: none;

            background: #f1f1f1;

            width: 40px;

            height: 40px;

            border-radius: 50%;

            cursor: pointer;

            font-size: 20px;

        }


        .qr-close-button:hover {

            background: #e5e5e5;

        }


        .qr-reader {

            width: 100%;

            min-height: 300px;

            border-radius: 12px;

            overflow: hidden;

            background: #f5f5f5;

        }


        .qr-scan-status {

            margin-top: 15px;

            padding: 12px;

            border-radius: 10px;

            background: #eef6ea;

            color: #376a32;

            text-align: center;

            font-size: 14px;

        }


        .qr-scanner-instructions {

            margin-top: 15px;

            padding: 15px;

            background: #f7f7f7;

            border-radius: 12px;

            color: #555;

            font-size: 14px;

        }


        .qr-scanner-instructions p {

            margin: 5px 0;

        }


        @media (max-width: 600px) {

            .qr-scanner-box {

                padding: 18px;

            }


            .qr-scanner-header h2 {

                font-size: 20px;

            }

        }

    `;


    document.head.appendChild(style);

}


/* =========================================================
   ESC KEY CLOSE
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            document.getElementById(
                "qrScannerOverlay"
            )
        ) {

            closeQRScanner();

        }

    }
);