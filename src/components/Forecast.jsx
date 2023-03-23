import { useState } from 'react';
import { Badge, Card, Metric, Subtitle, Text } from '@tremor/react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

const Forecast = ({ isLoading, data }) => {
  const taf = data?.data?.data[0];
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(taf);
    setIsCopied(true);
  };

  return (
    <Card className="flex flex-col gap-2">
      <Subtitle>Raw</Subtitle>
      <Metric className="text-xl">{taf ?? '---'}</Metric>
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
