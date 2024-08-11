import { toast } from "sonner"
import { Share2 } from "lucide-react"

import amaLogo from "../assets/ama-logo.svg"
import { Button } from "../components/Button"
import { Messages } from "../components/messages"
import { Suspense } from "react"
import { CreateMessageForm } from "../components/create-message-form"
import { useParams } from "react-router-dom"

export function Room() {
  const { roomId } = useParams()

  function handleShareRoom() {
    const url = window.location.href.toString()

    if (navigator.share !== undefined && navigator.canShare()) {
      return navigator.share({ url })
    }

    navigator.clipboard.writeText(url)
    toast.info('O link foi copiada para área de transferência')
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Código da sala <span className="text-zinc-300 truncate">{roomId}</span>
        </span>

        <Button.Root
          variant="SECONDARY"
          className="ml-auto"
          type="submit"
          onClick={handleShareRoom}
        >
          <Button.Label text="Compartilhar" />
          <Button.Icon icon={Share2} />
        </Button.Root>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <CreateMessageForm />

      <Suspense fallback={<p>...Carregando</p>}>
        <Messages />
      </Suspense>
    </div>
  )
}
