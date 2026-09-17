export interface DisplaySection<T> {

  id: string;

  title: string;

  count: number;

  items: T[];

  emptyMessage?: string;

}

export interface DisplayModel<T> {

  sections: DisplaySection<T>[];

  totalVisible: number;

}