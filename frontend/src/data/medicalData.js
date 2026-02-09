/**
 * VaidyaAI - Medical Data Module
 * Realistic mock medical data for demonstration purposes
 * All values are for EDUCATIONAL purposes only - not real medical data
 */

// Medical term explanations in simple language (English base)
export const medicalTerms = {
    hemoglobin: {
        name: "Hemoglobin (Hb)",
        unit: "g/dL",
        normalRange: { min: 12.0, max: 17.5 },
        maleRange: { min: 13.5, max: 17.5 },
        femaleRange: { min: 12.0, max: 15.5 },
        explanation: "A protein in your red blood cells that carries oxygen throughout your body. Low levels may make you feel tired or weak.",
        whatIfHigh: "May indicate dehydration or certain blood disorders",
        whatIfLow: "May indicate anemia, which can cause fatigue and weakness"
    },
    rbc: {
        name: "Red Blood Cell Count (RBC)",
        unit: "million/µL",
        normalRange: { min: 4.0, max: 6.0 },
        explanation: "The number of red blood cells in your blood. These cells are responsible for carrying oxygen to all parts of your body.",
        whatIfHigh: "May indicate dehydration or lung disease",
        whatIfLow: "May indicate anemia or blood loss"
    },
    wbc: {
        name: "White Blood Cell Count (WBC)",
        unit: "cells/µL",
        normalRange: { min: 4000, max: 11000 },
        explanation: "These are your body's defense cells that fight infections. They help protect you from bacteria, viruses, and other harmful invaders.",
        whatIfHigh: "May indicate an infection or inflammation in your body",
        whatIfLow: "May indicate a weakened immune system"
    },
    platelets: {
        name: "Platelet Count",
        unit: "lakhs/µL",
        normalRange: { min: 1.5, max: 4.0 },
        explanation: "Tiny blood cells that help your blood clot when you get a cut. They stop bleeding by clumping together.",
        whatIfHigh: "May increase risk of blood clots",
        whatIfLow: "May cause easy bruising or bleeding"
    },
    glucose_fasting: {
        name: "Fasting Blood Glucose",
        unit: "mg/dL",
        normalRange: { min: 70, max: 100 },
        prediabetic: { min: 100, max: 125 },
        diabetic: { min: 126, max: 999 },
        explanation: "The amount of sugar in your blood after not eating for at least 8 hours. This helps check if you might have diabetes.",
        whatIfHigh: "May indicate prediabetes or diabetes",
        whatIfLow: "May cause dizziness, shakiness, or confusion"
    },
    cholesterol_total: {
        name: "Total Cholesterol",
        unit: "mg/dL",
        normalRange: { min: 0, max: 200 },
        borderline: { min: 200, max: 239 },
        high: { min: 240, max: 999 },
        explanation: "A waxy substance in your blood. Your body needs some cholesterol, but too much can build up in your arteries.",
        whatIfHigh: "May increase risk of heart disease and stroke"
    },
    hdl: {
        name: "HDL Cholesterol (Good)",
        unit: "mg/dL",
        normalRange: { min: 40, max: 200 },
        optimal: { min: 60, max: 200 },
        explanation: "This is the 'good' cholesterol that helps remove other forms of cholesterol from your bloodstream.",
        whatIfHigh: "Higher is better! It protects your heart",
        whatIfLow: "May increase risk of heart disease"
    },
    ldl: {
        name: "LDL Cholesterol (Bad)",
        unit: "mg/dL",
        normalRange: { min: 0, max: 100 },
        borderline: { min: 100, max: 159 },
        high: { min: 160, max: 999 },
        explanation: "This is the 'bad' cholesterol that can build up in your arteries and increase heart disease risk.",
        whatIfHigh: "May lead to blocked arteries and heart problems"
    },
    vitaminD: {
        name: "Vitamin D",
        unit: "ng/mL",
        normalRange: { min: 30, max: 100 },
        insufficient: { min: 20, max: 29 },
        deficient: { min: 0, max: 19 },
        explanation: "A vitamin your body makes when exposed to sunlight. It helps your bones stay strong and supports your immune system.",
        whatIfLow: "May cause bone weakness, fatigue, and muscle pain"
    },
    vitaminB12: {
        name: "Vitamin B12",
        unit: "pg/mL",
        normalRange: { min: 200, max: 900 },
        explanation: "An essential vitamin for brain function and making red blood cells. Found mainly in meat, eggs, and dairy.",
        whatIfLow: "May cause tiredness, weakness, and nerve problems"
    },
    tsh: {
        name: "Thyroid Stimulating Hormone (TSH)",
        unit: "mIU/L",
        normalRange: { min: 0.4, max: 4.0 },
        explanation: "Controls how your thyroid gland works. Your thyroid affects your metabolism, energy, and body temperature.",
        whatIfHigh: "May indicate underactive thyroid (hypothyroidism)",
        whatIfLow: "May indicate overactive thyroid (hyperthyroidism)"
    },
    creatinine: {
        name: "Creatinine",
        unit: "mg/dL",
        normalRange: { min: 0.7, max: 1.3 },
        explanation: "A waste product from muscle activity. Your kidneys filter it out of your blood. High levels may indicate kidney problems.",
        whatIfHigh: "May indicate your kidneys are not filtering properly"
    },
    urea: {
        name: "Blood Urea Nitrogen (BUN)",
        unit: "mg/dL",
        normalRange: { min: 7, max: 20 },
        explanation: "Another waste product that your kidneys filter. Helps check if your kidneys are working properly.",
        whatIfHigh: "May indicate kidney problems or dehydration"
    },
    sgot: {
        name: "SGOT/AST (Liver Enzyme)",
        unit: "U/L",
        normalRange: { min: 10, max: 40 },
        explanation: "An enzyme found in your liver. When your liver is damaged, this enzyme leaks into your blood.",
        whatIfHigh: "May indicate liver damage or disease"
    },
    sgpt: {
        name: "SGPT/ALT (Liver Enzyme)",
        unit: "U/L",
        normalRange: { min: 7, max: 56 },
        explanation: "Another liver enzyme. High levels together with SGOT often indicate liver problems.",
        whatIfHigh: "May indicate liver inflammation or damage"
    }
};

// Sample report templates with realistic values
export const sampleReports = {
    bloodTest: {
        id: "blood_complete",
        name: "Complete Blood Count (CBC)",
        description: "A comprehensive blood test that checks your overall health",
        findings: [
            { key: "hemoglobin", value: 14.2, status: "normal" },
            { key: "rbc", value: 4.8, status: "normal" },
            { key: "wbc", value: 7500, status: "normal" },
            { key: "platelets", value: 2.5, status: "normal" }
        ]
    },
    lipidPanel: {
        id: "lipid_profile",
        name: "Lipid Profile",
        description: "Tests to measure fats and cholesterol in your blood",
        findings: [
            { key: "cholesterol_total", value: 220, status: "elevated" },
            { key: "hdl", value: 45, status: "normal" },
            { key: "ldl", value: 145, status: "borderline" }
        ]
    },
    vitaminPanel: {
        id: "vitamin_check",
        name: "Vitamin Panel",
        description: "Checks important vitamin levels in your body",
        findings: [
            { key: "vitaminD", value: 18, status: "low" },
            { key: "vitaminB12", value: 350, status: "normal" }
        ]
    },
    diabetesPanel: {
        id: "diabetes_screen",
        name: "Diabetes Screening",
        description: "Tests to check blood sugar levels",
        findings: [
            { key: "glucose_fasting", value: 115, status: "elevated" }
        ]
    },
    thyroidPanel: {
        id: "thyroid_function",
        name: "Thyroid Function Test",
        description: "Checks how well your thyroid is working",
        findings: [
            { key: "tsh", value: 2.5, status: "normal" }
        ]
    },
    kidneyPanel: {
        id: "kidney_function",
        name: "Kidney Function Test",
        description: "Tests to check how well your kidneys are working",
        findings: [
            { key: "creatinine", value: 1.0, status: "normal" },
            { key: "urea", value: 15, status: "normal" }
        ]
    },
    liverPanel: {
        id: "liver_function",
        name: "Liver Function Test",
        description: "Tests to check how well your liver is working",
        findings: [
            { key: "sgot", value: 35, status: "normal" },
            { key: "sgpt", value: 42, status: "normal" }
        ]
    }
};

// Comprehensive sample analysis result (what shows after "analyzing")
export const getDemoAnalysis = () => ({
    summary: "Your report shows mostly normal values with a few areas that need attention. Your blood count is healthy, but your cholesterol is slightly elevated and Vitamin D levels are low. These are common findings and can often be improved with lifestyle changes.",
    findings: [
        {
            key: "cholesterol_total",
            label: "Total Cholesterol",
            value: 220,
            unit: "mg/dL",
            status: "elevated",
            normalRange: "< 200 mg/dL",
            explanation: medicalTerms.cholesterol_total.explanation,
            recommendation: "Consider reducing fried foods and adding more fiber to your diet."
        },
        {
            key: "vitaminD",
            label: "Vitamin D",
            value: 18,
            unit: "ng/mL",
            status: "low",
            normalRange: "30-100 ng/mL",
            explanation: medicalTerms.vitaminD.explanation,
            recommendation: "Spend 15-20 minutes in morning sunlight daily. Your doctor may suggest supplements."
        },
        {
            key: "hemoglobin",
            label: "Hemoglobin",
            value: 14.2,
            unit: "g/dL",
            status: "normal",
            normalRange: "13.5-17.5 g/dL",
            explanation: medicalTerms.hemoglobin.explanation,
            recommendation: "Your hemoglobin is healthy. Continue eating iron-rich foods."
        },
        {
            key: "glucose_fasting",
            label: "Fasting Blood Sugar",
            value: 98,
            unit: "mg/dL",
            status: "normal",
            normalRange: "70-100 mg/dL",
            explanation: medicalTerms.glucose_fasting.explanation,
            recommendation: "Your blood sugar is normal. Maintain a balanced diet."
        },
        {
            key: "tsh",
            label: "TSH (Thyroid)",
            value: 2.8,
            unit: "mIU/L",
            status: "normal",
            normalRange: "0.4-4.0 mIU/L",
            explanation: medicalTerms.tsh.explanation,
            recommendation: "Your thyroid function is normal."
        }
    ],
    remedies: [
        {
            title: "Dietary Changes",
            icon: "Leaf",
            description: "Reduce saturated fats and fried foods. Include more fiber-rich foods like oats, beans, and vegetables. Add fatty fish (salmon, mackerel) to your diet twice weekly.",
            priority: "high"
        },
        {
            title: "Vitamin D Boost",
            icon: "Sun",
            description: "Spend 15-20 minutes in morning sunlight (before 10 AM) daily. Your doctor may recommend Vitamin D3 supplements (usually 1000-2000 IU daily).",
            priority: "high"
        },
        {
            title: "Regular Exercise",
            icon: "Activity",
            description: "30 minutes of brisk walking or light jogging 5 times a week can help improve cholesterol levels naturally.",
            priority: "medium"
        },
        {
            title: "Stay Hydrated",
            icon: "Droplet",
            description: "Drink at least 8 glasses of water daily. Proper hydration helps your body function optimally.",
            priority: "low"
        }
    ]
});

// Multilingual medical term names
export const medicalTermTranslations = {
    en: {
        hemoglobin: "Hemoglobin",
        rbc: "Red Blood Cells",
        wbc: "White Blood Cells",
        platelets: "Platelet Count",
        glucose_fasting: "Fasting Blood Sugar",
        cholesterol_total: "Total Cholesterol",
        hdl: "HDL (Good Cholesterol)",
        ldl: "LDL (Bad Cholesterol)",
        vitaminD: "Vitamin D",
        vitaminB12: "Vitamin B12",
        tsh: "Thyroid (TSH)",
        creatinine: "Creatinine",
        urea: "Blood Urea",
        sgot: "SGOT (Liver)",
        sgpt: "SGPT (Liver)",
        normal: "Normal",
        elevated: "Slightly High",
        high: "High",
        low: "Low",
        borderline: "Borderline"
    },
    hi: {
        hemoglobin: "हीमोग्लोबिन",
        rbc: "लाल रक्त कोशिकाएं",
        wbc: "सफेद रक्त कोशिकाएं",
        platelets: "प्लेटलेट्स की संख्या",
        glucose_fasting: "खाली पेट रक्त शर्करा",
        cholesterol_total: "कुल कोलेस्ट्रॉल",
        hdl: "एचडीएल (अच्छा कोलेस्ट्रॉल)",
        ldl: "एलडीएल (खराब कोलेस्ट्रॉल)",
        vitaminD: "विटामिन डी",
        vitaminB12: "विटामिन बी12",
        tsh: "थायराइड (टीएसएच)",
        creatinine: "क्रिएटिनिन",
        urea: "रक्त यूरिया",
        sgot: "एसजीओटी (लीवर)",
        sgpt: "एसजीपीटी (लीवर)",
        normal: "सामान्य",
        elevated: "थोड़ा अधिक",
        high: "अधिक",
        low: "कम",
        borderline: "सीमा रेखा पर"
    },
    mr: {
        hemoglobin: "हिमोग्लोबिन",
        rbc: "लाल रक्तपेशी",
        wbc: "पांढऱ्या रक्तपेशी",
        platelets: "प्लेटलेट संख्या",
        glucose_fasting: "उपाशी रक्त साखर",
        cholesterol_total: "एकूण कोलेस्ट्रॉल",
        hdl: "एचडीएल (चांगला कोलेस्ट्रॉल)",
        ldl: "एलडीएल (वाईट कोलेस्ट्रॉल)",
        vitaminD: "व्हिटॅमिन डी",
        vitaminB12: "व्हिटॅमिन बी12",
        tsh: "थायरॉईड (टीएसएच)",
        creatinine: "क्रिएटिनिन",
        urea: "रक्त युरिया",
        sgot: "एसजीओटी (यकृत)",
        sgpt: "एसजीपीटी (यकृत)",
        normal: "सामान्य",
        elevated: "किंचित जास्त",
        high: "जास्त",
        low: "कमी",
        borderline: "सीमारेषेवर"
    },
    ta: {
        hemoglobin: "ஹீமோகுளோபின்",
        rbc: "சிவப்பு இரத்த அணுக்கள்",
        wbc: "வெள்ளை இரத்த அணுக்கள்",
        platelets: "இரத்தத்தட்டுகள்",
        glucose_fasting: "வெறும் வயிற்றில் இரத்த சர்க்கரை",
        cholesterol_total: "மொத்த கொலஸ்ட்ரால்",
        hdl: "HDL (நல்ல கொலஸ்ட்ரால்)",
        ldl: "LDL (கெட்ட கொலஸ்ட்ரால்)",
        vitaminD: "வைட்டமின் D",
        vitaminB12: "வைட்டமின் B12",
        tsh: "தைராய்டு (TSH)",
        creatinine: "கிரியேட்டினின்",
        urea: "இரத்த யூரியா",
        sgot: "SGOT (கல்லீரல்)",
        sgpt: "SGPT (கல்லீரல்)",
        normal: "இயல்பானது",
        elevated: "சற்று அதிகம்",
        high: "அதிகம்",
        low: "குறைவு",
        borderline: "எல்லையில்"
    },
    te: {
        hemoglobin: "హిమోగ్లోబిన్",
        rbc: "ఎర్ర రక్త కణాలు",
        wbc: "తెల్ల రక్త కణాలు",
        platelets: "ప్లేట్‌లెట్ కౌంట్",
        glucose_fasting: "ఉపవాస రక్త చక్కెర",
        cholesterol_total: "మొత్తం కొలెస్ట్రాల్",
        hdl: "HDL (మంచి కొలెస్ట్రాల్)",
        ldl: "LDL (చెడు కొలెస్ట్రాల్)",
        vitaminD: "విటమిన్ D",
        vitaminB12: "విటమిన్ B12",
        tsh: "థైరాయిడ్ (TSH)",
        creatinine: "క్రియేటినిన్",
        urea: "రక్త యూరియా",
        sgot: "SGOT (కాలేయం)",
        sgpt: "SGPT (కాలేయం)",
        normal: "సాధారణం",
        elevated: "కొంచెం ఎక్కువ",
        high: "ఎక్కువ",
        low: "తక్కువ",
        borderline: "సరిహద్దులో"
    },
    bn: {
        hemoglobin: "হিমোগ্লোবিন",
        rbc: "লোহিত রক্তকণিকা",
        wbc: "শ্বেত রক্তকণিকা",
        platelets: "অণুচক্রিকা সংখ্যা",
        glucose_fasting: "খালি পেটে রক্তে শর্করা",
        cholesterol_total: "মোট কোলেস্টেরল",
        hdl: "HDL (ভালো কোলেস্টেরল)",
        ldl: "LDL (খারাপ কোলেস্টেরল)",
        vitaminD: "ভিটামিন ডি",
        vitaminB12: "ভিটামিন বি১২",
        tsh: "থাইরয়েড (TSH)",
        creatinine: "ক্রিয়েটিনিন",
        urea: "রক্তের ইউরিয়া",
        sgot: "SGOT (লিভার)",
        sgpt: "SGPT (লিভার)",
        normal: "স্বাভাবিক",
        elevated: "সামান্য বেশি",
        high: "বেশি",
        low: "কম",
        borderline: "সীমানায়"
    },
    gu: {
        hemoglobin: "હિમોગ્લોબિન",
        rbc: "લાલ રક્ત કોષો",
        wbc: "સફેદ રક્ત કોષો",
        platelets: "પ્લેટલેટ ગણતરી",
        glucose_fasting: "ખાલી પેટે બ્લડ શુગર",
        cholesterol_total: "કુલ કોલેસ્ટ્રોલ",
        hdl: "HDL (સારું કોલેસ્ટ્રોલ)",
        ldl: "LDL (ખરાબ કોલેસ્ટ્રોલ)",
        vitaminD: "વિટામિન D",
        vitaminB12: "વિટામિન B12",
        tsh: "થાઇરોઇડ (TSH)",
        creatinine: "ક્રિએટિનિન",
        urea: "બ્લડ યુરિયા",
        sgot: "SGOT (લીવર)",
        sgpt: "SGPT (લીવર)",
        normal: "સામાન્ય",
        elevated: "થોડું વધારે",
        high: "વધારે",
        low: "ઓછું",
        borderline: "સરહદ પર"
    },
    kn: {
        hemoglobin: "ಹಿಮೋಗ್ಲೋಬಿನ್",
        rbc: "ಕೆಂಪು ರಕ್ತ ಕಣಗಳು",
        wbc: "ಬಿಳಿ ರಕ್ತ ಕಣಗಳು",
        platelets: "ಪ್ಲೇಟ್‌ಲೆಟ್ ಎಣಿಕೆ",
        glucose_fasting: "ಉಪವಾಸ ರಕ್ತ ಸಕ್ಕರೆ",
        cholesterol_total: "ಒಟ್ಟು ಕೊಲೆಸ್ಟ್ರಾಲ್",
        hdl: "HDL (ಒಳ್ಳೆಯ ಕೊಲೆಸ್ಟ್ರಾಲ್)",
        ldl: "LDL (ಕೆಟ್ಟ ಕೊಲೆಸ್ಟ್ರಾಲ್)",
        vitaminD: "ವಿಟಮಿನ್ D",
        vitaminB12: "ವಿಟಮಿನ್ B12",
        tsh: "ಥೈರಾಯ್ಡ್ (TSH)",
        creatinine: "ಕ್ರಿಯೇಟಿನಿನ್",
        urea: "ರಕ್ತ ಯೂರಿಯಾ",
        sgot: "SGOT (ಯಕೃತ್)",
        sgpt: "SGPT (ಯಕೃತ್)",
        normal: "ಸಾಮಾನ್ಯ",
        elevated: "ಸ್ವಲ್ಪ ಹೆಚ್ಚು",
        high: "ಹೆಚ್ಚು",
        low: "ಕಡಿಮೆ",
        borderline: "ಗಡಿಯಲ್ಲಿ"
    }
};

// Get status color based on finding status
export const getStatusColor = (status) => {
    switch (status) {
        case 'normal':
            return { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300', icon: 'CheckCircle' };
        case 'elevated':
        case 'borderline':
            return { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300', icon: 'AlertCircle' };
        case 'high':
        case 'low':
            return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', icon: 'AlertTriangle' };
        default:
            return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', icon: 'Info' };
    }
};

// Disclaimer text in all languages
export const disclaimerText = {
    en: {
        title: "Important Disclaimer",
        message: "VaidyaAI is an educational tool designed to help you understand your medical reports. It does NOT provide medical diagnosis, treatment advice, or prescriptions. Always consult a qualified healthcare professional for medical advice.",
        acknowledge: "I Understand"
    },
    hi: {
        title: "महत्वपूर्ण अस्वीकरण",
        message: "वैद्यAI एक शैक्षिक उपकरण है जो आपको अपनी मेडिकल रिपोर्ट समझने में मदद करता है। यह चिकित्सा निदान, उपचार सलाह या नुस्खे प्रदान नहीं करता। हमेशा चिकित्सा सलाह के लिए योग्य स्वास्थ्य पेशेवर से परामर्श करें।",
        acknowledge: "मैं समझता/समझती हूं"
    },
    mr: {
        title: "महत्त्वाचे अस्वीकरण",
        message: "वैद्यAI हे एक शैक्षणिक साधन आहे जे तुम्हाला तुमचे वैद्यकीय अहवाल समजून घेण्यास मदत करते। हे वैद्यकीय निदान, उपचार सल्ला किंवा औषधे देत नाही। वैद्यकीय सल्ल्यासाठी नेहमी पात्र आरोग्य व्यावसायिकांचा सल्ला घ्या।",
        acknowledge: "मला समजले"
    },
    ta: {
        title: "முக்கிய மறுப்பு",
        message: "வைத்யAI என்பது உங்கள் மருத்துவ அறிக்கைகளைப் புரிந்துகொள்ள உதவும் ஒரு கல்வி கருவி. இது மருத்துவ நோய்க்கண்டறிதல், சிகிச்சை ஆலோசனை அல்லது மருந்து பரிந்துரை வழங்காது. மருத்துவ ஆலோசனைக்கு எப்போதும் தகுதிவாய்ந்த சுகாதார நிபுணர்களை அணுகவும்.",
        acknowledge: "புரிந்துகொண்டேன்"
    },
    te: {
        title: "ముఖ్యమైన డిస్‌క్లైమర్",
        message: "వైద్యAI మీ వైద్య నివేదికలను అర్థం చేసుకోవడంలో సహాయపడే విద్యా సాధనం. ఇది వైద్య రోగ నిర్ధారణ, చికిత్స సలహా లేదా మందుల సిఫార్సు అందించదు. వైద్య సలహా కోసం ఎల్లప్పుడూ అర్హత కలిగిన ఆరోగ్య నిపుణులను సంప్రదించండి.",
        acknowledge: "అర్థమైంది"
    },
    bn: {
        title: "গুরুত্বপূর্ণ দাবিত্যাগ",
        message: "वैद्यAI একটি শিক্ষামূলক সরঞ্জাম যা আপনাকে আপনার চিকিৎসা রিপোর্ট বুঝতে সাহায্য করে। এটি চিকিৎসা রোগ নির্ণয়, চিকিৎসা পরামর্শ বা প্রেসক্রিপশন প্রদান করে না। চিকিৎসা পরামর্শের জন্য সর্বদা যোগ্য স্বাস্থ্যসেবা পেশাদারের পরামর্শ নিন।",
        acknowledge: "আমি বুঝেছি"
    },
    gu: {
        title: "મહત્વપૂર્ણ અસ્વીકરણ",
        message: "वैद्यAI એક શૈક્ષણિક સાધન છે જે તમને તમારા તબીબી અહેવાલો સમજવામાં મદદ કરે છે। તે તબીબી નિદાન, સારવાર સલાહ અથવા પ્રિસ્ક્રિપ્શન પ્રદાન કરતું નથી। તબીબી સલાહ માટે હંમેશા લાયક આરોગ્ય વ્યાવસાયિકની સલાહ લો.",
        acknowledge: "હું સમજું છું"
    },
    kn: {
        title: "ಮುಖ್ಯ ಹಕ್ಕು ನಿರಾಕರಣೆ",
        message: "वैद्यAI ನಿಮ್ಮ ವೈದ್ಯಕೀಯ ವರದಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುವ ಶೈಕ್ಷಣಿಕ ಸಾಧನವಾಗಿದೆ. ಇದು ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯ, ಚಿಕಿತ್ಸಾ ಸಲಹೆ ಅಥವಾ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ನೀಡುವುದಿಲ್ಲ. ವೈದ್ಯಕೀಯ ಸಲಹೆಗಾಗಿ ಯಾವಾಗಲೂ ಅರ್ಹ ಆರೋಗ್ಯ ವೃತ್ತಿಪರರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
        acknowledge: "ನನಗೆ ಅರ್ಥವಾಯಿತು"
    }
};

// Complete AI Output Translations (Summary, Findings, Remedies) for all languages
export const aiOutputTranslations = {
    en: {
        summary: "Your report shows mostly normal values with a few areas that need attention. Your blood count is healthy, but your cholesterol is slightly elevated and Vitamin D levels are low. These are common findings and can often be improved with lifestyle changes.",
        findings: {
            cholesterol_total: {
                label: "Total Cholesterol",
                explanation: "A waxy substance in your blood. Your body needs some cholesterol, but too much can build up in your arteries.",
                recommendation: "Consider reducing fried foods and adding more fiber to your diet."
            },
            vitaminD: {
                label: "Vitamin D",
                explanation: "A vitamin your body makes when exposed to sunlight. It helps your bones stay strong and supports your immune system.",
                recommendation: "Spend 15-20 minutes in morning sunlight daily. Your doctor may suggest supplements."
            },
            hemoglobin: {
                label: "Hemoglobin",
                explanation: "A protein in your red blood cells that carries oxygen throughout your body.",
                recommendation: "Your hemoglobin is healthy. Continue eating iron-rich foods."
            },
            glucose_fasting: {
                label: "Fasting Blood Sugar",
                explanation: "The amount of sugar in your blood after not eating for at least 8 hours.",
                recommendation: "Your blood sugar is normal. Maintain a balanced diet."
            },
            tsh: {
                label: "TSH (Thyroid)",
                explanation: "Controls how your thyroid gland works. Your thyroid affects your metabolism, energy, and body temperature.",
                recommendation: "Your thyroid function is normal."
            }
        },
        remedies: [
            {
                title: "Dietary Changes",
                icon: "Leaf",
                description: "Reduce saturated fats and fried foods. Include more fiber-rich foods like oats, beans, and vegetables. Add fatty fish (salmon, mackerel) to your diet twice weekly.",
                priority: "high"
            },
            {
                title: "Vitamin D Boost",
                icon: "Sun",
                description: "Spend 15-20 minutes in morning sunlight (before 10 AM) daily. Your doctor may recommend Vitamin D3 supplements (usually 1000-2000 IU daily).",
                priority: "high"
            },
            {
                title: "Regular Exercise",
                icon: "Activity",
                description: "30 minutes of brisk walking or light jogging 5 times a week can help improve cholesterol levels naturally.",
                priority: "medium"
            },
            {
                title: "Stay Hydrated",
                icon: "Droplet",
                description: "Drink at least 8 glasses of water daily. Proper hydration helps your body function optimally.",
                priority: "low"
            }
        ]
    },
    hi: {
        summary: "आपकी रिपोर्ट ज्यादातर सामान्य मान दिखाती है, लेकिन कुछ क्षेत्रों पर ध्यान देने की जरूरत है। आपकी रक्त गणना स्वस्थ है, लेकिन आपका कोलेस्ट्रॉल थोड़ा बढ़ा हुआ है और विटामिन डी का स्तर कम है। ये सामान्य निष्कर्ष हैं और अक्सर जीवनशैली में बदलाव से सुधार किया जा सकता है।",
        findings: {
            cholesterol_total: {
                label: "कुल कोलेस्ट्रॉल",
                explanation: "आपके रक्त में एक मोम जैसा पदार्थ। आपके शरीर को कुछ कोलेस्ट्रॉल की जरूरत है, लेकिन बहुत अधिक आपकी धमनियों में जमा हो सकता है।",
                recommendation: "तले हुए खाद्य पदार्थों को कम करें और अपने आहार में अधिक फाइबर शामिल करें।"
            },
            vitaminD: {
                label: "विटामिन डी",
                explanation: "एक विटामिन जो सूर्य के प्रकाश के संपर्क में आने पर आपका शरीर बनाता है। यह आपकी हड्डियों को मजबूत रखने में मदद करता है।",
                recommendation: "रोजाना सुबह 15-20 मिनट धूप में बिताएं। आपके डॉक्टर सप्लीमेंट्स की सलाह दे सकते हैं।"
            },
            hemoglobin: {
                label: "हीमोग्लोबिन",
                explanation: "आपकी लाल रक्त कोशिकाओं में एक प्रोटीन जो पूरे शरीर में ऑक्सीजन पहुंचाता है।",
                recommendation: "आपका हीमोग्लोबिन स्वस्थ है। आयरन युक्त खाद्य पदार्थ खाते रहें।"
            },
            glucose_fasting: {
                label: "खाली पेट रक्त शर्करा",
                explanation: "कम से कम 8 घंटे न खाने के बाद आपके रक्त में शुगर की मात्रा।",
                recommendation: "आपकी रक्त शर्करा सामान्य है। संतुलित आहार बनाए रखें।"
            },
            tsh: {
                label: "टीएसएच (थायराइड)",
                explanation: "यह नियंत्रित करता है कि आपकी थायराइड ग्रंथि कैसे काम करती है।",
                recommendation: "आपकी थायराइड क्रिया सामान्य है।"
            }
        },
        remedies: [
            {
                title: "आहार में बदलाव",
                icon: "Leaf",
                description: "संतृप्त वसा और तले हुए खाद्य पदार्थों को कम करें। ओट्स, बीन्स और सब्जियों जैसे फाइबर युक्त खाद्य पदार्थ शामिल करें। सप्ताह में दो बार फैटी मछली (सैल्मन, मैकेरल) खाएं।",
                priority: "high"
            },
            {
                title: "विटामिन डी बढ़ाएं",
                icon: "Sun",
                description: "रोजाना सुबह की धूप में (10 बजे से पहले) 15-20 मिनट बिताएं। आपके डॉक्टर विटामिन D3 सप्लीमेंट्स (आमतौर पर 1000-2000 IU दैनिक) की सिफारिश कर सकते हैं।",
                priority: "high"
            },
            {
                title: "नियमित व्यायाम",
                icon: "Activity",
                description: "सप्ताह में 5 बार 30 मिनट की तेज चाल या हल्की जॉगिंग कोलेस्ट्रॉल के स्तर को स्वाभाविक रूप से सुधारने में मदद कर सकती है।",
                priority: "medium"
            },
            {
                title: "हाइड्रेटेड रहें",
                icon: "Droplet",
                description: "रोजाना कम से कम 8 गिलास पानी पिएं। उचित हाइड्रेशन आपके शरीर को बेहतर तरीके से काम करने में मदद करता है।",
                priority: "low"
            }
        ]
    },
    mr: {
        summary: "तुमचा अहवाल बहुतांश सामान्य मूल्ये दर्शवतो, परंतु काही क्षेत्रांवर लक्ष देणे आवश्यक आहे। तुमची रक्त गणना निरोगी आहे, परंतु तुमचे कोलेस्ट्रॉल किंचित वाढलेले आहे आणि व्हिटॅमिन डी पातळी कमी आहे। हे सामान्य निष्कर्ष आहेत आणि सहसा जीवनशैलीतील बदलांनी सुधारता येतात.",
        findings: {
            cholesterol_total: {
                label: "एकूण कोलेस्ट्रॉल",
                explanation: "तुमच्या रक्तातील एक मेणासारखा पदार्थ। तुमच्या शरीराला काही कोलेस्ट्रॉल आवश्यक आहे, परंतु जास्त प्रमाणात धमन्यांमध्ये साचू शकते.",
                recommendation: "तळलेले पदार्थ कमी करा आणि आहारात अधिक फायबर समाविष्ट करा."
            },
            vitaminD: {
                label: "व्हिटॅमिन डी",
                explanation: "सूर्यप्रकाशाच्या संपर्कात आल्यावर तुमचे शरीर बनवते असे व्हिटॅमिन. हे तुमची हाडे मजबूत ठेवण्यास मदत करते.",
                recommendation: "दररोज सकाळी 15-20 मिनिटे उन्हात घालवा. तुमचे डॉक्टर सप्लिमेंट्स सुचवू शकतात."
            },
            hemoglobin: {
                label: "हिमोग्लोबिन",
                explanation: "तुमच्या लाल रक्तपेशींमधील एक प्रथिन जे संपूर्ण शरीरात ऑक्सिजन वाहून नेते.",
                recommendation: "तुमचे हिमोग्लोबिन निरोगी आहे. लोहयुक्त पदार्थ खाणे सुरू ठेवा."
            },
            glucose_fasting: {
                label: "उपाशी रक्त साखर",
                explanation: "किमान 8 तास न खाल्यानंतर तुमच्या रक्तातील साखरेचे प्रमाण.",
                recommendation: "तुमची रक्त साखर सामान्य आहे. संतुलित आहार ठेवा."
            },
            tsh: {
                label: "टीएसएच (थायरॉईड)",
                explanation: "तुमची थायरॉईड ग्रंथी कशी कार्य करते हे नियंत्रित करते.",
                recommendation: "तुमची थायरॉईड क्रिया सामान्य आहे."
            }
        },
        remedies: [
            {
                title: "आहारातील बदल",
                icon: "Leaf",
                description: "संतृप्त चरबी आणि तळलेले पदार्थ कमी करा. ओट्स, बीन्स आणि भाज्यांसारखे फायबरयुक्त पदार्थ समाविष्ट करा. आठवड्यातून दोनदा फॅटी मासे (सॅल्मन, मॅकेरल) खा.",
                priority: "high"
            },
            {
                title: "व्हिटॅमिन डी वाढवा",
                icon: "Sun",
                description: "दररोज सकाळी (10 वाजण्यापूर्वी) उन्हात 15-20 मिनिटे घालवा. तुमचे डॉक्टर व्हिटॅमिन D3 सप्लिमेंट्स (साधारणपणे दररोज 1000-2000 IU) शिफारस करू शकतात.",
                priority: "high"
            },
            {
                title: "नियमित व्यायाम",
                icon: "Activity",
                description: "आठवड्यातून 5 वेळा 30 मिनिटे वेगाने चालणे किंवा हलके जॉगिंग कोलेस्ट्रॉल पातळी नैसर्गिकरित्या सुधारण्यास मदत करू शकते.",
                priority: "medium"
            },
            {
                title: "हायड्रेटेड रहा",
                icon: "Droplet",
                description: "दररोज किमान 8 ग्लास पाणी प्या. योग्य हायड्रेशन तुमच्या शरीराला उत्तम प्रकारे कार्य करण्यास मदत करते.",
                priority: "low"
            }
        ]
    },
    ta: {
        summary: "உங்கள் அறிக்கை பெரும்பாலும் இயல்பான மதிப்புகளைக் காட்டுகிறது, ஆனால் சில பகுதிகளில் கவனம் தேவை. உங்கள் இரத்த எண்ணிக்கை ஆரோக்கியமானது, ஆனால் கொலஸ்ட்ரால் சற்று அதிகமாகவும், வைட்டமின் D அளவு குறைவாகவும் உள்ளது. இவை பொதுவான கண்டுபிடிப்புகள், வாழ்க்கை முறை மாற்றங்களால் மேம்படுத்தலாம்.",
        findings: {
            cholesterol_total: {
                label: "மொத்த கொலஸ்ட்ரால்",
                explanation: "உங்கள் இரத்தத்தில் உள்ள மெழுகு போன்ற பொருள். உங்கள் உடலுக்கு சில கொலஸ்ட்ரால் தேவை, ஆனால் அதிகமானால் தமனிகளில் படியும்.",
                recommendation: "வறுத்த உணவுகளைக் குறைத்து, உணவில் அதிக நார்ச்சத்து சேர்க்கவும்."
            },
            vitaminD: {
                label: "வைட்டமின் D",
                explanation: "சூரிய ஒளியில் வெளிப்படும்போது உங்கள் உடல் உருவாக்கும் வைட்டமின். இது உங்கள் எலும்புகளை வலுவாக வைக்க உதவுகிறது.",
                recommendation: "தினமும் காலை 15-20 நிமிடங்கள் சூரிய ஒளியில் செலவிடுங்கள். உங்கள் மருத்துவர் சப்ளிமெண்ட்ஸ் பரிந்துரைக்கலாம்."
            },
            hemoglobin: {
                label: "ஹீமோகுளோபின்",
                explanation: "உங்கள் சிவப்பு இரத்த அணுக்களில் உள்ள புரதம், இது உடல் முழுவதும் ஆக்ஸிஜனை எடுத்துச் செல்கிறது.",
                recommendation: "உங்கள் ஹீமோகுளோபின் ஆரோக்கியமானது. இரும்புச்சத்து நிறைந்த உணவுகளை தொடர்ந்து சாப்பிடுங்கள்."
            },
            glucose_fasting: {
                label: "வெறும் வயிற்றில் இரத்த சர்க்கரை",
                explanation: "குறைந்தது 8 மணி நேரம் சாப்பிடாமல் இருந்த பிறகு உங்கள் இரத்தத்தில் உள்ள சர்க்கரையின் அளவு.",
                recommendation: "உங்கள் இரத்த சர்க்கரை இயல்பானது. சமச்சீர் உணவை பராமரியுங்கள்."
            },
            tsh: {
                label: "TSH (தைராய்டு)",
                explanation: "உங்கள் தைராய்டு சுரப்பி எவ்வாறு செயல்படுகிறது என்பதை கட்டுப்படுத்துகிறது.",
                recommendation: "உங்கள் தைராய்டு செயல்பாடு இயல்பானது."
            }
        },
        remedies: [
            {
                title: "உணவு மாற்றங்கள்",
                icon: "Leaf",
                description: "நிறைவுற்ற கொழுப்புகள் மற்றும் வறுத்த உணவுகளைக் குறைக்கவும். ஓட்ஸ், பீன்ஸ் மற்றும் காய்கறிகள் போன்ற நார்ச்சத்து நிறைந்த உணவுகளைச் சேர்க்கவும். வாரத்தில் இரண்டு முறை கொழுப்பு நிறைந்த மீன் (சால்மன், மேக்கரல்) சேர்க்கவும்.",
                priority: "high"
            },
            {
                title: "வைட்டமின் D அதிகரிப்பு",
                icon: "Sun",
                description: "தினமும் காலை (10 மணிக்கு முன்) சூரிய ஒளியில் 15-20 நிமிடங்கள் செலவிடுங்கள். உங்கள் மருத்துவர் வைட்டமின் D3 சப்ளிமெண்ட்ஸ் (பொதுவாக தினசரி 1000-2000 IU) பரிந்துரைக்கலாம்.",
                priority: "high"
            },
            {
                title: "வழக்கமான உடற்பயிற்சி",
                icon: "Activity",
                description: "வாரத்தில் 5 முறை 30 நிமிடங்கள் வேகமாக நடைபயிற்சி அல்லது இலகுவான ஜாகிங் கொலஸ்ட்ரால் அளவுகளை இயற்கையாக மேம்படுத்த உதவும்.",
                priority: "medium"
            },
            {
                title: "நீரேற்றமாக இருங்கள்",
                icon: "Droplet",
                description: "தினமும் குறைந்தது 8 கிளாஸ் தண்ணீர் குடிக்கவும். சரியான நீரேற்றம் உங்கள் உடலை சிறப்பாக செயல்பட உதவுகிறது.",
                priority: "low"
            }
        ]
    },
    te: {
        summary: "మీ నివేదిక చాలా వరకు సాధారణ విలువలను చూపిస్తుంది, కానీ కొన్ని ప్రాంతాలలో శ్రద్ధ అవసరం. మీ రక్త లెక్క ఆరోగ్యకరం, కానీ మీ కొలెస్ట్రాల్ కొంచెం ఎక్కువగా ఉంది మరియు విటమిన్ D స్థాయిలు తక్కువగా ఉన్నాయి. ఇవి సాధారణ ఫలితాలు మరియు జీవనశైలి మార్పులతో మెరుగుపరచవచ్చు.",
        findings: {
            cholesterol_total: {
                label: "మొత్తం కొలెస్ట్రాల్",
                explanation: "మీ రక్తంలో మైనపు పదార్థం. మీ శరీరానికి కొంత కొలెస్ట్రాల్ అవసరం, కానీ ఎక్కువ ధమనులలో పేరుకుపోతుంది.",
                recommendation: "వేపుడు ఆహారాలు తగ్గించి, మీ ఆహారంలో ఎక్కువ ఫైబర్ చేర్చండి."
            },
            vitaminD: {
                label: "విటమిన్ D",
                explanation: "సూర్య కాంతికి గురైనప్పుడు మీ శరీరం తయారు చేసే విటమిన్. ఇది మీ ఎముకలను బలంగా ఉంచడంలో సహాయపడుతుంది.",
                recommendation: "రోజూ ఉదయం 15-20 నిమిషాలు సూర్యకాంతిలో గడపండి. మీ వైద్యుడు సప్లిమెంట్లు సూచించవచ్చు."
            },
            hemoglobin: {
                label: "హిమోగ్లోబిన్",
                explanation: "మీ ఎర్ర రక్త కణాలలో ప్రోటీన్ శరీరమంతటా ఆక్సిజన్ తీసుకువెళ్తుంది.",
                recommendation: "మీ హిమోగ్లోబిన్ ఆరోగ్యంగా ఉంది. ఇనుము అధికంగా ఉన్న ఆహారాలు తింటూ ఉండండి."
            },
            glucose_fasting: {
                label: "ఉపవాస రక్త చక్కెర",
                explanation: "కనీసం 8 గంటలు తినకుండా ఉన్న తర్వాత మీ రక్తంలో చక్కెర మొత్తం.",
                recommendation: "మీ రక్త చక్కెర సాధారణంగా ఉంది. సమతుల్య ఆహారాన్ని కొనసాగించండి."
            },
            tsh: {
                label: "TSH (థైరాయిడ్)",
                explanation: "మీ థైరాయిడ్ గ్రంథి ఎలా పనిచేస్తుందో నియంత్రిస్తుంది.",
                recommendation: "మీ థైరాయిడ్ పనితీరు సాధారణంగా ఉంది."
            }
        },
        remedies: [
            {
                title: "ఆహార మార్పులు",
                icon: "Leaf",
                description: "సంతృప్త కొవ్వులు మరియు వేపుడు ఆహారాలు తగ్గించండి. ఓట్స్, బీన్స్ మరియు కూరగాయల వంటి ఫైబర్ అధికంగా ఉన్న ఆహారాలు చేర్చండి. వారానికి రెండుసార్లు కొవ్వు చేపలు (సాల్మన్, మేకరెల్) చేర్చండి.",
                priority: "high"
            },
            {
                title: "విటమిన్ D పెంచండి",
                icon: "Sun",
                description: "రోజూ ఉదయం (10 గంటల ముందు) సూర్యకాంతిలో 15-20 నిమిషాలు గడపండి. మీ వైద్యుడు విటమిన్ D3 సప్లిమెంట్లు (సాధారణంగా రోజుకు 1000-2000 IU) సిఫార్సు చేయవచ్చు.",
                priority: "high"
            },
            {
                title: "క్రమం తప్పకుండా వ్యాయామం",
                icon: "Activity",
                description: "వారంలో 5 సార్లు 30 నిమిషాలు వేగంగా నడవడం లేదా తేలిక జాగింగ్ కొలెస్ట్రాల్ స్థాయిలను సహజంగా మెరుగుపరచడంలో సహాయపడుతుంది.",
                priority: "medium"
            },
            {
                title: "హైడ్రేటెడ్ గా ఉండండి",
                icon: "Droplet",
                description: "రోజూ కనీసం 8 గ్లాసుల నీరు తాగండి. సరైన హైడ్రేషన్ మీ శరీరం అనుకూలంగా పనిచేయడంలో సహాయపడుతుంది.",
                priority: "low"
            }
        ]
    },
    bn: {
        summary: "আপনার রিপোর্ট বেশিরভাগ স্বাভাবিক মান দেখায়, তবে কিছু ক্ষেত্রে মনোযোগ প্রয়োজন। আপনার রক্তের গণনা সুস্থ, কিন্তু আপনার কোলেস্টেরল কিছুটা বেশি এবং ভিটামিন D এর মাত্রা কম। এগুলি সাধারণ ফলাফল এবং প্রায়ই জীবনধারা পরিবর্তনের মাধ্যমে উন্নত করা যায়।",
        findings: {
            cholesterol_total: {
                label: "মোট কোলেস্টেরল",
                explanation: "আপনার রক্তে একটি মোমের মতো পদার্থ। আপনার শরীরের কিছু কোলেস্টেরল দরকার, কিন্তু অতিরিক্ত ধমনীতে জমা হতে পারে।",
                recommendation: "ভাজা খাবার কমান এবং আপনার খাদ্যে আরও ফাইবার যোগ করুন।"
            },
            vitaminD: {
                label: "ভিটামিন D",
                explanation: "সূর্যের আলোতে সংস্পর্শে এলে আপনার শরীর যে ভিটামিন তৈরি করে। এটি আপনার হাড় মজবুত রাখতে সাহায্য করে।",
                recommendation: "প্রতিদিন সকালে 15-20 মিনিট রোদে কাটান। আপনার ডাক্তার সাপ্লিমেন্ট সুপারিশ করতে পারেন।"
            },
            hemoglobin: {
                label: "হিমোগ্লোবিন",
                explanation: "আপনার লোহিত রক্তকণিকায় একটি প্রোটিন যা সারা শরীরে অক্সিজেন বহন করে।",
                recommendation: "আপনার হিমোগ্লোবিন সুস্থ। আয়রন সমৃদ্ধ খাবার খেতে থাকুন।"
            },
            glucose_fasting: {
                label: "খালি পেটে রক্তে শর্করা",
                explanation: "অন্তত 8 ঘণ্টা না খাওয়ার পর আপনার রক্তে শর্করার পরিমাণ।",
                recommendation: "আপনার রক্তে শর্করা স্বাভাবিক। সুষম খাদ্য বজায় রাখুন।"
            },
            tsh: {
                label: "TSH (থাইরয়েড)",
                explanation: "আপনার থাইরয়েড গ্রন্থি কীভাবে কাজ করে তা নিয়ন্ত্রণ করে।",
                recommendation: "আপনার থাইরয়েড কার্যকারিতা স্বাভাবিক।"
            }
        },
        remedies: [
            {
                title: "খাদ্যাভ্যাস পরিবর্তন",
                icon: "Leaf",
                description: "সম্পৃক্ত চর্বি এবং ভাজা খাবার কমান। ওটস, বিনস এবং শাকসবজির মতো ফাইবার সমৃদ্ধ খাবার অন্তর্ভুক্ত করুন। সপ্তাহে দুবার ফ্যাটি মাছ (স্যামন, ম্যাকেরেল) যোগ করুন।",
                priority: "high"
            },
            {
                title: "ভিটামিন D বৃদ্ধি",
                icon: "Sun",
                description: "প্রতিদিন সকালে (10টার আগে) রোদে 15-20 মিনিট কাটান। আপনার ডাক্তার ভিটামিন D3 সাপ্লিমেন্ট (সাধারণত দৈনিক 1000-2000 IU) সুপারিশ করতে পারেন।",
                priority: "high"
            },
            {
                title: "নিয়মিত ব্যায়াম",
                icon: "Activity",
                description: "সপ্তাহে 5 বার 30 মিনিট দ্রুত হাঁটা বা হালকা জগিং কোলেস্টেরলের মাত্রা স্বাভাবিকভাবে উন্নত করতে সাহায্য করতে পারে।",
                priority: "medium"
            },
            {
                title: "হাইড্রেটেড থাকুন",
                icon: "Droplet",
                description: "প্রতিদিন কমপক্ষে 8 গ্লাস পানি পান করুন। সঠিক হাইড্রেশন আপনার শরীরকে সর্বোত্তমভাবে কাজ করতে সাহায্য করে।",
                priority: "low"
            }
        ]
    },
    gu: {
        summary: "તમારો રિપોર્ટ મોટાભાગે સામાન્ય મૂલ્યો દર્શાવે છે, પરંતુ કેટલાક ક્ષેત્રોમાં ધ્યાન આપવાની જરૂર છે. તમારી રક્ત ગણતરી સ્વસ્થ છે, પરંતુ તમારું કોલેસ્ટ્રોલ થોડું વધારે છે અને વિટામિન D સ્તર ઓછું છે. આ સામાન્ય તારણો છે અને ઘણીવાર જીવનશૈલી ફેરફારો સાથે સુધારી શકાય છે.",
        findings: {
            cholesterol_total: {
                label: "કુલ કોલેસ્ટ્રોલ",
                explanation: "તમારા લોહીમાં મીણ જેવો પદાર્થ. તમારા શરીરને થોડા કોલેસ્ટ્રોલની જરૂર છે, પરંતુ વધુ પડતું ધમનીઓમાં જમા થઈ શકે છે.",
                recommendation: "તળેલા ખોરાક ઓછો કરો અને તમારા આહારમાં વધુ ફાઇબર ઉમેરો."
            },
            vitaminD: {
                label: "વિટામિન D",
                explanation: "સૂર્યપ્રકાશના સંપર્કમાં આવતા તમારું શરીર બનાવે છે તે વિટામિન. તે તમારા હાડકાંને મજબૂત રાખવામાં મદદ કરે છે.",
                recommendation: "દરરોજ સવારે 15-20 મિનિટ તડકામાં વિતાવો. તમારા ડૉક્ટર સપ્લિમેન્ટ્સ સૂચવી શકે છે."
            },
            hemoglobin: {
                label: "હિમોગ્લોબિન",
                explanation: "તમારા લાલ રક્તકણોમાં પ્રોટીન જે આખા શરીરમાં ઓક્સિજન વહન કરે છે.",
                recommendation: "તમારું હિમોગ્લોબિન સ્વસ્થ છે. આયર્ન ધરાવતા ખોરાક ખાતા રહો."
            },
            glucose_fasting: {
                label: "ખાલી પેટે બ્લડ શુગર",
                explanation: "ઓછામાં ઓછા 8 કલાક ન ખાધા પછી તમારા લોહીમાં ખાંડનું પ્રમાણ.",
                recommendation: "તમારી બ્લડ શુગર સામાન્ય છે. સંતુલિત આહાર જાળવો."
            },
            tsh: {
                label: "TSH (થાઇરોઇડ)",
                explanation: "તમારી થાઇરોઇડ ગ્રંથિ કેવી રીતે કામ કરે છે તે નિયંત્રિત કરે છે.",
                recommendation: "તમારી થાઇરોઇડ કાર્ય સામાન્ય છે."
            }
        },
        remedies: [
            {
                title: "આહાર ફેરફારો",
                icon: "Leaf",
                description: "સંતૃપ્ત ચરબી અને તળેલા ખોરાક ઓછા કરો. ઓટ્સ, બીન્સ અને શાકભાજી જેવા ફાઇબરથી ભરપૂર ખોરાક સામેલ કરો. અઠવાડિયામાં બે વાર ફેટી માછલી (સૅલ્મન, મેકરેલ) ઉમેરો.",
                priority: "high"
            },
            {
                title: "વિટામિન D વધારો",
                icon: "Sun",
                description: "દરરોજ સવારે (10 વાગ્યા પહેલા) તડકામાં 15-20 મિનિટ વિતાવો. તમારા ડૉક્ટર વિટામિન D3 સપ્લિમેન્ટ્સ (સામાન્ય રીતે દૈનિક 1000-2000 IU) ભલામણ કરી શકે છે.",
                priority: "high"
            },
            {
                title: "નિયમિત કસરત",
                icon: "Activity",
                description: "અઠવાડિયામાં 5 વખત 30 મિનિટ ઝડપી ચાલવું અથવા હળવી જોગિંગ કોલેસ્ટ્રોલ સ્તરને કુદરતી રીતે સુધારવામાં મદદ કરી શકે છે.",
                priority: "medium"
            },
            {
                title: "હાઇડ્રેટેડ રહો",
                icon: "Droplet",
                description: "દરરોજ ઓછામાં ઓછા 8 ગ્લાસ પાણી પીવો. યોગ્ય હાઇડ્રેશન તમારા શરીરને શ્રેષ્ઠ રીતે કામ કરવામાં મદદ કરે છે.",
                priority: "low"
            }
        ]
    },
    kn: {
        summary: "ನಿಮ್ಮ ವರದಿಯು ಹೆಚ್ಚಾಗಿ ಸಾಮಾನ್ಯ ಮೌಲ್ಯಗಳನ್ನು ತೋರಿಸುತ್ತದೆ, ಆದರೆ ಕೆಲವು ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಗಮನ ಬೇಕು. ನಿಮ್ಮ ರಕ್ತದ ಎಣಿಕೆ ಆರೋಗ್ಯಕರ, ಆದರೆ ನಿಮ್ಮ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಸ್ವಲ್ಪ ಹೆಚ್ಚಾಗಿದೆ ಮತ್ತು ವಿಟಮಿನ್ D ಮಟ್ಟಗಳು ಕಡಿಮೆ ಇವೆ. ಇವು ಸಾಮಾನ್ಯ ಫಲಿತಾಂಶಗಳು ಮತ್ತು ಜೀವನಶೈಲಿ ಬದಲಾವಣೆಗಳೊಂದಿಗೆ ಸುಧಾರಿಸಬಹುದು.",
        findings: {
            cholesterol_total: {
                label: "ಒಟ್ಟು ಕೊಲೆಸ್ಟ್ರಾಲ್",
                explanation: "ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿ ಮೇಣದಂತಹ ವಸ್ತು. ನಿಮ್ಮ ದೇಹಕ್ಕೆ ಸ್ವಲ್ಪ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಅಗತ್ಯ, ಆದರೆ ಹೆಚ್ಚಿನದು ಧಮನಿಗಳಲ್ಲಿ ಕಟ್ಟಬಹುದು.",
                recommendation: "ಕರಿದ ಆಹಾರಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಆಹಾರದಲ್ಲಿ ಹೆಚ್ಚಿನ ಫೈಬರ್ ಸೇರಿಸಿ."
            },
            vitaminD: {
                label: "ವಿಟಮಿನ್ D",
                explanation: "ಸೂರ್ಯನ ಬೆಳಕಿಗೆ ಒಡ್ಡಿಕೊಂಡಾಗ ನಿಮ್ಮ ದೇಹ ತಯಾರಿಸುವ ವಿಟಮಿನ್. ಇದು ನಿಮ್ಮ ಎಲುಬುಗಳನ್ನು ಬಲವಾಗಿಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
                recommendation: "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ 15-20 ನಿಮಿಷ ಸೂರ್ಯನ ಬೆಳಕಿನಲ್ಲಿ ಕಳೆಯಿರಿ. ನಿಮ್ಮ ವೈದ್ಯರು ಸಪ್ಲಿಮೆಂಟ್‌ಗಳನ್ನು ಸೂಚಿಸಬಹುದು."
            },
            hemoglobin: {
                label: "ಹಿಮೋಗ್ಲೋಬಿನ್",
                explanation: "ನಿಮ್ಮ ಕೆಂಪು ರಕ್ತ ಕಣಗಳಲ್ಲಿ ಪ್ರೋಟೀನ್ ಇಡೀ ದೇಹದಲ್ಲಿ ಆಮ್ಲಜನಕವನ್ನು ಸಾಗಿಸುತ್ತದೆ.",
                recommendation: "ನಿಮ್ಮ ಹಿಮೋಗ್ಲೋಬಿನ್ ಆರೋಗ್ಯಕರ. ಕಬ್ಬಿಣಾಂಶ ಭರಿತ ಆಹಾರಗಳನ್ನು ತಿನ್ನುತ್ತಿರಿ."
            },
            glucose_fasting: {
                label: "ಉಪವಾಸ ರಕ್ತ ಸಕ್ಕರೆ",
                explanation: "ಕನಿಷ್ಠ 8 ಗಂಟೆಗಳ ಕಾಲ ತಿನ್ನದೆ ಇದ್ದ ನಂತರ ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿ ಸಕ್ಕರೆಯ ಪ್ರಮಾಣ.",
                recommendation: "ನಿಮ್ಮ ರಕ್ತ ಸಕ್ಕರೆ ಸಾಮಾನ್ಯ. ಸಮತೋಲಿತ ಆಹಾರವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ."
            },
            tsh: {
                label: "TSH (ಥೈರಾಯ್ಡ್)",
                explanation: "ನಿಮ್ಮ ಥೈರಾಯ್ಡ್ ಗ್ರಂಥಿ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ.",
                recommendation: "ನಿಮ್ಮ ಥೈರಾಯ್ಡ್ ಕಾರ್ಯ ಸಾಮಾನ್ಯ."
            }
        },
        remedies: [
            {
                title: "ಆಹಾರ ಬದಲಾವಣೆಗಳು",
                icon: "Leaf",
                description: "ಸ್ಯಾಚುರೇಟೆಡ್ ಕೊಬ್ಬುಗಳು ಮತ್ತು ಕರಿದ ಆಹಾರಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಿ. ಓಟ್ಸ್, ಬೀನ್ಸ್ ಮತ್ತು ತರಕಾರಿಗಳಂತಹ ಫೈಬರ್ ಭರಿತ ಆಹಾರಗಳನ್ನು ಸೇರಿಸಿ. ವಾರಕ್ಕೆ ಎರಡು ಬಾರಿ ಕೊಬ್ಬಿನ ಮೀನು (ಸಾಲ್ಮನ್, ಮ್ಯಾಕೆರೆಲ್) ಸೇರಿಸಿ.",
                priority: "high"
            },
            {
                title: "ವಿಟಮಿನ್ D ಹೆಚ್ಚಿಸಿ",
                icon: "Sun",
                description: "ಪ್ರತಿದಿನ ಬೆಳಿಗ್ಗೆ (10 ಗಂಟೆಗೆ ಮುಂಚೆ) ಸೂರ್ಯನ ಬೆಳಕಿನಲ್ಲಿ 15-20 ನಿಮಿಷ ಕಳೆಯಿರಿ. ನಿಮ್ಮ ವೈದ್ಯರು ವಿಟಮಿನ್ D3 ಸಪ್ಲಿಮೆಂಟ್‌ಗಳನ್ನು (ಸಾಮಾನ್ಯವಾಗಿ ದಿನಕ್ಕೆ 1000-2000 IU) ಶಿಫಾರಸು ಮಾಡಬಹುದು.",
                priority: "high"
            },
            {
                title: "ನಿಯಮಿತ ವ್ಯಾಯಾಮ",
                icon: "Activity",
                description: "ವಾರದಲ್ಲಿ 5 ಬಾರಿ 30 ನಿಮಿಷ ವೇಗವಾಗಿ ನಡೆಯುವುದು ಅಥವಾ ಹಗುರ ಜಾಗಿಂಗ್ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಮಟ್ಟವನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
                priority: "medium"
            },
            {
                title: "ಹೈಡ್ರೇಟೆಡ್ ಆಗಿರಿ",
                icon: "Droplet",
                description: "ಪ್ರತಿದಿನ ಕನಿಷ್ಠ 8 ಲೋಟ ನೀರು ಕುಡಿಯಿರಿ. ಸರಿಯಾದ ಹೈಡ್ರೇಶನ್ ನಿಮ್ಮ ದೇಹವನ್ನು ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
                priority: "low"
            }
        ]
    }
};

// Function to get localized demo analysis
export const getLocalizedDemoAnalysis = (lang = 'en') => {
    const t = aiOutputTranslations[lang] || aiOutputTranslations.en;
    const termLabels = medicalTermTranslations[lang] || medicalTermTranslations.en;

    return {
        summary: t.summary,
        findings: [
            {
                key: "cholesterol_total",
                label: t.findings.cholesterol_total.label,
                value: 220,
                unit: "mg/dL",
                status: "elevated",
                normalRange: "< 200 mg/dL",
                explanation: t.findings.cholesterol_total.explanation,
                recommendation: t.findings.cholesterol_total.recommendation
            },
            {
                key: "vitaminD",
                label: t.findings.vitaminD.label,
                value: 18,
                unit: "ng/mL",
                status: "low",
                normalRange: "30-100 ng/mL",
                explanation: t.findings.vitaminD.explanation,
                recommendation: t.findings.vitaminD.recommendation
            },
            {
                key: "hemoglobin",
                label: t.findings.hemoglobin.label,
                value: 14.2,
                unit: "g/dL",
                status: "normal",
                normalRange: "13.5-17.5 g/dL",
                explanation: t.findings.hemoglobin.explanation,
                recommendation: t.findings.hemoglobin.recommendation
            },
            {
                key: "glucose_fasting",
                label: t.findings.glucose_fasting.label,
                value: 98,
                unit: "mg/dL",
                status: "normal",
                normalRange: "70-100 mg/dL",
                explanation: t.findings.glucose_fasting.explanation,
                recommendation: t.findings.glucose_fasting.recommendation
            },
            {
                key: "tsh",
                label: t.findings.tsh.label,
                value: 2.8,
                unit: "mIU/L",
                status: "normal",
                normalRange: "0.4-4.0 mIU/L",
                explanation: t.findings.tsh.explanation,
                recommendation: t.findings.tsh.recommendation
            }
        ],
        remedies: t.remedies
    };
};
