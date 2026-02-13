"use client";
import GeneratePodcast from "@/components/GeneratePodcast";
import GenerateThumbnail from "@/components/GenerateThumbnail";
import { Id } from "@/convex/_generated/dataModel";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Select, SelectItem, SelectSection } from "@heroui/select";
import { Loader } from "lucide-react";
import { useState } from "react";

const CreatePodcast = () => {
  // Image States
  const [imagePrompt, setImagePrompt] = useState("");
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(
    null,
  );
  const [imageUrl, setImageUrl] = useState("");

  // Audio States
  const [audioUrl, setAudioUrl] = useState("");
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(
    null,
  );
  const [audioDuration, setAudioDuration] = useState(0);

  // Voice States
  const [voiceType, setVoiceType] = useState<string | null>(null);
  const [voicePrompt, setVoicePrompt] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const voices = [
    { key: "voice1", label: "Alloy" },
    { key: "voice2", label: "Shimmer" },
    { key: "voice3", label: "Nova" },
    { key: "voice4", label: "Echo" },
    { key: "voice5", label: "Fable" },
    { key: "voice6", label: "Onyx" },
  ];
  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-20 font-bold text-white">Create Podcast</h1>

      <Form className="mt-12 flex w-full flex-col">
        <div className="flex flex-col gap-7.5 border-b border-black-5 pb-10">
          <div className="flex flex-col gap-2.5">
            <div>
              <label className="text-16 font-bold text-white-1">
                Podcast Title
              </label>
              <Input
                type="text"
                classNames={{
                  base: "mt-2",
                  input: ["input-class", "outline-none", "p-2", "text-white-1"],
                  inputWrapper: [
                    "border-none",
                    "ring-1 ring-black-5",
                    "focus-within:ring-2",
                    "focus-within:ring-orange-1",
                    "transition-all duration-300",
                    "rounded-md",
                    "overflow-visible",
                    "bg-black-1",
                  ],
                }}
                placeholder="Demo Podcast"
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <label
                className="text-16 font-bold text-white-1
              ">
                Select AI Voice
              </label>
              <Select
                items={voices}
                classNames={{
                  base: "w-full rounded-xl",
                  trigger: [
                    "relative",
                    "bg-black-1",
                    "border-none",
                    "ring-1 ring-black-5", // idle border
                    "focus:ring-2",
                    "focus:ring-orange-1", // focus ring
                    "transition-all duration-300",
                    "min-h-[44px]",
                    "flex items-center",
                    "px-3",
                    "rounded-xl",
                    "overflow-visible",
                  ],
                  value: "text-left text-white-1 w-full",
                  selectorIcon: [
                    "absolute",
                    "right-3",
                    "text-white-1",
                    "pointer-events-none",
                  ],
                  popoverContent: [
                    "bg-black-1",
                    "border border-black-5",
                    "rounded-xl",
                  ],
                }}>
                <SelectSection>
                  {voices.map((item) => (
                    <SelectItem
                      key={item.key}
                      textValue={item.label}
                      className={[
                        "capitalize",
                        "text-white-1",
                        "p-2",
                        "rounded-lg",
                        "focus:bg-orange-1",
                        "data-[hover=true]:bg-orange-1",
                      ].join(" ")}>
                      {item.label.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectSection>
              </Select>

              {voiceType && (
                <audio
                  key={voiceType} // important: forces replay on change
                  src={`/${voiceType}.mp3`}
                  autoPlay
                  className="hidden"
                />
              )}
            </div>

            <div>
              <label className="text-16 font-bold text-white-1">
                Podcast Description
              </label>
              <Textarea
                classNames={{
                  base: "mt-2",
                  input: [
                    "input-class",
                    "outline-none",
                    "text-white-1",
                    "resize-none",
                  ],
                  inputWrapper: [
                    "border-none", // remove default border
                    "ring-1 ring-black-5", // idle state
                    "focus-within:ring-2",
                    "focus-within:ring-orange-1",
                    "transition-all duration-300",
                    "rounded-xl",
                    "p-3",
                    "overflow-visible", // prevents clipping
                    "bg-black-1",
                  ],
                }}
                placeholder="Podcast Description"
                minRows={3}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-10">
          <GeneratePodcast
            setAudio={setAudioUrl}
            setAudioDuration={setAudioDuration}
            setAudioStorageId={setAudioStorageId}
            voiceType={voiceType}
            audio={audioUrl}
            voicePrompt={voicePrompt}
            setVoicePrompt={setVoicePrompt}
          />
          <GenerateThumbnail />

          <div className="mt-10 w-full">
            <Button
              className="text-16 w-full bg-orange-1 p-2 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1 rounded-md
            "
              type="submit">
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  Submitting
                  <Loader size={20} className="animate-spin ml-2" />
                </div>
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default CreatePodcast;
