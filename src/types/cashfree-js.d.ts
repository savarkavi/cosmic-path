// src/types/cashfree-js.d.ts
declare module "@cashfreepayments/cashfree-js" {
  export function load(options?: {
    mode?: "sandbox" | "production";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }): Promise<any>;
}
