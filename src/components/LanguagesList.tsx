"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import LanguageItem from '@/components/LanguageItem';
import LanguageSelector from '@/components/LanguageSelector';
import { Search } from 'lucide-react';

interface Language {
  name: string;
  code: string;
  percentage?: number | string;
  isSource?: boolean;
}

interface LanguagesListProps {
  initialLanguages: Language[];
  availableLanguages: Language[];
}

const LanguagesList: React.FC<LanguagesListProps> = ({ initialLanguages, availableLanguages }) => {
  const [languages, setLanguages] = useState<Language[]>(initialLanguages);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [highlightedLanguage, setHighlightedLanguage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const remainingLanguages = availableLanguages.filter(
    lang => !languages.some(l => l.name === lang.name)
  );

  const addNewLanguage = () => {
    if (selectedLanguage) {
      const newLang = availableLanguages.find(lang => lang.name === selectedLanguage);
      if (newLang) {
        setLanguages([...languages, { ...newLang, percentage: 0 }]);
        setSelectedLanguage('');
        setIsDialogOpen(false);
      }
    }
  };

  const selectLanguage = (lang: Language) => {
    setSelectedLanguage(lang.name === selectedLanguage ? '' : lang.name);
  };

  return (
    <div className="p-4 max-w-sm mx-auto relative h-full bg-white rounded-lg shadow-md flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-gray-500">Languages</h2>
        <div className="relative flex-grow ml-4 max-w-md">
          <Input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border-transparent rounded-xl bg-gray-0 focus-visible:ring-gray-100"
          />
          <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>

      <div className="h-96 overflow-y-auto custom-scrollbar">
        <ul className="space-y-1">
          {filteredLanguages.map((lang, index) => (
            <LanguageItem
              key={index}
              language={lang}
              isSelected={selectedLanguage === lang.name}
              isHighlighted={highlightedLanguage === lang.name}
              onMouseEnter={() => setHighlightedLanguage(lang.name)}
              onMouseLeave={() => setHighlightedLanguage(null)}
              onClick={() => selectLanguage(lang)}
            />
          ))}
        </ul>
      </div>

      <LanguageSelector
        availableLanguages={remainingLanguages}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        addNewLanguage={addNewLanguage}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
};

export default LanguagesList;
