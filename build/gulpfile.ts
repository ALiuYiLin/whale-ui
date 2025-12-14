import { series } from 'gulp'
import { buildComponents } from './tasks'
export default series(buildComponents)
