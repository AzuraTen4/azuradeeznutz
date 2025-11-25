export default function TipBox({ title = "TIP", children }) {
  return (
    <div className="tipbox">
      <strong className="tipbox-title">{title}</strong>
      <div className="tipbox-body">{children}</div>

      <style jsx>{`
        .tipbox {
          border: 1px solid #22c55e80; /* hijau transparan */
          background: rgba(34, 197, 94, 0.05); /* super transparent */
          padding: 12px 14px;
          border-radius: 10px;
          margin: 12px 0;
          backdrop-filter: blur(4px);
          box-shadow: 0 0 10px #22c55e40;
        }

        .tipbox-title {
          color: #22c55e;
          font-weight: 700;
          font-size: 13px;
        }

        .tipbox-body {
          margin-top: 4px;
          font-size: 14px;
          color: #d1ffd9;
        }
      `}</style>
    </div>
  );
}
