'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, Plus } from 'lucide-react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

interface Language {
  name: string;
  code: string;
  percentage?: number | string;
  isSource?: boolean;
}

const availableLanguages: Language[] = [
  { name: 'English', code: 'GB' },
  { name: 'German', code: 'DE' },
  { name: 'Spanish', code: 'ES' },
  { name: 'French', code: 'FR' },
  { name: 'Hindi', code: 'IN' },
  { name: 'Italian', code: 'IT' },
  { name: 'Japanese', code: 'JP' },
  { name: 'Korean', code: 'KR' },
  { name: 'Dutch', code: 'NL' },
  { name: 'Portuguese (Brazil)', code: 'BR' },
  { name: 'Russian', code: 'RU' },
  { name: 'Turkish', code: 'TR' },
  { name: 'Chinese (Simplified)', code: 'CN' },
];

const LanguagesList: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([
    { name: 'English', percentage: 'Source', isSource: true, code: 'GB' },
    { name: 'German', percentage: 100, code: 'DE' },
    { name: 'Spanish', percentage: 100, code: 'ES' },
    { name: 'French', percentage: 100, code: 'FR' },
  ]);

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
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

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search languages"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      
      <ul className="space-y-2 mb-4">
        {filteredLanguages.map((lang, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-white rounded shadow">
            <span>
              {getUnicodeFlagIcon(lang.code)} {lang.name}
            </span>
            <span>{lang.isSource ? 'Source' : `${lang.percentage}%`}</span>
          </li>
        ))}
      </ul>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">
            <Plus className="mr-2" size={20} />
            New Language
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Language</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="language" className="text-right">
                Language
              </Label>
              <select
                id="language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="col-span-3 p-2 border rounded"
              >
                <option value="">Select a language</option>
                {remainingLanguages.map((lang) => (
                  <option key={lang.code} value={lang.name}>
                    {getUnicodeFlagIcon(lang.code)} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Button onClick={addNewLanguage}>Add Language</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LanguagesList;