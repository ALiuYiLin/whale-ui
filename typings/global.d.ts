declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    FdButton: typeof import('element-x')['ExButton']
  }
}
export {}
