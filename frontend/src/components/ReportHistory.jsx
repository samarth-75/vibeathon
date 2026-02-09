import React, { useState, useEffect } from 'react';
import { History, FileText, Trash2, Eye, Clock, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HISTORY_KEY = 'vaidyaai_report_history';

// Translations for the history component
const translations = {
    en: {
        title: "Report History",
        noHistory: "No analysis history yet",
        noHistoryDesc: "Your analyzed reports will appear here",
        viewDetails: "View Details",
        delete: "Delete",
        clearAll: "Clear All",
        analyzedOn: "Analyzed on",
        files: "files",
        findings: "findings",
        close: "Close"
    },
    hi: {
        title: "रिपोर्ट इतिहास",
        noHistory: "अभी तक कोई विश्लेषण इतिहास नहीं",
        noHistoryDesc: "आपकी विश्लेषित रिपोर्ट यहां दिखाई देंगी",
        viewDetails: "विवरण देखें",
        delete: "हटाएं",
        clearAll: "सब हटाएं",
        analyzedOn: "विश्लेषित",
        files: "फ़ाइलें",
        findings: "निष्कर्ष",
        close: "बंद करें"
    },
    mr: {
        title: "अहवाल इतिहास",
        noHistory: "अद्याप विश्लेषण इतिहास नाही",
        noHistoryDesc: "तुमचे विश्लेषण केलेले अहवाल येथे दिसतील",
        viewDetails: "तपशील पहा",
        delete: "हटवा",
        clearAll: "सर्व हटवा",
        analyzedOn: "विश्लेषित",
        files: "फाइल्स",
        findings: "निष्कर्ष",
        close: "बंद करा"
    },
    ta: {
        title: "அறிக்கை வரலாறு",
        noHistory: "இன்னும் பகுப்பாய்வு வரலாறு இல்லை",
        noHistoryDesc: "உங்கள் பகுப்பாய்வு செய்யப்பட்ட அறிக்கைகள் இங்கே தோன்றும்",
        viewDetails: "விவரங்களைக் காண்க",
        delete: "நீக்கு",
        clearAll: "அனைத்தையும் அழி",
        analyzedOn: "பகுப்பாய்வு செய்யப்பட்டது",
        files: "கோப்புகள்",
        findings: "கண்டுபிடிப்புகள்",
        close: "மூடு"
    },
    te: {
        title: "నివేదిక చరిత్ర",
        noHistory: "ఇంకా విశ్లేషణ చరిత్ర లేదు",
        noHistoryDesc: "మీ విశ్లేషించిన నివేదికలు ఇక్కడ కనిపిస్తాయి",
        viewDetails: "వివరాలు చూడండి",
        delete: "తొలగించు",
        clearAll: "అన్నీ తొలగించు",
        analyzedOn: "విశ్లేషించబడింది",
        files: "ఫైల్‌లు",
        findings: "కనుగొన్నవి",
        close: "మూసివేయి"
    },
    bn: {
        title: "রিপোর্টের ইতিহাস",
        noHistory: "এখনও বিশ্লেষণের ইতিহাস নেই",
        noHistoryDesc: "আপনার বিশ্লেষিত রিপোর্টগুলি এখানে দেখা যাবে",
        viewDetails: "বিস্তারিত দেখুন",
        delete: "মুছুন",
        clearAll: "সব মুছুন",
        analyzedOn: "বিশ্লেষিত",
        files: "ফাইল",
        findings: "ফলাফল",
        close: "বন্ধ করুন"
    },
    gu: {
        title: "અહેવાલ ઇતિહાસ",
        noHistory: "હજુ સુધી વિશ્લેષણ ઇતિહાસ નથી",
        noHistoryDesc: "તમારા વિશ્લેષિત અહેવાલો અહીં દેખાશે",
        viewDetails: "વિગતો જુઓ",
        delete: "કાઢી નાખો",
        clearAll: "બધું સાફ કરો",
        analyzedOn: "વિશ્લેષિત",
        files: "ફાઇલો",
        findings: "તારણો",
        close: "બંધ કરો"
    },
    kn: {
        title: "ವರದಿ ಇತಿಹಾಸ",
        noHistory: "ಇನ್ನೂ ವಿಶ್ಲೇಷಣೆ ಇತಿಹಾಸ ಇಲ್ಲ",
        noHistoryDesc: "ನಿಮ್ಮ ವಿಶ್ಲೇಷಿಸಿದ ವರದಿಗಳು ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ",
        viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
        delete: "ಅಳಿಸಿ",
        clearAll: "ಎಲ್ಲವನ್ನೂ ತೆರವುಗೊಳಿಸಿ",
        analyzedOn: "ವಿಶ್ಲೇಷಿಸಲಾಗಿದೆ",
        files: "ಫೈಲ್‌ಗಳು",
        findings: "ಸಂಶೋಧನೆಗಳು",
        close: "ಮುಚ್ಚಿ"
    }
};

// Helper functions for localStorage
const getHistory = () => {
    try {
        const history = localStorage.getItem(HISTORY_KEY);
        return history ? JSON.parse(history) : [];
    } catch {
        return [];
    }
};

const saveHistory = (history) => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

// Function to add a new analysis to history (export for use in Main.jsx)
export const addToHistory = (analysis) => {
    const history = getHistory();
    const newEntry = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        fileNames: analysis.fileNames || ['Medical Report'],
        findingsCount: analysis.findings?.length || 0,
        summary: analysis.summary || '',
        findings: analysis.findings || [],
        remedies: analysis.remedies || []
    };
    history.unshift(newEntry); // Add to beginning
    // Keep only last 10 entries
    if (history.length > 10) {
        history.pop();
    }
    saveHistory(history);
    return newEntry;
};

const ReportHistory = ({ onSelectReport }) => {
    const { currentLang } = useLanguage();
    const [history, setHistory] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    const t = translations[currentLang] || translations.en;

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    const handleDelete = (id) => {
        const updatedHistory = history.filter(item => item.id !== id);
        saveHistory(updatedHistory);
        setHistory(updatedHistory);
    };

    const handleClearAll = () => {
        saveHistory([]);
        setHistory([]);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'hi-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleViewDetails = (report) => {
        setSelectedReport(report);
        if (onSelectReport) {
            onSelectReport(report);
        }
    };

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3" style={{ fontFamily: 'Crimson Text, serif' }}>
                        <History className="w-7 h-7" />
                        {t.title}
                    </h2>
                    {history.length > 0 && (
                        <button
                            onClick={handleClearAll}
                            className="text-white/80 hover:text-white text-sm flex items-center gap-1 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            {t.clearAll}
                        </button>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[400px] overflow-y-auto">
                {history.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                        <Clock className="w-12 h-12 mx-auto mb-3 opacity-30" />
                        <p className="font-medium">{t.noHistory}</p>
                        <p className="text-sm mt-1">{t.noHistoryDesc}</p>
                    </div>
                ) : (
                    <div className="space-y-3">
                        {history.map(item => (
                            <div
                                key={item.id}
                                className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 hover:shadow-md transition-all group"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <FileText className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                            <span className="font-semibold text-gray-800 truncate">
                                                {item.fileNames.join(', ')}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <span>{t.analyzedOn} {formatDate(item.date)}</span>
                                            <span>•</span>
                                            <span>{item.findingsCount} {t.findings}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleViewDetails(item)}
                                            className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                                            title={t.viewDetails}
                                        >
                                            <Eye className="w-4 h-4 text-blue-600" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="p-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                            title={t.delete}
                                        >
                                            <Trash2 className="w-4 h-4 text-red-500" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Detail Modal */}
            {selectedReport && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">
                                {selectedReport.fileNames.join(', ')}
                            </h3>
                            <button
                                onClick={() => setSelectedReport(null)}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <p className="text-sm text-gray-500 mb-4">
                                {t.analyzedOn} {formatDate(selectedReport.date)}
                            </p>

                            {selectedReport.summary && (
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                                    <p className="text-gray-700">{selectedReport.summary}</p>
                                </div>
                            )}

                            {selectedReport.findings && selectedReport.findings.length > 0 && (
                                <div className="space-y-2">
                                    {selectedReport.findings.map((finding, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <span className="font-medium text-gray-800">{finding.label}</span>
                                            <span className="text-gray-600">{finding.value} {finding.unit}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReportHistory;
