import 'vue-i18n'

declare module 'vue-i18n' {
  export interface DefineLocaleMessage {
    [key: string]: string | DefineLocaleMessage
  }

  export interface DefineDateTimeFormat {
    [key: string]: Intl.DateTimeFormatOptions
  }

  export interface DefineNumberFormat {
    [key: string]: Intl.NumberFormatOptions;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string, ...args: any[]) => string
    $tc: (key: string, choice?: number, ...args: any[]) => string
  }
}
 