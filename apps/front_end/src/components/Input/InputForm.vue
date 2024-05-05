<template>
    <input :type="typeInput" :class="className" :placeholder="placeholderName" :model="modelName" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
    name:'InputForm',
    props: {
        placeholderName: {
            type: String,
            default: 'nom'
        },
        typeInput: {
            type: String,
            default: 'text'
        },
        className: {
            type: String,
            default: 'form-group'
        },
        modelName: {
            type: String,
            default:'name'
        },
        modelValue: {
            type: [String, Number]
        }
    },
    computed: {
        placeholder() {
            return {
                placeholderName: this.placeholderName
            }
        },
        type(){
            return {
                typeInput: this.typeInput
            }
        },
        class() {
            return {
                className: this.className
            }
        },
        model() {
            return {
                modelName : this.modelName
            }
        }
    }
}
</script>