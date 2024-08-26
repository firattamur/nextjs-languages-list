import LanguageList from '@/components/LanguagesList';

export default function Home() {
  const initialLanguages = [
    { name: 'English', percentage: 'Source', isSource: true, code: 'GB' },
    { name: 'German', percentage: 100, code: 'DE' },
    { name: 'Spanish', percentage: 100, code: 'ES' },
  ];

  const availableLanguages = [
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

  return (
    <main className='container px-4 py-8'>
      <LanguageList initialLanguages={initialLanguages} availableLanguages={availableLanguages} />
    </main>
  )
}