export interface ParamSerializationStrategy {
  query?: QueryParamSerializationStrategy;
}

export interface QueryParamSerializationStrategy {
  array?: QueryParamArrayStrategy;
}

/** Supported serialization strategies for arrays in query parameters */
export type QueryParamArrayStrategy = "ampersand" | "comma";

/**
 * Transform a parameter serialization strategy for array into
 * openapi parameter serialization rules
 *
 * @param strategy The array strategy
 *
 * @returns The parameter openapi serialization rules
 */
export function makeParamSerializationRulesForArray(
  strategy: QueryParamArrayStrategy
): { style: string; explode: boolean } {
  switch (strategy) {
    case "ampersand": {
      return {
        explode: true,
        style: "form"
      };
    }
    case "comma": {
      return {
        explode: false,
        style: "form"
      };
    }
  }
}