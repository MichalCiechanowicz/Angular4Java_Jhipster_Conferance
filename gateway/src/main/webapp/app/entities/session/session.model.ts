import * as dayjs from 'dayjs';
import { ISpeaker } from 'app/entities/speaker/speaker.model';

export interface ISession {
  id?: number;
  title?: string;
  description?: string;
  startTime?: dayjs.Dayjs;
  endTime?: dayjs.Dayjs;
  speakers?: ISpeaker[] | null;
}

export class Session implements ISession {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public startTime?: dayjs.Dayjs,
    public endTime?: dayjs.Dayjs,
    public speakers?: ISpeaker[] | null
  ) {}
}

export function getSessionIdentifier(session: ISession): number | undefined {
  return session.id;
}
