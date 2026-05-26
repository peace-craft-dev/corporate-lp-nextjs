export default function Footer() {
  return (
    <footer className="bg-peace-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xl font-bold mb-2">AcmeCorp</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              AI で業務の煩雑さに平穏を。
              <br />
              中小企業のDX を支援します。
            </p>
          </div>
          <div>
            <p className="font-semibold mb-3">サービス</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>業務自動化</li>
              <li>AIチャットボット</li>
              <li>Webサイト・LP制作</li>
              <li>データ分析</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-3">お問い合わせ</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>info@example.com</li>
              <li>平日 9:00 - 19:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
          <p>
            &copy; 2026 AcmeCorp (PeaceCraft サンプル作品).
            Developed by{" "}
            <a
              href="#"
              className="text-accent-500 hover:underline"
              aria-label="PeaceCraft"
            >
              PeaceCraft
            </a>{" "}
            — AI-Native Development
          </p>
        </div>
      </div>
    </footer>
  );
}
