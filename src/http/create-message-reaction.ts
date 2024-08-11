import { api } from "../services/api"

interface CreateMessageReactionRequest {
  roomId: string
  messageId: string
}

export async function createMessageReaction({ roomId, messageId }: CreateMessageReactionRequest) {
  await api.patch(`/rooms/${roomId}/messages/${messageId}/react`)
}