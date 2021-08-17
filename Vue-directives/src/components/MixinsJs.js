export const Products = {
    data(){
        return{
            text: 'text Hleoo',
            products: ['minh', 'mèo', 'méo', 'meo', 'ahihi', 'ahuhu', 'điện thoại mới'],
            inputFilter: ''
        }
    },
    computed:{
        filterProducts(){
            return this.products.filter((element)=>{
                return element.includes(this.inputFilter)
            })
        }
    }
}