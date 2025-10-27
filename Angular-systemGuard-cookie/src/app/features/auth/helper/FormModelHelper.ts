import type { FormControl } from "@angular/forms";

export type FormModelHelper<T> = {
    [K in keyof T]: FormControl<T[K]>
}