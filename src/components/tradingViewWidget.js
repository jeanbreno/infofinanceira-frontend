// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        { "width": "980",
          "height": "610",
          "autosize": true,
          "symbol": "BMFBOVESPA:WIN1!",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "br",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 50px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://br.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Monitore todos os mercados no TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
