import { useState } from 'react';
import { Card, Metric, Text } from '@tremor/react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { VALUE_PLACEHOLDER } from '../constants';

const Forecast = ({ isLoading, data }) => {
  const taf = data?.data?.data[0];
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(taf);
    setIsCopied(true);
  };

  return (
    <Card className="flex flex-col gap-2">
      <Text>Raw</Text>
      <Metric className="text-lg">{taf ?? VALUE_PLACEHOLDER}</Metric>
      <div className="mt-4 flex items-center gap-2">
        {!isLoading && (
          <button
            className="w-fit rounded-full bg-neutral-100 px-4 py-2"
            onClick={handleCopyToClipboard}
          >
            <ClipboardDocumentIcon className="h-6 w-6" />
          </button>
        )}
        {isCopied && <Text>Copied!</Text>}
      </div>
    </Card>
  );
};

export default Forecast;
