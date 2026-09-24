export function fillCity(text: string, cityName: string): string {
  return text.replaceAll("{city}", cityName);
}
