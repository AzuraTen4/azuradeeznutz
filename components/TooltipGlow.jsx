export default function TooltipGlow({ text, children }) {
  return (
    <span className="tooltip-glow">
      {children}
      <span className="tooltip-glow-content">{text}</span>

      <style jsx>{`
        .tooltip-glow {
          position: relative;
          cursor: help;
          color: #c8e4ff;
          transition: 0.2s ease;
        }

        .tooltip-glow:hover {
          text-shadow: 0 0 6px #7cc7ff;
        }

        .tooltip-glow-content {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          background: rgba(20, 20, 35, 0.95);
          color: #e5f4ff;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 12px;
          bottom: 130%;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          transition: opacity 0.2s ease, visibility 0.2s ease,
            box-shadow 0.3s ease;
          box-shadow: 0 0 0px transparent;
          z-index: 20;
        }

        .tooltip-glow:hover .tooltip-glow-content {
          visibility: visible;
          opacity: 1;
          box-shadow: 0 0 12px #7cc7ff;
        }
      `}</style>
    </span>
  );
}
