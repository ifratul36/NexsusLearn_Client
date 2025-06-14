import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { UserTypes } from "@/components/user-types"
import { Analytics } from "@/components/analytics"
import { Security } from "@/components/security"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <UserTypes />
      <Analytics />
      <Security />
      <CTA />
    </main>
  )
}
