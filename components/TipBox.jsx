export default function TipBox({ title = "TIP 💡", children }) {
  return (
    <div className="tipbox">
      <strong className="tipbox-title">{title}</strong>
      <div className="tipbox-body">{children}</div>

      <style jsx>{`
        .tipbox {
          padding: 12px 14px;
          border-radius: 10px;
          margin: 12px 0;
          backdrop-filter: blur(6px);
          border: 1px solid;
        }

        /* DARK MODE */
        :global(html.dark) .tipbox {
          background: rgba(34, 197, 94, 0.05);
          border-color: rgba(34, 197, 94, 0.4);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.25);
        }

        :global(html.dark) .tipbox-title {
          color: #22c55e;
        }

        :global(html.dark) .tipbox-body {
          color: #d1ffd9;
        }

        /* LIGHT MODE */
        :global(html:not(.dark)) .tipbox {
          background: rgba(34, 197, 94, 0.08);
          border-color: rgba(34, 197, 94, 0.6);
          box-shadow: none;
        }

        :global(html:not(.dark)) .tipbox-title {
          color: #166534;
        }

        :global(html:not(.dark)) .tipbox-body {
          color: #14532d;
        }
      `}</style>
    </div>
  )
}
