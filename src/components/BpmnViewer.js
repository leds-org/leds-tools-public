// src/components/BpmnViewer.js
import React, { useEffect, useRef, useState } from 'react';
import BpmnJS from 'bpmn-js';

const BpmnViewer = ({ diagramUrl }) => {
  const viewerRef = useRef(null);
  const [height, setHeight] = useState('800px');

  useEffect(() => {
    const bpmnViewer = new BpmnJS({
      container: viewerRef.current,
    });

    fetch(diagramUrl)
      .then(response => response.text())
      .then(xml => bpmnViewer.importXML(xml))
      .then(() => {
        const canvas = bpmnViewer.get('canvas');
        canvas.zoom('fit-viewport');

        const viewbox = canvas.viewbox();
        const calculatedHeight = viewbox.height;
        setHeight(`${calculatedHeight}px`);
      })
      .catch(error => console.error('Error loading BPMN diagram:', error));

    return () => {
      bpmnViewer.destroy();
    };
  }, [diagramUrl]);

  return <div ref={viewerRef} style={{ width: '100%', height }} />;
};

export default BpmnViewer;
