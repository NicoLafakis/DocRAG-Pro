import React, { useState, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

// Define the structure for the analysis results
interface AnalysisResult {
  summary: string;
  entities: {
    type: string;
    value: string;
  }[];
  chunks: string[];
  tags: string[];
}

// Initial placeholder text for the demo
const placeholderText = `DocRAG Pro transforms unstructured documents into optimized RAG datasets. Core features include Universal Document Processing for formats like PDF and Word, advanced OCR, and Structured Data Recognition. Its Intelligent Content Analysis offers Semantic Segmentation, Entity Recognition for terms, and Relationship Mapping. The RAG-Optimized Output provides Smart Chunking, Hierarchical Structure, Metadata Enrichment, and Vector-Ready embeddings. It's built for enterprises needing high-quality, searchable knowledge bases.`;

const InteractiveDemo: React.FC = () => {
  const [inputText, setInputText] = useState<string>(placeholderText);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'text' | 'file'>('text');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to analyze.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const responseSchema = {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: "A concise, one-sentence summary of the text." },
          entities: {
            type: Type.ARRAY,
            description: "Key entities found in the text.",
            items: {
              type: Type.OBJECT,
              properties: {
                type: { type: Type.STRING, description: "The category of the entity (e.g., 'Technology', 'Feature', 'Concept')." },
                value: { type: Type.STRING, description: "The name of the entity." }
              },
            },
          },
          chunks: {
            type: Type.ARRAY,
            description: "The text segmented into meaningful, context-aware chunks suitable for RAG.",
            items: { type: Type.STRING }
          },
          tags: {
            type: Type.ARRAY,
            description: "A list of relevant keywords or topic tags.",
            items: { type: Type.STRING }
          },
        },
      };

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: inputText,
        config: {
          systemInstruction: "You are DocRAG Pro, an intelligent document analysis engine. Analyze the following text and break it down into a structured JSON format based on the provided schema. Your task is to identify key entities, segment the text into meaningful semantic chunks for Retrieval-Augmented Generation (RAG), provide a concise summary, and suggest relevant topic tags.",
          responseMimeType: "application/json",
          responseSchema: responseSchema,
        },
      });

      const resultJson = JSON.parse(response.text);
      setAnalysisResult(resultJson);

    } catch (e) {
      console.error(e);
      setError("An error occurred while analyzing the document. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFileChange = useCallback((file: File | null) => {
    if (file) {
      if (file.type !== 'text/plain') {
        setError('For this demo, please upload a plain text (.txt) file.');
        return;
      }
      setError(null);
      setUploadedFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setInputText(text);
        setActiveTab('text'); // Switch to text tab to show content
      };
      reader.onerror = () => {
        setError('Failed to read the file.');
        setUploadedFileName(null);
      };
      reader.readAsText(file);
    }
  }, []);

  const clearFile = () => {
    setUploadedFileName(null);
    setInputText(placeholderText);
  };

  const handleDragEvents = (e: React.DragEvent<HTMLDivElement>, dragging: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(dragging);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    handleDragEvents(e, false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const ResultDisplay: React.FC<{ result: AnalysisResult }> = ({ result }) => (
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
      <div className="bg-slate-900 p-6 rounded-lg">
        <h4 className="font-bold text-lg text-brand-secondary mb-3">Summary</h4>
        <p className="text-text-secondary">{result.summary}</p>
      </div>
       <div className="bg-slate-900 p-6 rounded-lg">
        <h4 className="font-bold text-lg text-brand-secondary mb-3">Extracted Entities</h4>
        <div className="flex flex-wrap gap-2">
          {result.entities.map((entity, i) => (
            <span key={i} className="bg-slate-700 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">{entity.value} <span className="text-slate-400">({entity.type})</span></span>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 bg-slate-900 p-6 rounded-lg">
         <h4 className="font-bold text-lg text-brand-secondary mb-3">Smart Chunks</h4>
         <div className="space-y-4">
            {result.chunks.map((chunk, i) => (
              <div key={i} className="bg-base-dark p-4 rounded text-text-secondary border border-slate-700">
                <p><strong>Chunk {i+1}:</strong> {chunk}</p>
              </div>
            ))}
         </div>
      </div>
       <div className="lg:col-span-2 bg-slate-900 p-6 rounded-lg">
        <h4 className="font-bold text-lg text-brand-secondary mb-3">Suggested Tags</h4>
        <div className="flex flex-wrap gap-2">
          {result.tags.map((tag, i) => (
            <span key={i} className="bg-slate-700 text-text-secondary text-sm px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="demo" className="py-20 bg-base-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary">See DocRAG Pro in Action</h2>
        <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
          Paste text or upload a document to see how our AI engine analyzes, chunks, and enriches your content.
        </p>

        <div className="mt-8 max-w-4xl mx-auto">
          <div className="flex border-b border-slate-700">
            <button onClick={() => setActiveTab('text')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeTab === 'text' ? 'text-brand-secondary border-b-2 border-brand-secondary' : 'text-text-secondary hover:text-text-primary'}`}>Paste Text</button>
            <button onClick={() => setActiveTab('file')} className={`py-2 px-4 font-semibold transition-colors duration-200 ${activeTab === 'file' ? 'text-brand-secondary border-b-2 border-brand-secondary' : 'text-text-secondary hover:text-text-primary'}`}>Upload Document</button>
          </div>

          <div className="bg-base-light rounded-b-lg p-4 pt-6">
            {activeTab === 'text' && (
              <div>
                {uploadedFileName && (
                  <div className="flex justify-between items-center bg-slate-800 p-2 rounded-md mb-3 text-sm">
                    <span className="text-text-secondary">Loaded from: <strong className="font-medium text-text-primary">{uploadedFileName}</strong></span>
                    <button onClick={clearFile} className="font-semibold text-slate-400 hover:text-white transition-colors duration-200">Clear</button>
                  </div>
                )}
                <textarea
                  className="w-full h-48 p-4 bg-slate-800 border border-slate-700 rounded-lg text-text-secondary focus:ring-2 focus:ring-brand-secondary focus:outline-none transition"
                  placeholder="Enter your document text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  aria-label="Text input for analysis"
                />
              </div>
            )}
            {activeTab === 'file' && (
              <div
                onDragEnter={(e) => handleDragEvents(e, true)}
                onDragLeave={(e) => handleDragEvents(e, false)}
                onDragOver={(e) => handleDragEvents(e, true)}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors duration-300 ${isDragging ? 'border-brand-primary bg-brand-dark/20' : 'border-slate-600 hover:border-slate-500'}`}
              >
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                  accept=".txt"
                  aria-label="File upload input"
                />
                <div className="flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                  <p className="mt-4 text-text-secondary">
                    {isDragging ? 'Drop the file here' : <><strong>Click to upload</strong> or drag and drop</>}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">Plain Text (.txt only)</p>
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={handleAnalyze}
            disabled={isLoading}
            className="mt-6 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Analyzing...' : 'Analyze & Structure'}
          </button>
        </div>
        
        {isLoading && (
            <div className="mt-8 flex justify-center items-center space-x-3">
                <svg className="animate-spin h-8 w-8 text-brand-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-text-secondary text-lg">Running intelligent analysis...</span>
            </div>
        )}
        
        {error && (
            <div className="mt-8 bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg max-w-2xl mx-auto">
                <p>{error}</p>
            </div>
        )}

        {analysisResult && <ResultDisplay result={analysisResult} />}

      </div>
    </section>
  );
};

export default InteractiveDemo;
