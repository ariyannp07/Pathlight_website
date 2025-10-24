import { Hero } from '@/components/Hero'
import { Vision } from '@/components/Vision'
import { Backers } from '@/components/Backers'
import { Demo } from '@/components/Demo'
import { Technology } from '@/components/Technology'
import { Product } from '@/components/Product'
import { UseCases } from '@/components/UseCases'
import { Metrics } from '@/components/Metrics'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Vision />
      <Backers />
      <Demo />
      <Technology />
      <Product />
      <UseCases />
      <Metrics />
      <CallToAction />
    </main>
  )
}
