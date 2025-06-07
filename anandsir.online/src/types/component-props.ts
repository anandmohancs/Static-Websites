import { ReactNode } from "react"
import { Control, FieldPath, FieldValues } from "react-hook-form"

export type FormInputProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  control: Control<TFieldValues>
  name: TName
  id?: string
  containerClassName?: string
  label?: string | ReactNode
  placeholder?: string
  noValidate?: boolean
  labelClassName?: string
}