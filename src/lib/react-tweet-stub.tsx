import React from 'react';

// Mark this module as a local stub so the app can detect it and use a safer fallback.
export const __isStub = true;
export const Tweet: React.FC<{ id?: string } & any> = ({ id }) => {
  return (
    <div className="text-gray-300">
      Tweet-Embed (lokaler Stub) —{' '}
      <a href={`https://x.com/0xChri2/status/${id}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
        Öffnen
      </a>
    </div>
  );
};

export default { Tweet, __isStub };
