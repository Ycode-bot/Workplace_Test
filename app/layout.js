import "./globals.css";

export const metadata = {
  title: "打工人精神状态测试",
  description: "5道题测测你今天是哪种打工人精神状态，生成可保存分享海报。",
  openGraph: {
    title: "打工人精神状态测试",
    description: "5道题测测你今天是哪种打工人精神状态，生成可保存分享海报。",
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
