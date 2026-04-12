'use client'

import { AlertTriangle, Layers, BookOpen, Sliders, CheckCircle, ExternalLink } from 'lucide-react'
import type { Card, SiteConfig } from '@/content/types'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Layers,
  BookOpen,
  Sliders,
  CheckCircle,
}

interface CardGridProps {
  cards: Card[]
  notebooklmUrl: string
  onSelect: (id: string) => void
}

export function CardGrid({ cards, notebooklmUrl, onSelect }: CardGridProps) {
  const isRealUrl = notebooklmUrl.startsWith('http')

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {cards.map((card) => {
          const Icon = ICONS[card.icon] ?? Layers
          return (
            <button
              key={card.id}
              onClick={() => onSelect(card.id)}
              className="text-left bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-150 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="text-base font-semibold text-slate-900 leading-snug pt-1">
                  {card.title}
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {card.summary}
              </p>
              <p className="text-xs text-blue-600 mt-3 font-medium group-hover:text-blue-700">
                {card.subcards.length} topics →
              </p>
            </button>
          )
        })}
      </div>

      {isRealUrl && (
        <div className="flex justify-center">
          <a
            href={notebooklmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Ask a question about the research
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  )
}
