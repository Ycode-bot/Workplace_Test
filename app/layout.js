import "./globals.css";

export const metadata = {
  title: "职场人格抽样测试",
  description: "随机5道职场吐槽题，测测你今天是哪种打工人格，生成可保存分享海报。",
  openGraph: {
    title: "职场人格抽样测试",
    description: "随机5道职场吐槽题，测测你今天是哪种打工人格，生成可保存分享海报。",
    type: "website",
    locale: "zh_CN"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
