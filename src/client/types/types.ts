export interface IData {
  id?: number;
  ads?: [];
  number?: number;
  text_size?: string;
  text?: string;
  coursive?: boolean;
  italic?: boolean;
  bold?: boolean;
  speed?: number;
  branch?: number;
}
export type Ticketinfo = {
  cabinet: number;
  created_at: string;
  floor: number;
  id: number;
  status: string;
  ticket_number: string;
  window_number: number;
};

export interface ITicketIntefrace {
  action: string;
  ticket_data: Ticketinfo[];
}

export interface IWaitingList {
  cabinets: number[];
  created_at: string;
  id: number;
  ticket_number: string;
}

export interface IBranch {
  admin: number;
  city: string;
  id: number;
  name: string;
  phone: string;
  region: number;
  schedule_end: string;
  schedule_start: string;
  street: string;
}
