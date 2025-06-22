declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    WlButton: typeof import('whale-ui')['WlButton']
  }
}
export {}
