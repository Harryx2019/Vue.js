Vue.directive('clickoutside',{
    bind: function(el,binding,vnode){
        function documentHandler(e) {  
            console.log(e);
            if(el.contains(e.target)){
                return false;
            }
            if(binding.expression){
                binding.value(e);
            }
        }
        el.__VueClickOutSide__ = documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind: function (el,binding) {  
        document.removeEventListener('click',el.__VueClickOutSide__);
        delete el.__VueClickOutSide__;
    }
});