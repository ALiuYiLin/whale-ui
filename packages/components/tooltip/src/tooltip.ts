import { buildProps } from "@whale-ui/utils";

export const tooltipTypes = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end'
] as const

export const tooltipProps = buildProps({
  type: {
    type: String,
    values: tooltipTypes,
    default: 'top'
  },
  content: {
    type: String,
    default: ''
  }
})