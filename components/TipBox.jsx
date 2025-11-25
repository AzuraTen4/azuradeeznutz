export default function TipBox({ children }) {
  return (
    <div className="tip-box">
      {children}

      <style jsx>{`
        .tip-box {
          background: #d8f5d0;
          border-left: 6px solid #46c56a;
          padding: 12px 16px;
          border-radius: 8px;
          margin: 16px 0;
          color: #1a3b1a;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
