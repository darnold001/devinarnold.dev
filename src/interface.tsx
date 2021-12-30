export type RouterProps = {
  setShowNav: (input: boolean) => void;
};

export interface IThemeContext {
  dark?: boolean;
  toggleDark?: () => void;
}
