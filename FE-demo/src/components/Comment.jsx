import React, { useState } from 'react';

function Comment() {
  const [input, setInput] = useState('');
  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} />
      {/* Vulnerability: dangerouslySetInnerHTML is used with unsanitized input */}
      <div dangerouslySetInnerHTML={{ __html: input }} />
    </div>
  );
}

export default Comment;