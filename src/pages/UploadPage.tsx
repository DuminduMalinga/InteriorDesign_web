import { useState, useRef } from 'react';
import { Upload, X, AlertCircle, CheckCircle, File, Image, FileText } from 'lucide-react';

const ACCEPTED_FORMATS = ['image/png', 'image/jpeg', 'application/pdf'];
const ACCEPTED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.pdf'];
const MAX_FILE_SIZE = 10 * 1024 * 1024;

interface ValidationError {
  message: string;
  type: 'format' | 'size';
}

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<ValidationError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (selectedFile: File): ValidationError | null => {
    const extension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();

    if (!ACCEPTED_EXTENSIONS.includes(extension)) {
      return {
        message: 'Invalid file format. Please upload PNG, JPG, or PDF files only.',
        type: 'format'
      };
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      return {
        message: `File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit. Please choose a smaller file.`,
        type: 'size'
      };
    }

    return null;
  };

  const generatePreview = (selectedFile: File) => {
    if (selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    } else if (selectedFile.type === 'application/pdf') {
      setPreview(null);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    setError(null);
    const validationError = validateFile(selectedFile);

    if (validationError) {
      setError(validationError);
      setFile(null);
      setPreview(null);
      return;
    }

    setFile(selectedFile);
    generatePreview(selectedFile);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFileSelect(droppedFiles[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleNext = async () => {
    if (!file) return;

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Processing file:', file.name);
    } finally {
      setIsLoading(false);
    }
  };

  const getFileIcon = () => {
    if (!file) return null;

    if (file.type.startsWith('image/')) {
      return <Image className="w-6 h-6 text-blue-600" />;
    } else if (file.type === 'application/pdf') {
      return <FileText className="w-6 h-6 text-red-600" />;
    }
    return <File className="w-6 h-6 text-gray-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Upload Your Floor Plan
          </h1>
          <p className="text-xl text-gray-600">
            Drag and drop your floor plan or click to browse. Supports PNG, JPG, and PDF formats.
          </p>
        </div>

        <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
          {!file ? (
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-xl p-12 text-center transition-all duration-200 cursor-pointer hover:bg-blue-50"
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <Upload className="w-10 h-10 text-blue-600" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Drag and drop your floor plan
                </h2>
                <p className="text-gray-600 mb-6">
                  or click to select a file from your computer
                </p>

                <div className="flex gap-3 justify-center mb-4 flex-wrap">
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    PNG
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    JPG
                  </span>
                  <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    PDF
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Maximum file size: 10MB
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept={ACCEPTED_EXTENSIONS.join(',')}
                onChange={handleInputChange}
                className="hidden"
                aria-label="Upload floor plan"
              />
            </div>
          ) : (
            <div className="space-y-6">
              {preview ? (
                <div className="relative bg-gray-100 rounded-xl overflow-hidden max-h-96">
                  <img
                    src={preview}
                    alt="Floor plan preview"
                    className="w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-xl p-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-gray-600 text-lg">PDF Preview</p>
                  <p className="text-gray-500 text-sm mt-1">
                    PDF preview will be available during processing
                  </p>
                </div>
              )}

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getFileIcon()}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {file.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={handleRemoveFile}
                    disabled={isLoading}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
                    aria-label="Remove file"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700">{error.message}</p>
            </div>
          )}
        </div>

        {file && !error && (
          <div className="mt-8 flex gap-4 justify-center sm:justify-end">
            <button
              onClick={handleRemoveFile}
              disabled={isLoading}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all disabled:opacity-50"
            >
              Choose Another File
            </button>
            <button
              onClick={handleNext}
              disabled={isLoading}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all disabled:opacity-50 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Next
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
