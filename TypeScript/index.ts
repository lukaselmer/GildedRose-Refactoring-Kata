import { goldenMasterTexTests } from './src/golden-master-text-test'
import { initLogger } from './src/logger'

initLogger('real')

const days = process.argv.length > 2 ? 2 + parseInt(process.argv[2], 10) : 2

goldenMasterTexTests(days)
