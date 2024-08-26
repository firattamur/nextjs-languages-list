import React from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";


interface LanguageItemProps {
    language: {
        name: string;
        code: string;
        percentage?: number | string;
        isSource?: boolean;
    };
    isSelected: boolean;
    isHighlighted: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClick: () => void;
}

const LanguageItem: React.FC<LanguageItemProps> = ({
    language,
    isSelected,
    isHighlighted,
    onMouseEnter,
    onMouseLeave,
    onClick,
}) => {
    return (
        <li
        className={`flex justify-between items-center p-2 rounded transition-colors duration-200 ease-in-out cursor-pointer
            ${isHighlighted ? 'bg-blue-100' : 'hover:bg-gray-100'}
            ${isSelected ? 'bg-blue-200' : ''}
        `}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        >
        <span className='flex items-center font-semibold font-sans text-sm'>
            {getUnicodeFlagIcon(language.code)} {language.name}
        </span>
        <span className='font-medium font-sans text-sm text-gray-500'>
            {language.isSource ? 'Source' : `${language.percentage}%`}
        </span>
        </li>
    );
};

export default LanguageItem;