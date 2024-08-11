import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";
import { useParams } from "react-router-dom";
import { createMessageReaction } from "../http/create-message-reaction";
import { toast } from "sonner";
import { removeMessageReaction } from "../http/remove-message-reaction";

interface MessageProps {
  messageId: string
  text: string
  amountOfReactions: number
  answered?: boolean
}

export function Message({
  messageId,
  text,
  amountOfReactions,
  answered = false
}: MessageProps) {
  const { roomId } = useParams()
  const [hasReacted, setHasReacted] = useState(false)

  if (!roomId) {
    throw new Error("Messages components must be used within room page")
  }

  async function removeMessageReactionAction() {
    if (!roomId) {
      return
    }

    setHasReacted(false)

    try {
      await removeMessageReaction({ roomId, messageId })
    } catch {
      toast.error("Falha ao curtir mensagem, tente novamente!")
    }
  }

  async function createMessageReactionAction() {
    if (!roomId) {
      return
    }

    setHasReacted(true)

    try {
      await createMessageReaction({ roomId, messageId })
    } catch {
      toast.error("Falha ao remover curtida, tente novamente!")
    }
  }

  return (
    <li data-answered={answered} className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
      { text }

      {
        hasReacted ? (
          <Button.Root
            type="button"
            variant="GHOST"
            onClick={removeMessageReactionAction}
          >
            <Button.Icon icon={ArrowUp} />
            <Button.Label text={`Curtir pergunta (${amountOfReactions})`} />
          </Button.Root>
        ) : 
        (
          <Button.Root
            type="button"
            variant="GHOST"
            onClick={createMessageReactionAction}
            className="text-zinc-300 hover:text-zinc-400"
          >
            <Button.Icon icon={ArrowUp} />
            <Button.Label text={`Curtir pergunta (${amountOfReactions})`} />
          </Button.Root>
        )
      }
    </li>
  )
}