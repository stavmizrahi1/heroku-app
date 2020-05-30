export interface Message {
    senderId: number;
    receiverId: number;
    sendername: string;
    receivername: string;
    body: string;
    isRead: boolean;
    createdAt: Date;
  }
  