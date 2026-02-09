import React, { useState, useEffect } from 'react';
import { AlertTriangle, X, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { disclaimerText } from '../data/medicalData';

const DisclaimerBanner = () => {
    const { currentLang } = useLanguage();
    const [showModal, setShowModal] = useState(false);
    const [showBanner, setShowBanner] = useState(true);

    const t = disclaimerText[currentLang] || disclaimerText.en;

    // Check if user has already acknowledged the disclaimer
    useEffect(() => {
        const hasAcknowledged = localStorage.getItem('vaidyaai_disclaimer_acknowledged');
        if (!hasAcknowledged) {
            setShowModal(true);
        }
    }, []);

    const handleAcknowledge = () => {
        localStorage.setItem('vaidyaai_disclaimer_acknowledged', 'true');
        setShowModal(false);
    };

    const handleCloseBanner = () => {
        setShowBanner(false);
    };

    return (
        <>
            {/* Modal Disclaimer (First Time) */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-fadeIn">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">{t.title}</h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {t.message}
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                                <ul className="space-y-2 text-sm text-amber-800">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                        {currentLang === 'en' ? 'This is NOT a medical diagnosis' : 'यह चिकित्सा निदान नहीं है'}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                        {currentLang === 'en' ? 'Always consult your doctor' : 'हमेशा अपने डॉक्टर से परामर्श करें'}
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                        {currentLang === 'en' ? 'Educational purposes only' : 'केवल शैक्षिक उद्देश्यों के लिए'}
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={handleAcknowledge}
                                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-xl font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                {t.acknowledge}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Persistent Bottom Banner */}
            {showBanner && !showModal && (
                <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 z-50 shadow-lg">
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-sm font-medium">
                                {currentLang === 'en'
                                    ? 'This is an educational tool. Always consult a healthcare professional for medical advice.'
                                    : 'यह एक शैक्षिक उपकरण है। चिकित्सा सलाह के लिए हमेशा स्वास्थ्य पेशेवर से परामर्श करें।'
                                }
                            </p>
                        </div>
                        <button
                            onClick={handleCloseBanner}
                            className="p-1 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                            aria-label="Close banner"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </>
    );
};

export default DisclaimerBanner;
