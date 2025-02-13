export interface InputDropDownProps {
  searchTitle?: string;
  list: string[];
  contentPlaceholder?: string;
  defaultValue?: string;
  onSelected?: (selected: string) => void; //  Định nghĩa kiểu prop
  onChangeValue?: (value: string) => void;
}

export interface InputProps {
  type: string;
  defaultValue?: string;
  valueIn: string;
  placeholder?: string;
  onChange?: (valueChange: string) => void;
  onFocus?: (focused: boolean) => void;
}

export interface CustomLinkProps {
  to?: string;
  href?: string;
  title?: string;
  children?: React.ReactNode;
}
