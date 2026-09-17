export interface TimelineSection<T> {

  id: string;

  title: string;

  count: number;

  items: T[];

  emptyMessage?: string;

}

export interface TimelineModel<T> {

  sections: TimelineSection<T>[];

}