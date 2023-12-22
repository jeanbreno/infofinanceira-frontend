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
        {
          "autosize": true,
          "symbol": "BMFBOVESPA:IBOV",
          "interval": "1",
          "timezone": "America/Sao_Paulo",
          "theme": "dark",
          "style": "1",
          "locale": "br",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "watchlist": [
            "FX_IDC:BRLEUR",
            "FX_IDC:BRLUSD",
            "BINANCE:BTCBRL",
            "BMFBOVESPA:IBOV"
          ],
          "details": true,
          "hotlist": true,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 50px)", width: "10%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://br.tradingview.com/" rel='nofollow noopener noreferrer' target="_blank"><span className="blue-text">Monitore todos os mercados no TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
