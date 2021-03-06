import type { CronData } from '../index'
import { err } from '../result'
import checkField from '../helper'
import type { Options } from '../option'

const checkMinutes = (cronData: CronData, options: Options) => {
  if (!cronData.minutes) {
    return err(['minutes field is undefined.'])
  }

  const { minutes } = cronData

  return checkField(minutes, 'minutes', options)
}

export default checkMinutes
