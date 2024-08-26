import LanguageList from '@/components/LanguagesList';

export default function Home() {
  return (
    <main className='min-h-screen p-24'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Languages</h1>
      <LanguageList />
    </main>
  )
}