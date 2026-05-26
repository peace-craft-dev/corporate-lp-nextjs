const testimonials = [
  {
    name: "田中様",
    company: "個人事業主",
    comment:
      "業務自動化スクリプトを作ってもらい、月に約20時間の手作業が消えました。投資回収はすぐでした。",
  },
  {
    name: "佐藤様",
    company: "中小製造業",
    comment:
      "LINE Bot で顧客問い合わせの一次対応を自動化。クレームが減って嬉しい誤算でした。",
  },
  {
    name: "山田様",
    company: "EC事業",
    comment:
      "売上ダッシュボードで KPI が一目瞭然に。意思決定スピードが格段に上がりました。",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-peace-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-peace-900 mb-12 text-center">
          お客様の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                &ldquo;{t.comment}&rdquo;
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-peace-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
