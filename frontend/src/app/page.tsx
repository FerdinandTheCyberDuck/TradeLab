import ApiTest from '@/components/ApiTest'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to TradeLab</h1>
      <p className="mt-4 text-xl">Your Visual Trading Strategy Platform</p>
      <ApiTest />
    </main>
  )
}
