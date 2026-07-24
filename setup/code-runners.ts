import { defineCodeRunnersSetup } from '@slidev/types'
import { loadPyodide, version } from 'pyodide'

let runtime: ReturnType<typeof loadPyodide> | undefined
let queue = Promise.resolve()

function getPyodide() {
  return runtime ??= loadPyodide({
    indexURL: `https://cdn.jsdelivr.net/pyodide/v${version}/full/`,
    stdin: () => window.prompt('Python input:') ?? '',
  })
}

async function executePython(code: string) {
  const chunks: string[] = []
  const pyodide = await getPyodide()
  const globals = pyodide.toPy({ __name__: '__main__' })

  pyodide.setStdout({ batched: text => chunks.push(`${text}\n`) })
  pyodide.setStderr({ batched: text => chunks.push(`${text}\n`) })

  try {
    await pyodide.loadPackagesFromImports(code)
    await pyodide.runPythonAsync(code, { globals })
  }
  catch (error) {
    chunks.push(String(error))
  }
  finally {
    globals.destroy()
    pyodide.setStdout({})
    pyodide.setStderr({})
  }

  return { text: chunks.join('') || '✓ รันสำเร็จ' }
}

export default defineCodeRunnersSetup(() => ({
  // ponytail: main-thread execution is enough for short classroom snippets;
  // move Pyodide to a Web Worker if students will run untrusted or long code.
  python(code) {
    const result = queue.then(() => executePython(code))
    queue = result.then(() => undefined, () => undefined)
    return result
  },
}))
