export interface ToolbarProps {

  search: string;

  onSearch: (value: string) => void;

  onReset: () => void;

  onAdd: () => void;

}