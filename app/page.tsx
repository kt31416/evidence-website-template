'use client'

import { useState } from 'react'
import { config } from '@/content'
import { CardGrid } from '@/components/CardGrid'
import { CardDetail } from '@/components/CardDetail'

export default function Home() {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const card = activeCard ? config.cards.find((c) => c.id === activeCard) ?? null : null

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{config.title}</h1>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">{config.framing}</p>
        </header>

        {card ? (
          <CardDetail
            card={card}
            notebooklmUrl={config.notebooklmUrl}
            onBack={() => setActiveCard(null)}
          />
        ) : (
          <CardGrid
            cards={config.cards}
            notebooklmUrl={config.notebooklmUrl}
            onSelect={setActiveCard}
          />
        )}
      </div>
    </main>
  )
}
