export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-peace-50 via-white to-peace-50 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-peace-900 mb-6 leading-tight">
          AI で、業務の煩雑さに
          <br />
          <span className="text-accent-500">平穏</span>を。
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          AI エージェントと人間エンジニアの協働開発体制で、業務自動化・AIチャットボット・データ分析を高速・高品質に提供します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-peace-500 hover:bg-peace-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            無料相談を申し込む
          </a>
          <a
            href="#services"
            className="border-2 border-peace-500 text-peace-500 hover:bg-peace-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            サービスを見る
          </a>
        </div>
      </div>
    </section>
  );
}
