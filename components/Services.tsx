const services = [
  {
    title: "業務自動化",
    description: "Excel/Sheets、Notion、API連携で日々の繰り返し作業を自動化。",
    icon: "⚙️",
  },
  {
    title: "AIチャットボット",
    description: "LINE Bot や Webチャットで顧客対応・FAQ・予約受付を効率化。",
    icon: "🤖",
  },
  {
    title: "Webサイト・LP制作",
    description: "Next.js + AI ツールで短納期・高品質な Web 制作。",
    icon: "🌐",
  },
  {
    title: "データ分析・ダッシュボード",
    description: "売上・KPI を Streamlit や BIツールで見える化。",
    icon: "📊",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-peace-900 mb-4 text-center">
          サービス内容
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          中小企業・個人事業主の課題に合わせて、AI を組み込んだ実用システムを提供します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl border border-gray-200 hover:border-peace-500 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-peace-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
