export interface WatchProps {
  [key: string]: any;
}

export interface WatchState {
  date: Date;
  intervalID?: NodeJS.Timeout;
}
