import { api } from "../services/api"

interface GetRoomMessagesRequest {
  roomId: string
}

interface Data {
  ID: string
  RoomID: string
  Message: string
  ReactionCount: number
  Answered: boolean
}

export interface GetRoomMessagesResponse {
  messages: {
    id: string
    text: string
    amountOfReactions: number
    answered: boolean
  }[]
}

export async function getRoomMessages({
  roomId
}: GetRoomMessagesRequest): Promise<GetRoomMessagesResponse> {
  const response = await api.get(`/rooms/${roomId}/messages`)

  const data: Array<Data> = await response.data

  return {
    messages: data.map(item => {
      return {
        id: item.ID,
        text: item.Message,
        amountOfReactions: item.ReactionCount,
        answered: item.Answered,
      }
    })
  }
}