
export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Message {
  id: string;
  text: string;
  user: User;
  timestamp: number;
  language?: string;
  explanation?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
}

export interface Room {
  code: string;
  messages: Message[];
  createdAt: number;
  typing?: { [userName: string]: number };
  users: { name: string; joinedAt: number; avatarUrl: string; }[];
  isPrivate?: boolean;
  password?: string;
  admin?: string;
  kickedUsers?: string[];
}

export type RoomEvent =
  | { event: 'updated'; room: Room }
  | { event: 'deleted' }
  | { event: 'new_message'; message: Message }
  | { event: 'message_updated'; messageId: string; details: { language?: string; explanation?: string } }
  | { event: 'typing'; userName: string; timestamp: number };

