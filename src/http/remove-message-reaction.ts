import { api } from "../services/api"

interface RemoveMessageReactionRequest {
  roomId: string
  messageId: string
}

export async function removeMessageReaction({ roomId, messageId }: RemoveMessageReactionRequest) {
  await api.delete(`/rooms/${roomId}/messages/${messageId}/react`)
}