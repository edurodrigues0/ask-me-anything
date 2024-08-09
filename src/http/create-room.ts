import { api } from "../services/api"

interface CreateRoomRequest {
  theme: string
}

export async function createRoom({ theme }: CreateRoomRequest) {
  const response = await api.post("/rooms", { theme })

  const data: { id: string } = await response.data

  return {
    roomId: data.id
  }
}