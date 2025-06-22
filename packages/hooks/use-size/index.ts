import { componentSizes } from '@whale-ui/constants'
import { buildProp } from '@whale-ui/utils'
import { computed, inject, unref } from 'vue'
import type { ComponentSize } from '@whale-ui/constants'


import type { InjectionKey, Ref } from 'vue'

export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false,
} as const)

export const useSizeProps = {
  size: useSizeProp,
}

export interface SizeContext {
  size: Ref<ComponentSize>
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size')

export const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {} as SizeContext)

  return computed<ComponentSize>(() => {
    return unref(injectedSize.size) || ''
  })
}
