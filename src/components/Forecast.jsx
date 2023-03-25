import { useState } from 'react';
import { Card, Metric, Text } from '@tremor/react';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { VALUE_PLACEHOLDER } from '../constants';

const Forecast = ({ isLoading, forecast }) => {
  const TAF = forecast?.raw_text;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(TAF);
    setIsCopied(true);
  };

  return (
    <Card className="mb-10 flex flex-col gap-2">
      <Text>Raw</Text>
      <Metric className="text-md md:text-lg">{TAF ?? VALUE_PLACEHOLDER}</Metric>
      <div className="mt-4 flex items-center gap-2">
        {!isLoading && (
          <button
            className="w-fit rounded-full bg-neutral-100 px-4 py-2 hover:bg-neutral-200"
            onClick={handleCopyToClipboard}
          >
            <HiOutlineClipboardCopy className="h-6 w-6" />
          </button>
        )}
        {isCopied && <Text>Copied!</Text>}
      </div>
    </Card>
  );
};

export default Forecast;
