'use client'

import { useState, useEffect, useRef } from 'react'
import { Brain, Zap, Target, TrendingUp, Users, Shield } from 'lucide-react'

const advantages = [
  {
    icon: Brain,
    title: "ИИ-интеллект",
    description: "Продвинутые алгоритмы машинного обучения, которые понимают поведение клиентов и предоставляют персонализированный опыт для каждого посетителя.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Молниеносная скорость",
    description: "Оптимизированы для скорости с гарантией 99.9% доступности. Ваши клиенты получают мгновенные ответы и бесшовные взаимодействия.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Точное таргетирование",
    description: "Умная система рекомендаций, которая увеличивает конверсию до 40% благодаря интеллектуальным предложениям товаров.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Аналитика роста продаж",
    description: "Аналитика в реальном времени и подробная статистика помогают понять, что движет продажами и оптимизировать стратегию.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Поддержка 24/7",
    description: "ИИ-ассистент обрабатывает запросы клиентов круглосуточно, сокращая время ответа и повышая удовлетворенность.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Корпоративная безопасность",
    description: "Безопасность банковского уровня с SSL шифрованием, соответствие GDPR и продвинутая защита от мошенничества для вашего спокойствия.",
    color: "from-red-500 to-rose-500"
  }
]

export default function Advantages() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          if (entry.isIntersecting) {
            setVisibleItems(prev => (prev.includes(index) ? prev : [...prev, index]))
          }
        })
      },
      { threshold: 0.3 }
    )

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="advantages-section" id="advantages">
      <div className="advantages-container">
        <div className="advantages-header">
          <h2 className="advantages-title">
            Почему выбирают <span className="gradient-text">JARVIS</span>
          </h2>
          <p className="advantages-subtitle">
            Мощные ИИ-решения, которые трансформируют ваш интернет-бизнес
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el }}
                data-index={index}
                className={`advantage-card ${visibleItems.includes(index) ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`advantage-icon bg-gradient-to-br ${advantage.color}`}>
                  <Icon className="icon" />
                </div>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-description">{advantage.description}</p>
                <div className="advantage-glow"></div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
