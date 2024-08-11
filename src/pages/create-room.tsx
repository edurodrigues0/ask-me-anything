import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import amaLogo from "../assets/ama-logo.svg";
import { Button } from "../components/Button";
import { createRoom } from "../http/create-room";

export function CreateRoom() {
  const navigation = useNavigate()
  
  async function handleCreateRoom(data: FormData) {
    const theme = data.get('theme')?.toString()

    if (!theme) {
      return
    }

    try {
      const { roomId } = await createRoom({ theme })

      console.log(roomId)

      navigation(`/room/${roomId}`)
    } catch {
      toast.error("Falha ao criar a sala")
    }
  }

  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img className="h-10" src={amaLogo} alt="AMA" />

        <p className="leading-relaxed text-zinc-300 text-center">
          Crie uma sala pública de AMA (Ask me anything) e priorize as perguntas mais importantes para a comunidade.
        </p>

        <form
          className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-1 ring-offset-transparent focus-within:ring-1"
          action={handleCreateRoom}
        >
          <input
            className="flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500"
            type="text"
            name="theme"
            placeholder="Nome da sala"
            autoComplete="off"
            required
          />

          <Button.Root type="submit">
            <Button.Label text="Criar a sala" />
            <Button.Icon icon={ArrowRight} />
          </Button.Root>
        </form>
      </div>
    </main>
  );
}
