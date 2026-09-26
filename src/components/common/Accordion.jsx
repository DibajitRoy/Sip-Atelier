import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null)

  return (
    <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              className="w-full flex items-center justify-between py-5 text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-ink">{item.question}</span>
              <ChevronDown
                size={18}
                className={`text-ink/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && <p className="text-sm text-ink/65 leading-relaxed pb-5 pr-8">{item.answer}</p>}
          </div>
        )
      })}
    </div>
  )
}