export function registerCustomElement(
  elementName: string,
  constructor: CustomElementConstructor
): void {
  if (customElements.get(elementName) === undefined) {
    customElements.define(elementName, constructor);
  }
}
