import amaLogo from "../assets/ama-logo.svg"

import { ArrowRight, Share2 } from "lucide-react"
import { toast } from "sonner"
import { Message } from "../components/message"
import { Button } from "../components/Button"

export function Room() {

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
          Código da sala <span className="text-zinc-300">sad12aw85q</span>
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

      <form
        className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-1 ring-offset-transparent focus-within:ring-1"
      >
        <input
          className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
          type="text"
          name="theme"
          placeholder="Qual a sua pergunta?"
          autoComplete="off"
        />

        <button
          className="bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500"
          type="submit"
        >
          Criar pergunta
          <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8">
        <Message text="Como funciona GoLang?" amountOfReactions={10} />
      </ol>
    </div>
  )
}
