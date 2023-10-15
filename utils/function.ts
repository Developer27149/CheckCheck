import { useEffect } from "react"

/**
 * Execute async function with useEffect 😂
 * @param fn async function
 * @param dependency useEffect dependency
 */
export const execAsyncFunctionWithUseEffect = async (
  fn: () => Promise<unknown>,
  dependency: any[] = []
) => {
  useEffect(() => {
    fn()
  }, dependency)
}
