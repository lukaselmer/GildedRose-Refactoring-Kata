import { assertNever } from 'assert-never'

let logger: undefined | 'real' | 'fake'
const fakeLogEntries: string[][] = []

export function initLogger(type: 'real' | 'fake') {
  if (logger) throw new Error('logger already set')
  logger = type
}

export function discardLogs() {
  fakeLogEntries.splice(0, fakeLogEntries.length)
}

export function fakeLogs() {
  if (logger !== 'fake') throw new Error('logger not set to fake')

  return fakeLogEntries.map((entry) => entry.join(', ')).join('\n')
}

export function consoleLog(...args: string[]) {
  if (!logger) throw new Error('logger not set')
  else if (logger === 'real') console.log(...args)
  else if (logger === 'fake') fakeLogEntries.push(args)
  else assertNever(logger)
}
