type VoidFunction = () => void

type ValidationRule<T> = {
    errorMessage: string,
    validate(value: T): boolean
}

type GateField<T> = {
    value: T,
    key: string,
    label?: string,
    isRequired: boolean,
    hasChange: boolean,
    placeholder?: string,
    errorMessage: string,
    onBlur: VoidFunction,
    validateOnSubmit(): string,
    onChangeValue(newValue: T): void,
    submitParser?(value: T): T,
    setError(errorMessage: string): void
}

type FieldConfig<T> = {
    key: string,
    label?: string,
    initialValue: T,
    isRequired: boolean,
    placeholder?: string,
    validateOnBlur?: boolean,
    validationRules?: Array<ValidationRule<T>>,
    liveParser?(value: T): T,
    submitParser?(value: T): T
}

type UseFormReturn<T> = {
    form: Record<keyof T, GateField<any>>,
    hasError: boolean,
    formHasChanges(): boolean,
    setError(field: keyof  T, errorMessage: string): void,
    submit(): void
}

type FormGateCallbacks<T> = {
    onSuccess(form: T): void,
    onError?(form: T): void
}

declare function useForm<T>(
    formFields: Record<keyof T, GateField<any>>,
    callbacks: FormGateCallbacks<T>
): UseFormReturn<T>

declare function useField<T>(props: FieldConfig<T>): GateField<T>

export {
    useForm,
    useField
}