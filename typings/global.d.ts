declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    FdButton: typeof import('whale-ui')['WlButton']
  }
}
export {}
