import { buildProps } from "@element-x/utils";



export const buttonProps = buildProps({
  size:{
    type:String,
    values: ['small','large','middle'] as const,
    default: 'small' 
  }
} as const)