export interface IState<Type> {
  state: Type;
  set: (state: Type) => void;
}
