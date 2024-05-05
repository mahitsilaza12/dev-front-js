<template>
    <div class="modal-mask fixed-center" :class="`${size}`"  :id="name">
        <div class="modal-wrapper">
            <div class="modal-container" ref="customModal">
                <div class="modal-header">
                    <slot name="header">
                        default header
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        default body
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer"> </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './Modal.css'
export default {
    name  :   'CustomModal',
    props : ['size','name'],
    data  :function(){

        return {
        }
    },
    methods: {
        watchScrool: function(){
            let that  = this
            const resizeObserver = new ResizeObserver((entries) => {
                let customModal = entries[0]
                let windowHeight = window.innerHeight
                let modalHeight  = customModal.target.clientHeight
                let ofsset       = (windowHeight - modalHeight) 
                if (windowHeight < modalHeight) {
                    this.position = 'custom-sticky-top'
                    window.addEventListener('scroll', function(){
                        let scroolY = window.scrollY + windowHeight
                        if (scroolY > modalHeight) {
                            that.position = 'fixed'
                            customModal.target.style.margin= `${ofsset}px auto`
                        }else{
                            that.position = 'custom-sticky-top'
                            customModal.target.style.margin = "auto"
                        }
                    })
                }
            })
            resizeObserver.observe(this.$refs.customModal)
        }
    },
    mounted : function(){ 
        //this.watchScrool()
        let body = document.querySelector('body')
        body.classList.add('modal-opened')

    }
}



</script>