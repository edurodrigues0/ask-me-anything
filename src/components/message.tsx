import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

interface MessageProps {
  text: string
  amountOfReactions: number
  answered?: boolean
}

export function Message({
  text,
  amountOfReactions,
  answered = false
}: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false)

  function handleReactToMessage() {
    setHasReacted(true)
  }

  console.log(hasReacted)

  return (
    <li data-answered={answered} className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
      { text }

      {
        hasReacted ? (
          <Button.Root
            type="button"
            variant="GHOST"
          >
            <Button.Icon icon={ArrowUp} />
            <Button.Label text={`Curtir pergunta ${(amountOfReactions)}`} />
          </Button.Root>
        ) : 
        (
          <Button.Root
            type="button"
            variant="GHOST"
            className="text-zinc-300 hover:text-zinc-400"
            onClick={() => handleReactToMessage()}
          >
            <Button.Icon icon={ArrowUp} />
            <Button.Label text={`Curtir pergunta ${(amountOfReactions)}`} />
          </Button.Root>
        )
      }
    </li>
  )
}