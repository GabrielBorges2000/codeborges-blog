import Script from "next/script";

type GoogleAdsenseProps = {
  publicId: string;
};

export function GoogleAdsense({ publicId }:GoogleAdsenseProps) {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${publicId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};
