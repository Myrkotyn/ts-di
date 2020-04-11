import { Type } from "./type.interface";
import { GenericClassDecorator } from "./types/index";

export const Service = (): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => {
    // do something with `target`, e.g. some kind of validation or passing it to the Injector and store them
  };
};
