new Vue({
    el: '#app',
    data: {
        ru: true,
        top: '',
        left: '',
        onHref: '',
        outHref: '',
    },
    methods: {
        
        move($event) {
            this.top = $event.pageY + 'px';
            this.left = $event.pageX + 'px';
        }
    }, 
    

    
});