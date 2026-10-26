const translations = {

    // ============================================================
    // ENGLISH
    // ============================================================

    en: {

        // =========================
        // COMMON
        // =========================

        language: "Language",
        dashboard: "Dashboard",
        animals: "Animals",
        addAnimal: "Add Animal",
        vaccination: "Vaccination",
        medicalRecords: "Medical Records",
        pregnancyCalving: "Pregnancy & Calving",
        milkProduction: "Milk Production",
        ownership: "Ownership",
        analytics: "Analytics",
        qrIdentification: "QR Identification",
        logout: "Logout",
        login: "Login",
        save: "Save",
        cancel: "Cancel",
        submit: "Submit",
        back: "Back",
        viewDetails: "View Details",
        noData: "No data available",
        comingSoon: "Coming Soon",

        // =========================
        // LOGIN
        // =========================

        loginTitle: "PashuTrack - Login",
        livestockManagement: "Livestock Management System",

        username: "Username",
        password: "Password",

        enterUsername: "Enter username",
        enterPassword: "Enter password",

        availableRoles: "Available Roles",

        farmer: "Farmer",
        farmerAccess: "Manage own animals",

        veterinarian: "Veterinarian",
        veterinarianAccess: "Manage animal health records",

        administrator: "Administrator",
        administratorAccess: "Manage the system",

        loginDemoNote:
            "Secure role-based access for livestock records",

        invalidLogin:
            "Invalid username or password.",

        // =========================
        // DASHBOARD
        // =========================

        welcome: "Welcome",
        welcomeBack: "Welcome back",

        dashboardOverview:
            "Here's an overview of your livestock management system.",

        quickActions: "Quick Actions",

        scanQR: "Scan QR",
        addVaccination: "Add Vaccination",
        addMedicalRecord: "Add Medical Record",

        totalAnimals: "Total Animals",
        cows: "Cows",
        buffaloes: "Buffaloes",
        todaysMilk: "Today's Milk",

        recentAnimals: "Recent Animals",
        recentRegisteredAnimals: "Recently Registered Animals",

        alerts: "Alerts",
        vaccinationReminder: "Vaccination Reminder",
        medicalAlert: "Medical Alert",
        pregnancyAlert: "Pregnancy Alert",

        noRecentAnimals:
            "No recent animals found.",

        registerFirstAnimal:
            "Register your first animal",

        managementModules: "Management Modules",

        roleBasedAccess: "Role-Based Access",

        roleBasedAccessDescription:
            "Different users can access information according to their assigned role.",

        analyticsOverview: "Analytics Overview",

        analyticsDescription:
            "Analyze livestock data and monitor important trends.",

        footerText:
            "PashuTrack - Digital Livestock Record Management System",

        // =========================
        // ADD ANIMAL
        // =========================

        registerAnimal: "Register Animal",
        registerNewAnimal: "Register New Animal",

        animalInformation: "Animal Information",
        ownerInformation: "Owner Information",
        healthReproduction: "Health & Reproduction",
        additionalInformation: "Additional Information",

        animalID: "Animal ID",
        animalName: "Animal Name",
        animalType: "Animal Type",
        breed: "Breed",
        gender: "Gender",
        dateOfBirth: "Date of Birth",
        color: "Color",

        ownerName: "Owner Name",
        phoneNumber: "Phone Number",
        purchaseDate: "Purchase Date",

        pregnancyCount: "Pregnancy Count",
        calvingCount: "Calving Count",
        milkProduction: "Milk Production",
        milkProductionLitres: "Milk Production (Litres)",

        notes: "Notes",

        enterAnimalName: "Enter animal name",
        enterBreed: "Enter breed",
        enterColor: "Enter color",
        enterOwnerName: "Enter owner name",
        enterPhoneNumber: "Enter phone number",
        enterMilkProduction: "Enter milk production",
        enterNotes: "Enter notes",

        selectAnimalType: "Select animal type",
        selectGender: "Select gender",

        cow: "Cow",
        buffalo: "Buffalo",

        male: "Male",
        female: "Female",

        saveAnimal: "Save Animal",
        registerAnimalButton: "Register Animal",

        // =========================
        // ANIMALS LIST
        // =========================

        allAnimals: "All Animals",
        registeredAnimals: "Registered Animals",

        animalList: "Animal List",

        id: "ID",
        name: "Name",
        type: "Type",
        owner: "Owner",

        viewAnimalDetails: "View Details",

        noAnimalsRegistered:
            "No animals registered yet.",

        addFirstAnimal:
            "Add your first animal",

        // =========================
        // ANIMAL DETAILS
        // =========================

        animalDetails: "Animal Details",
        basicInformation: "Basic Information",

        digitalAnimalIdentity:
            "Digital Animal Identity",

        animalRecord: "Animal Record",

        birthDate: "Birth Date",

        healthInformation:
            "Health Information",

        reproductionInformation:
            "Reproduction Information",

        purchaseInformation:
            "Purchase Information",

        digitalIdentityComingSoon:
            "QR-based digital identity will be available here.",

        scanAnimalQR:
            "Scan the animal QR code to access this digital record.",

        // =========================
        // ROLE BASED ACCESS
        // =========================

        farmerRole: "Farmer",
        veterinarianRole: "Veterinarian",
        adminRole: "Administrator",

        farmerDescription:
            "Can manage and view their own animal records.",

        veterinarianDescription:
            "Can view animal information and manage health-related records.",

        administratorDescription:
            "Can manage users, animals and the overall system.",

        // =========================
        // QR
        // =========================

        qrCode: "QR Code",
        generateQR: "Generate QR Code",
        scanQRCode: "Scan QR Code",

        qrIdentity: "QR Identity",

        qrDescription:
            "Each animal can have a unique QR code linked to its digital record.",

        generateQRCode: "Generate QR Code",

        // =========================
        // VACCINATION
        // =========================

        vaccinationRecords: "Vaccination Records",
        vaccineName: "Vaccine Name",
        vaccinationDate: "Vaccination Date",
        nextVaccinationDate: "Next Vaccination Date",
        veterinarianName: "Veterinarian Name",

        addVaccinationRecord:
            "Add Vaccination Record",

        // New vaccination page translations

        vaccinationTitle:
            "Vaccination Records",

        vaccinationSubtitle:
            "Manage vaccination history of this animal",

        vaccinationAddButton:
            "+ Add Vaccination",

        vaccinationAnimalInformation:
            "Animal Information",

        vaccinationHistory:
            "Vaccination History",

        vaccinationNoRecords:
            "No vaccination records found for this animal.",

        vaccinationAddFirst:
            "Add First Vaccination",

        vaccinationVaccineName:
            "Vaccine Name",

        vaccinationDate:
            "Vaccination Date",

        vaccinationNextDue:
            "Next Due Date",

        vaccinationVeterinarian:
            "Veterinarian",

        vaccinationNotes:
            "Notes",

        // =========================
        // MEDICAL
        // =========================

        medicalHistory: "Medical History",
        disease: "Disease",
        diagnosis: "Diagnosis",
        treatment: "Treatment",
        treatmentDate: "Treatment Date",

        addMedicalRecord:
            "Add Medical Record",

        // =========================
        // PREGNANCY / CALVING
        // =========================

        pregnancyHistory:
            "Pregnancy History",

        pregnancyDate:
            "Pregnancy Date",

        expectedCalvingDate:
            "Expected Calving Date",

        actualCalvingDate:
            "Actual Calving Date",

        calvingHistory:
            "Calving History",

        // =========================
        // MILK
        // =========================

        milkRecords: "Milk Records",
        morningMilk: "Morning Milk",
        eveningMilk: "Evening Milk",
        totalMilk: "Total Milk",

        milkDate: "Milk Date",

        // =========================
        // OWNERSHIP
        // =========================

        ownershipHistory:
            "Ownership History",

        currentOwner:
            "Current Owner",

        previousOwner:
            "Previous Owner",

        ownershipDate:
            "Ownership Date",

        // =========================
        // ANALYTICS
        // =========================

        livestockAnalytics:
            "Livestock Analytics",

        animalStatistics:
            "Animal Statistics",

        milkAnalytics:
            "Milk Analytics",

        healthAnalytics:
            "Health Analytics",

        totalCows:
            "Total Cows",

        totalBuffaloes:
            "Total Buffaloes",

        // =========================
        // MESSAGES
        // =========================

        successfullySaved:
            "Successfully saved.",

        successfullyAdded:
            "Successfully added.",

        successfullyUpdated:
            "Successfully updated.",

        errorOccurred:
            "An error occurred.",

        animalNotFound:
            "Animal not found.",

        requiredField:
            "This field is required.",

        // =========================
        // GENERAL
        // =========================

        yes: "Yes",
        no: "No",
        maleAnimal: "Male",
        femaleAnimal: "Female",

        role: "Role",

        loggedInAs: "Logged in as"

    },


    // ============================================================
    // MARATHI
    // ============================================================

    mr: {

        // =========================
        // COMMON
        // =========================

        language: "भाषा",
        dashboard: "डॅशबोर्ड",
        animals: "जनावरे",
        addAnimal: "जनावर जोडा",
        vaccination: "लसीकरण",
        medicalRecords: "वैद्यकीय नोंदी",
        pregnancyCalving: "गर्भधारणा आणि वासरू",
        milkProduction: "दूध उत्पादन",
        ownership: "मालकी",
        analytics: "विश्लेषण",
        qrIdentification: "QR ओळख",
        logout: "लॉगआउट",
        login: "लॉगिन",
        save: "जतन करा",
        cancel: "रद्द करा",
        submit: "सबमिट करा",
        back: "मागे",
        viewDetails: "तपशील पहा",
        noData: "माहिती उपलब्ध नाही",
        comingSoon: "लवकरच उपलब्ध",

        // =========================
        // LOGIN
        // =========================

        loginTitle: "PashuTrack - लॉगिन",
        livestockManagement:
            "जनावर व्यवस्थापन प्रणाली",

        username: "वापरकर्तानाव",
        password: "पासवर्ड",

        enterUsername:
            "वापरकर्तानाव टाका",

        enterPassword:
            "पासवर्ड टाका",

        availableRoles:
            "उपलब्ध भूमिका",

        farmer: "शेतकरी",

        farmerAccess:
            "स्वतःच्या जनावरांचे व्यवस्थापन",

        veterinarian: "पशुवैद्य",

        veterinarianAccess:
            "जनावरांच्या आरोग्य नोंदी व्यवस्थापित करा",

        administrator: "प्रशासक",

        administratorAccess:
            "संपूर्ण प्रणाली व्यवस्थापित करा",

        loginDemoNote:
            "जनावरांच्या नोंदींसाठी सुरक्षित भूमिका-आधारित प्रवेश",

        invalidLogin:
            "वापरकर्तानाव किंवा पासवर्ड चुकीचा आहे.",

        // =========================
        // DASHBOARD
        // =========================

        welcome: "स्वागत",

        welcomeBack:
            "पुन्हा स्वागत आहे",

        dashboardOverview:
            "तुमच्या जनावर व्यवस्थापन प्रणालीचा आढावा येथे आहे.",

        quickActions:
            "जलद कृती",

        scanQR:
            "QR स्कॅन करा",

        addVaccination:
            "लसीकरण जोडा",

        addMedicalRecord:
            "वैद्यकीय नोंद जोडा",

        totalAnimals:
            "एकूण जनावरे",

        cows: "गायी",
        buffaloes: "म्हशी",
        todaysMilk: "आजचे दूध",

        recentAnimals:
            "अलीकडील जनावरे",

        recentRegisteredAnimals:
            "अलीकडे नोंदणीकृत जनावरे",

        alerts: "सूचना",

        vaccinationReminder:
            "लसीकरणाची आठवण",

        medicalAlert:
            "वैद्यकीय सूचना",

        pregnancyAlert:
            "गर्भधारणा सूचना",

        noRecentAnimals:
            "अलीकडील जनावरे उपलब्ध नाहीत.",

        registerFirstAnimal:
            "तुमच्या पहिल्या जनावराची नोंदणी करा",

        managementModules:
            "व्यवस्थापन विभाग",

        roleBasedAccess:
            "भूमिका-आधारित प्रवेश",

        roleBasedAccessDescription:
            "प्रत्येक वापरकर्त्याला त्याच्या नियुक्त भूमिकेनुसार माहितीचा प्रवेश मिळेल.",

        analyticsOverview:
            "विश्लेषणाचा आढावा",

        analyticsDescription:
            "जनावरांच्या माहितीचे विश्लेषण करा आणि महत्त्वाचे बदल पहा.",

        footerText:
            "PashuTrack - डिजिटल जनावर नोंद व्यवस्थापन प्रणाली",

        // =========================
        // ADD ANIMAL
        // =========================

        registerAnimal:
            "जनावराची नोंदणी करा",

        registerNewAnimal:
            "नवीन जनावराची नोंदणी करा",

        animalInformation:
            "जनावराची माहिती",

        ownerInformation:
            "मालकाची माहिती",

        healthReproduction:
            "आरोग्य आणि प्रजनन",

        additionalInformation:
            "अतिरिक्त माहिती",

        animalID:
            "जनावर क्रमांक",

        animalName:
            "जनावराचे नाव",

        animalType:
            "जनावराचा प्रकार",

        breed: "जात",
        gender: "लिंग",
        dateOfBirth: "जन्मतारीख",
        color: "रंग",

        ownerName:
            "मालकाचे नाव",

        phoneNumber:
            "फोन नंबर",

        purchaseDate:
            "खरेदी तारीख",

        pregnancyCount:
            "गर्भधारणेची संख्या",

        calvingCount:
            "वासरांना जन्म दिल्याची संख्या",

        milkProduction:
            "दूध उत्पादन",

        milkProductionLitres:
            "दूध उत्पादन (लिटर)",

        notes: "नोंदी",

        enterAnimalName:
            "जनावराचे नाव टाका",

        enterBreed:
            "जात टाका",

        enterColor:
            "रंग टाका",

        enterOwnerName:
            "मालकाचे नाव टाका",

        enterPhoneNumber:
            "फोन नंबर टाका",

        enterMilkProduction:
            "दूध उत्पादन टाका",

        enterNotes:
            "नोंदी टाका",

        selectAnimalType:
            "जनावराचा प्रकार निवडा",

        selectGender:
            "लिंग निवडा",

        cow: "गाय",
        buffalo: "म्हैस",

        male: "नर",
        female: "मादी",

        saveAnimal:
            "जनावर जतन करा",

        registerAnimalButton:
            "जनावराची नोंदणी करा",

        // =========================
        // ANIMALS LIST
        // =========================

        allAnimals:
            "सर्व जनावरे",

        registeredAnimals:
            "नोंदणीकृत जनावरे",

        animalList:
            "जनावरांची यादी",

        id: "क्रमांक",
        name: "नाव",
        type: "प्रकार",
        owner: "मालक",

        viewAnimalDetails:
            "तपशील पहा",

        noAnimalsRegistered:
            "अजून कोणत्याही जनावराची नोंदणी झालेली नाही.",

        addFirstAnimal:
            "तुमचे पहिले जनावर जोडा",

        // =========================
        // ANIMAL DETAILS
        // =========================

        animalDetails:
            "जनावराचा तपशील",

        basicInformation:
            "मूलभूत माहिती",

        digitalAnimalIdentity:
            "डिजिटल जनावर ओळख",

        animalRecord:
            "जनावराची नोंद",

        birthDate:
            "जन्मतारीख",

        healthInformation:
            "आरोग्याची माहिती",

        reproductionInformation:
            "प्रजननाची माहिती",

        purchaseInformation:
            "खरेदीची माहिती",

        digitalIdentityComingSoon:
            "QR आधारित डिजिटल ओळख येथे लवकरच उपलब्ध होईल.",

        scanAnimalQR:
            "ही डिजिटल नोंद पाहण्यासाठी जनावराचा QR कोड स्कॅन करा.",

        // =========================
        // ROLE BASED ACCESS
        // =========================

        farmerRole:
            "शेतकरी",

        veterinarianRole:
            "पशुवैद्य",

        adminRole:
            "प्रशासक",

        farmerDescription:
            "स्वतःच्या जनावरांच्या नोंदी पाहू आणि व्यवस्थापित करू शकतो.",

        veterinarianDescription:
            "जनावरांची माहिती पाहू शकतो आणि आरोग्याशी संबंधित नोंदी व्यवस्थापित करू शकतो.",

        administratorDescription:
            "वापरकर्ते, जनावरे आणि संपूर्ण प्रणाली व्यवस्थापित करू शकतो.",

        // =========================
        // QR
        // =========================

        qrCode:
            "QR कोड",

        generateQR:
            "QR कोड तयार करा",

        scanQRCode:
            "QR कोड स्कॅन करा",

        qrIdentity:
            "QR ओळख",

        qrDescription:
            "प्रत्येक जनावरासाठी त्याच्या डिजिटल नोंदीशी जोडलेला स्वतंत्र QR कोड तयार करता येईल.",

        generateQRCode:
            "QR कोड तयार करा",

        // =========================
        // VACCINATION
        // =========================

        vaccinationRecords:
            "लसीकरण नोंदी",

        vaccineName:
            "लसीचे नाव",

        vaccinationDate:
            "लसीकरण तारीख",

        nextVaccinationDate:
            "पुढील लसीकरण तारीख",

        veterinarianName:
            "पशुवैद्याचे नाव",

        addVaccinationRecord:
            "लसीकरण नोंद जोडा",

        // New vaccination page translations

        vaccinationTitle:
            "लसीकरण नोंदी",

        vaccinationSubtitle:
            "या जनावराचा लसीकरण इतिहास व्यवस्थापित करा",

        vaccinationAddButton:
            "+ लसीकरण जोडा",

        vaccinationAnimalInformation:
            "जनावराची माहिती",

        vaccinationHistory:
            "लसीकरण इतिहास",

        vaccinationNoRecords:
            "या जनावरासाठी लसीकरण नोंदी उपलब्ध नाहीत.",

        vaccinationAddFirst:
            "पहिले लसीकरण जोडा",

        vaccinationVaccineName:
            "लसीचे नाव",

        vaccinationDate:
            "लसीकरण तारीख",

        vaccinationNextDue:
            "पुढील तारीख",

        vaccinationVeterinarian:
            "पशुवैद्य",

        vaccinationNotes:
            "नोंदी",

        // =========================
        // MEDICAL
        // =========================

        medicalHistory:
            "वैद्यकीय इतिहास",

        disease: "रोग",
        diagnosis: "निदान",
        treatment: "उपचार",
        treatmentDate: "उपचार तारीख",

        addMedicalRecord:
            "वैद्यकीय नोंद जोडा",

        // =========================
        // PREGNANCY / CALVING
        // =========================

        pregnancyHistory:
            "गर्भधारणा इतिहास",

        pregnancyDate:
            "गर्भधारणा तारीख",

        expectedCalvingDate:
            "अपेक्षित वासराची तारीख",

        actualCalvingDate:
            "प्रत्यक्ष वासराची तारीख",

        calvingHistory:
            "वासरांचा इतिहास",

        // =========================
        // MILK
        // =========================

        milkRecords:
            "दूध नोंदी",

        morningMilk:
            "सकाळचे दूध",

        eveningMilk:
            "संध्याकाळचे दूध",

        totalMilk:
            "एकूण दूध",

        milkDate:
            "दूध तारीख",

        // =========================
        // OWNERSHIP
        // =========================

        ownershipHistory:
            "मालकी इतिहास",

        currentOwner:
            "सध्याचा मालक",

        previousOwner:
            "मागील मालक",

        ownershipDate:
            "मालकी तारीख",

        // =========================
        // ANALYTICS
        // =========================

        livestockAnalytics:
            "जनावरांचे विश्लेषण",

        animalStatistics:
            "जनावरांची आकडेवारी",

        milkAnalytics:
            "दूध विश्लेषण",

        healthAnalytics:
            "आरोग्य विश्लेषण",

        totalCows:
            "एकूण गायी",

        totalBuffaloes:
            "एकूण म्हशी",

        // =========================
        // MESSAGES
        // =========================

        successfullySaved:
            "यशस्वीरित्या जतन केले.",

        successfullyAdded:
            "यशस्वीरित्या जोडले.",

        successfullyUpdated:
            "यशस्वीरित्या अपडेट केले.",

        errorOccurred:
            "एक त्रुटी आली.",

        animalNotFound:
            "जनावर सापडले नाही.",

        requiredField:
            "हे फील्ड आवश्यक आहे.",

        // =========================
        // GENERAL
        // =========================

        yes: "होय",
        no: "नाही",
        maleAnimal: "नर",
        femaleAnimal: "मादी",

        role: "भूमिका",

        loggedInAs:
            "लॉगिन केलेले वापरकर्ता"

    },


    // ============================================================
    // HINDI
    // ============================================================

    hi: {

        // =========================
        // COMMON
        // =========================

        language: "भाषा",
        dashboard: "डैशबोर्ड",
        animals: "पशु",
        addAnimal: "पशु जोड़ें",
        vaccination: "टीकाकरण",
        medicalRecords: "चिकित्सा रिकॉर्ड",
        pregnancyCalving: "गर्भावस्था और ब्याना",
        milkProduction: "दूध उत्पादन",
        ownership: "मालिकाना",
        analytics: "विश्लेषण",
        qrIdentification: "QR पहचान",
        logout: "लॉगआउट",
        login: "लॉगिन",
        save: "सहेजें",
        cancel: "रद्द करें",
        submit: "सबमिट करें",
        back: "वापस",
        viewDetails: "विवरण देखें",
        noData: "कोई जानकारी उपलब्ध नहीं है",
        comingSoon: "जल्द उपलब्ध होगा",

        // =========================
        // LOGIN
        // =========================

        loginTitle:
            "PashuTrack - लॉगिन",

        livestockManagement:
            "पशु प्रबंधन प्रणाली",

        username:
            "उपयोगकर्ता नाम",

        password:
            "पासवर्ड",

        enterUsername:
            "उपयोगकर्ता नाम दर्ज करें",

        enterPassword:
            "पासवर्ड दर्ज करें",

        availableRoles:
            "उपलब्ध भूमिकाएँ",

        farmer:
            "किसान",

        farmerAccess:
            "अपने पशुओं का प्रबंधन करें",

        veterinarian:
            "पशु चिकित्सक",

        veterinarianAccess:
            "पशु स्वास्थ्य रिकॉर्ड प्रबंधित करें",

        administrator:
            "प्रशासक",

        administratorAccess:
            "पूरी प्रणाली प्रबंधित करें",

        loginDemoNote:
            "पशु रिकॉर्ड के लिए सुरक्षित भूमिका-आधारित प्रवेश",

        invalidLogin:
            "उपयोगकर्ता नाम या पासवर्ड गलत है।",

        // =========================
        // DASHBOARD
        // =========================

        welcome:
            "स्वागत",

        welcomeBack:
            "वापसी पर स्वागत है",

        dashboardOverview:
            "यहाँ आपके पशु प्रबंधन प्रणाली का अवलोकन दिया गया है।",

        quickActions:
            "त्वरित कार्य",

        scanQR:
            "QR स्कैन करें",

        addVaccination:
            "टीकाकरण जोड़ें",

        addMedicalRecord:
            "चिकित्सा रिकॉर्ड जोड़ें",

        totalAnimals:
            "कुल पशु",

        cows:
            "गाय",

        buffaloes:
            "भैंस",

        todaysMilk:
            "आज का दूध",

        recentAnimals:
            "हाल के पशु",

        recentRegisteredAnimals:
            "हाल ही में पंजीकृत पशु",

        alerts:
            "सूचनाएँ",

        vaccinationReminder:
            "टीकाकरण अनुस्मारक",

        medicalAlert:
            "चिकित्सा सूचना",

        pregnancyAlert:
            "गर्भावस्था सूचना",

        noRecentAnimals:
            "हाल के पशु उपलब्ध नहीं हैं।",

        registerFirstAnimal:
            "अपने पहले पशु का पंजीकरण करें",

        managementModules:
            "प्रबंधन मॉड्यूल",

        roleBasedAccess:
            "भूमिका-आधारित प्रवेश",

        roleBasedAccessDescription:
            "प्रत्येक उपयोगकर्ता अपनी निर्धारित भूमिका के अनुसार जानकारी तक पहुँच सकता है।",

        analyticsOverview:
            "विश्लेषण का अवलोकन",

        analyticsDescription:
            "पशु डेटा का विश्लेषण करें और महत्वपूर्ण रुझानों की निगरानी करें।",

        footerText:
            "PashuTrack - डिजिटल पशु रिकॉर्ड प्रबंधन प्रणाली",

        // =========================
        // ADD ANIMAL
        // =========================

        registerAnimal:
            "पशु पंजीकृत करें",

        registerNewAnimal:
            "नए पशु का पंजीकरण करें",

        animalInformation:
            "पशु की जानकारी",

        ownerInformation:
            "मालिक की जानकारी",

        healthReproduction:
            "स्वास्थ्य और प्रजनन",

        additionalInformation:
            "अतिरिक्त जानकारी",

        animalID:
            "पशु आईडी",

        animalName:
            "पशु का नाम",

        animalType:
            "पशु का प्रकार",

        breed:
            "नस्ल",

        gender:
            "लिंग",

        dateOfBirth:
            "जन्म तिथि",

        color:
            "रंग",

        ownerName:
            "मालिक का नाम",

        phoneNumber:
            "फोन नंबर",

        purchaseDate:
            "खरीद तिथि",

        pregnancyCount:
            "गर्भधारण की संख्या",

        calvingCount:
            "ब्याने की संख्या",

        milkProduction:
            "दूध उत्पादन",

        milkProductionLitres:
            "दूध उत्पादन (लीटर)",

        notes:
            "टिप्पणियाँ",

        enterAnimalName:
            "पशु का नाम दर्ज करें",

        enterBreed:
            "नस्ल दर्ज करें",

        enterColor:
            "रंग दर्ज करें",

        enterOwnerName:
            "मालिक का नाम दर्ज करें",

        enterPhoneNumber:
            "फोन नंबर दर्ज करें",

        enterMilkProduction:
            "दूध उत्पादन दर्ज करें",

        enterNotes:
            "टिप्पणियाँ दर्ज करें",

        selectAnimalType:
            "पशु का प्रकार चुनें",

        selectGender:
            "लिंग चुनें",

        cow:
            "गाय",

        buffalo:
            "भैंस",

        male:
            "नर",

        female:
            "मादा",

        saveAnimal:
            "पशु सहेजें",

        registerAnimalButton:
            "पशु पंजीकृत करें",

        // =========================
        // ANIMALS LIST
        // =========================

        allAnimals:
            "सभी पशु",

        registeredAnimals:
            "पंजीकृत पशु",

        animalList:
            "पशु सूची",

        id:
            "आईडी",

        name:
            "नाम",

        type:
            "प्रकार",

        owner:
            "मालिक",

        viewAnimalDetails:
            "विवरण देखें",

        noAnimalsRegistered:
            "अभी तक कोई पशु पंजीकृत नहीं है।",

        addFirstAnimal:
            "अपना पहला पशु जोड़ें",

        // =========================
        // ANIMAL DETAILS
        // =========================

        animalDetails:
            "पशु का विवरण",

        basicInformation:
            "मूल जानकारी",

        digitalAnimalIdentity:
            "डिजिटल पशु पहचान",

        animalRecord:
            "पशु रिकॉर्ड",

        birthDate:
            "जन्म तिथि",

        healthInformation:
            "स्वास्थ्य की जानकारी",

        reproductionInformation:
            "प्रजनन की जानकारी",

        purchaseInformation:
            "खरीद की जानकारी",

        digitalIdentityComingSoon:
            "QR आधारित डिजिटल पहचान यहाँ जल्द उपलब्ध होगी।",

        scanAnimalQR:
            "इस डिजिटल रिकॉर्ड को देखने के लिए पशु का QR कोड स्कैन करें।",

        // =========================
        // ROLE BASED ACCESS
        // =========================

        farmerRole:
            "किसान",

        veterinarianRole:
            "पशु चिकित्सक",

        adminRole:
            "प्रशासक",

        farmerDescription:
            "अपने पशुओं के रिकॉर्ड देख और प्रबंधित कर सकता है।",

        veterinarianDescription:
            "पशु की जानकारी देख सकता है और स्वास्थ्य संबंधी रिकॉर्ड प्रबंधित कर सकता है।",

        administratorDescription:
            "उपयोगकर्ता, पशु और पूरी प्रणाली प्रबंधित कर सकता है।",

        // =========================
        // QR
        // =========================

        qrCode:
            "QR कोड",

        generateQR:
            "QR कोड बनाएँ",

        scanQRCode:
            "QR कोड स्कैन करें",

        qrIdentity:
            "QR पहचान",

        qrDescription:
            "प्रत्येक पशु के डिजिटल रिकॉर्ड से जुड़ा एक अलग QR कोड बनाया जा सकता है।",

        generateQRCode:
            "QR कोड बनाएँ",

        // =========================
        // VACCINATION
        // =========================

        vaccinationRecords:
            "टीकाकरण रिकॉर्ड",

        vaccineName:
            "टीके का नाम",

        vaccinationDate:
            "टीकाकरण तिथि",

        nextVaccinationDate:
            "अगली टीकाकरण तिथि",

        veterinarianName:
            "पशु चिकित्सक का नाम",

        addVaccinationRecord:
            "टीकाकरण रिकॉर्ड जोड़ें",

        // New vaccination page translations

        vaccinationTitle:
            "टीकाकरण रिकॉर्ड",

        vaccinationSubtitle:
            "इस पशु का टीकाकरण इतिहास प्रबंधित करें",

        vaccinationAddButton:
            "+ टीकाकरण जोड़ें",

        vaccinationAnimalInformation:
            "पशु की जानकारी",

        vaccinationHistory:
            "टीकाकरण इतिहास",

        vaccinationNoRecords:
            "इस पशु के लिए कोई टीकाकरण रिकॉर्ड नहीं मिला।",

        vaccinationAddFirst:
            "पहला टीकाकरण जोड़ें",

        vaccinationVaccineName:
            "टीके का नाम",

        vaccinationDate:
            "टीकाकरण तिथि",

        vaccinationNextDue:
            "अगली तिथि",

        vaccinationVeterinarian:
            "पशु चिकित्सक",

        vaccinationNotes:
            "टिप्पणियाँ",

        // =========================
        // MEDICAL
        // =========================

        medicalHistory:
            "चिकित्सा इतिहास",

        disease:
            "रोग",

        diagnosis:
            "निदान",

        treatment:
            "उपचार",

        treatmentDate:
            "उपचार तिथि",

        addMedicalRecord:
            "चिकित्सा रिकॉर्ड जोड़ें",

        // =========================
        // PREGNANCY / CALVING
        // =========================

        pregnancyHistory:
            "गर्भावस्था इतिहास",

        pregnancyDate:
            "गर्भावस्था तिथि",

        expectedCalvingDate:
            "अपेक्षित ब्याने की तिथि",

        actualCalvingDate:
            "वास्तविक ब्याने की तिथि",

        calvingHistory:
            "ब्याने का इतिहास",

        // =========================
        // MILK
        // =========================

        milkRecords:
            "दूध रिकॉर्ड",

        morningMilk:
            "सुबह का दूध",

        eveningMilk:
            "शाम का दूध",

        totalMilk:
            "कुल दूध",

        milkDate:
            "दूध की तिथि",

        // =========================
        // OWNERSHIP
        // =========================

        ownershipHistory:
            "मालिकाना इतिहास",

        currentOwner:
            "वर्तमान मालिक",

        previousOwner:
            "पिछला मालिक",

        ownershipDate:
            "मालिकाना तिथि",

        // =========================
        // ANALYTICS
        // =========================

        livestockAnalytics:
            "पशु विश्लेषण",

        animalStatistics:
            "पशु आँकड़े",

        milkAnalytics:
            "दूध विश्लेषण",

        healthAnalytics:
            "स्वास्थ्य विश्लेषण",

        totalCows:
            "कुल गाय",

        totalBuffaloes:
            "कुल भैंस",

        // =========================
        // MESSAGES
        // =========================

        successfullySaved:
            "सफलतापूर्वक सहेजा गया।",

        successfullyAdded:
            "सफलतापूर्वक जोड़ा गया।",

        successfullyUpdated:
            "सफलतापूर्वक अपडेट किया गया।",

        errorOccurred:
            "एक त्रुटि हुई।",

        animalNotFound:
            "पशु नहीं मिला।",

        requiredField:
            "यह फ़ील्ड आवश्यक है।",

        // =========================
        // GENERAL
        // =========================

        yes:
            "हाँ",

        no:
            "नहीं",

        maleAnimal:
            "नर",

        femaleAnimal:
            "मादा",

        role:
            "भूमिका",

        loggedInAs:
            "लॉगिन किया गया उपयोगकर्ता"

    }

};


// ================================================================
// LANGUAGE APPLICATION FUNCTION
// ================================================================

function applyLanguage(language) {

    // Check whether selected language exists

    if (!translations[language]) {
        language = "en";
    }


    // ------------------------------------------------------------
    // Translate normal text
    // ------------------------------------------------------------

    document.querySelectorAll("[data-i18n]").forEach(function(element) {

        const key =
            element.getAttribute("data-i18n");

        if (
            translations[language][key] !== undefined
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    // ------------------------------------------------------------
    // Translate placeholders
    // ------------------------------------------------------------

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {

        const key =
            element.getAttribute("data-i18n-placeholder");

        if (
            translations[language][key] !== undefined
        ) {

            element.placeholder =
                translations[language][key];

        }

    });


    // ------------------------------------------------------------
    // Translate title attributes
    // ------------------------------------------------------------

    document.querySelectorAll("[data-i18n-title]").forEach(function(element) {

        const key =
            element.getAttribute("data-i18n-title");

        if (
            translations[language][key] !== undefined
        ) {

            element.title =
                translations[language][key];

        }

    });


    // ------------------------------------------------------------
    // Change HTML language
    // ------------------------------------------------------------

    document.documentElement.lang =
        language;


    // ------------------------------------------------------------
    // Save selected language
    // ------------------------------------------------------------

    localStorage.setItem(
        "pashuLanguage",
        language
    );


    // ------------------------------------------------------------
    // Keep language dropdown synchronized
    // ------------------------------------------------------------

    const languageSelect =
        document.getElementById("languageSelect");

    if (languageSelect) {

        languageSelect.value =
            language;

    }

}


// ================================================================
// LOAD SAVED LANGUAGE
// ================================================================

function loadSavedLanguage() {

    const savedLanguage =
        localStorage.getItem("pashuLanguage") || "en";

    applyLanguage(savedLanguage);

}


// ================================================================
// LANGUAGE SELECTOR
// ================================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const languageSelect =
            document.getElementById("languageSelect");

        if (languageSelect) {

            languageSelect.addEventListener(
                "change",
                function() {

                    applyLanguage(
                        this.value
                    );

                }
            );

        }

        loadSavedLanguage();

    }
);