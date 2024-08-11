import { api } from "../services/api"

interface CreateMessageRequest {
  roomId: string
  message: string
}

export async function createMessage({ roomId, message }: CreateMessageRequest) {
  const response = await api.post(`/rooms/${roomId}/messages`, { message })

  const data: { id: string } = await response.data

  console.log("message data =>", data)

  return {
    MessageID: data.id
  }
}