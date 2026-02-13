
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GeneratePodcastProps } from "@/types";
import { Button } from "@heroui/button";
import { Textarea } from "@heroui/input";
import { Loader } from "lucide-react";
import { useState } from "react";
const useGeneratePodcast = ({
  setAudio,
  voicePrompt,
  voiceType,
  setAudioStorageId,
}: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  // logic for podcast generation
  const generatePodcast = async () => {
    setIsGenerating(true);

    setAudio("");

    if (!voicePrompt) {
      // toast message
      return setIsGenerating(false);
    }
    try {
      // const response = await getPodcastAudio({
      //   voice: voiceType,
      //   input: voicePrompt
      // })
    } catch (error) {
      console.log("Error generating podcast", error);
      // todo: show error message
      setIsGenerating(false);
    }
  };

  return {
    isGenerating,
    generatePodcast,
  };
};
const GeneratePodcast = (props: GeneratePodcastProps) => {
  const { isGenerating, generatePodcast } = useGeneratePodcast(props);
  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <label className="text-16 font-bold text-white-1">
          AI Prompt to generate podcast
        </label>
        <Textarea
          className="focus-visible:ring-orange-1"
          classNames={{
            base: ["input-class font-light "],
            input: ["text-14 font-light text-white-1 outline-none"],
            inputWrapper: [
              "ring-1 ring-transparent",
              "focus-within:ring-2",
              "focus-within:ring-orange-1",
              "transition-all duration-500",
              "p-2",
              "rounded-xl",
            ],
          }}
          placeholder="Provide text to generate audio"
          minRows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>

      <div className="mt-5 w-full max-w-50">
        <Button
          className="text-16 w-full bg-orange-1 py-4 font-bold text-white-1"
          type="submit">
          {isGenerating ? (
            <div className="flex items-center justify-center">
              Generating
              <Loader size={20} className="animate-spin ml-2" />
            </div>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      {props.audio && (
        <audio
          controls
          src={props.audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) =>
            props.setAudioDuration(e.currentTarget.duration)
          }
        />
      )}
    </div>
  );
};

export default GeneratePodcast;
