/**
 * @description A function that takes no arguments and returns nothing.
 */
type NullaryHandler = () => void;

/**
 * @description A function that takes one argument and returns nothing.
 * @template T - The type of the argument.
 */
type UnaryHandler<T> = (arg: T) => void;

/**
 * @description A function that takes in payload of type T and returns nothing.
 * @template T - The type of Data of the payload.
 * @template M - The type of Meta of the payload.
 */
type ResponseHandler<T, M = undefined> = UnaryHandler<Payload<T, M>>;

/**
 * @description A function that takes in payload of type T and returns nothing.
 * @template T - The type of Data of the payload. Defaults to null.
 */
type ErrorHandler<T = unknown> = UnaryHandler<Payload<T>>;
