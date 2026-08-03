import React, { useEffect, useState, useRef } from 'react';

type OEmbed = {
  html: string;
  width?: number;
  height?: number;
  author_name?: string;
};

const TweetEmbed: React.FC<{ id: string } & any> = ({ id }) => {
  const [html, setHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let mounted = true;
    const url = encodeURIComponent(`https://x.com/0xChri2/status/${id}`);
    // request dark theme from Twitter oEmbed and omit script (we load it ourselves)
    const endpoint = `https://publish.twitter.com/oembed?url=${url}&omit_script=1&theme=dark`;

    fetch(endpoint)
      .then((res) => {
        if (!res.ok) throw new Error(`oEmbed request failed: ${res.status}`);
        return res.json();
      })
      .then((data: OEmbed) => {
        if (!mounted) return;
        setHtml(data.html);

        // Ensure Twitter widgets script is loaded so media (images) are rendered
        const win = window as any;
        const scriptSrc = 'https://platform.twitter.com/widgets.js';
        const existing = document.querySelector(`script[src="${scriptSrc}"]`);
        if (!existing) {
          const s = document.createElement('script');
          s.src = scriptSrc;
          s.async = true;
          s.onload = () => {
            try {
              if (win.twttr && win.twttr.widgets && containerRef.current) {
                win.twttr.widgets.load(containerRef.current);
              }
            } catch (e) {
              console.warn('twttr.load failed', e);
            }
          };
          document.body.appendChild(s);
        } else {
          try {
            if (win.twttr && win.twttr.widgets && containerRef.current) {
              win.twttr.widgets.load(containerRef.current);
            }
          } catch (e) {
            console.warn('twttr.load failed', e);
          }
        }
      })
      .catch((err) => {
        console.warn('Tweet oEmbed failed', err);
        if (mounted) setError('Tweet-Vorschau nicht verfügbar');
      });

    return () => {
      mounted = false;
    };
  }, [id]);

  if (error)
    return (
      <div className="text-center text-gray-300">
        {error}
        <div>
          <a href={`https://x.com/0xChri2/status/${id}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
            Tweet öffnen
          </a>
        </div>
      </div>
    );

  if (!html) return <div className="text-gray-400">Lade Tweet-Vorschau…</div>;

  return (
    <div ref={containerRef} className="tweet-embed-html text-white" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default TweetEmbed;
