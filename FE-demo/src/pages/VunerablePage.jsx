import React from 'react';

function VulnerableComponent({ userInput }) {
  return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
}

export default VulnerableComponent;