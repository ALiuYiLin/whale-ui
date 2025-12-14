import { buildProps } from "@whale-ui/utils"
import { PropType, type ExtractPropTypes } from "vue"
import { extractRuntimeProps } from "vue/compiler-sfc"

export const buttonSkins = [
  '',
  'soft',
] as const
export const buttonProps = buildProps({
    skin: {
      type: String,
      values: buttonSkins,
      default: '',
    }
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>