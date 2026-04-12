'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, ArrowLeft, ExternalLink } from 'lucide-react'
import type { Card } from '@/content/types'

interface CardDetailProps {
  card: Card
  notebooklmUrl: string
  onBack: () => void
}

export function CardDetail({ card, notebooklmUrl, onBack }: CardDetailProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const isRealUrl = notebooklmUrl.startsWith('http')

  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        All topics
      </button>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-6 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h2>
          <p className="text-slate-600 leading-relaxed">{card.summary}</p>
        </div>

        <div className="divide-y divide-slate-100">
          {card.subcards.map((sub, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-800 pr-4">{sub.title}</span>
                {openIndex === i
                  ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                }
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-slate-600 leading-relaxed">{sub.body}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {isRealUrl && (
          <div className="px-6 py-5 border-t border-slate-100 bg-slate-50">
            <a
              href={notebooklmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Ask a question about the research
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
