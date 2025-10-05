/**
 * Formats a number (in pence) to currency format
 * @param pence - Price in pence (e.g., 1299)
 * @returns Formatted currency string (e.g., "£12.99")
 */
export function formatCurrency(pence: number): string {
  const pounds = pence / 100;
  return `£${pounds.toFixed(2)}`;
}