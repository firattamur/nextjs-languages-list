import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus } from 'lucide-react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

interface LanguageSelectorProps {
  availableLanguages: Array<{ name: string; code: string }>;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  addNewLanguage: () => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  availableLanguages, selectedLanguage, setSelectedLanguage, addNewLanguage, isDialogOpen, setIsDialogOpen
}) => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className='bg-white text-black-500 hover:text-gray-700 hover:bg-gray-100'>
            <Plus className="mr-1" size={20} />
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
                {availableLanguages.map((lang) => (
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
      {selectedLanguage && (
        <span className="text-sm text-gray-600">{selectedLanguage}</span>
      )}
    </div>
  );
};

export default LanguageSelector;
