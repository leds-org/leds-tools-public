// src/components/BpmnViewer.js
import React, { useEffect, useRef } from 'react';
import BpmnJS from 'bpmn-js';

const BpmnViewer = ({ diagramUrl }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const bpmnViewer = new BpmnJS({
      container: viewerRef.current,
    });

    fetch(diagramUrl)
      .then(response => response.text())
      .then(xml => bpmnViewer.importXML(xml))
      .then(() => {
        // Ajusta a escala para que o diagrama caiba na tela
        const canvas = bpmnViewer.get('canvas');
        canvas.zoom('fit-viewport');
      })
      .catch(error => console.error('Error loading BPMN diagram:', error));

    return () => {
      bpmnViewer.destroy();
    };
  }, [diagramUrl]);

  return <div ref={viewerRef} style={{ width: '100%', height: '600px' }} />;
};

export default BpmnViewer;
