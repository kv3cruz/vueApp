Vue.component('product',{
     props:{
         premium:{
            type: Boolean,
            default:false,
            required: true

         }
     },
     template:   `<div class="product">
        <div class="product-image">
            <img :src="image" >
        </div>
        <div class="product-info">
            <p v-show="sale">on Sale</p>
            <h1>{{ title }}</h1>
            <p>sheeping: {{ shipping }}</p>
            <p v-if="inventary > 10">in stock</p>
            <p v-else-if="inventary <= 10 && inventary > 0">almost sold!</p>
            <p v-else :class="{outOfStock: !stock}">out stock</p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="(variant,index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover='updateImage(index)'
                    >
            </div>
            <button @click="addToCart" 
            :disabled="!stock"
            :class="{disabledButton: !stock}"
            >Add to Cart</button>
            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>
            <button @click="subtractToCart">Subtract Cart</button>
        </div>
    </div>`,
    data(){
        return {
            product: 'socks',
            branch:'mastery',
            selectedItem: 0,
            stock: false,
            inventary: 0,
            sale:false,
            details:['cotton 80%', 'smoothy','neutral gender'],        
            variants:[{variantId:1, variantColor:'green',img:'imges/vmSocks-green-onWhite.jpg'}, {variantId:2, variantColor:'blue',img:'imges/vmSocks-blue-onWhite.jpg'}],
            cart:0
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        subtractToCart(){
            this.cart -= 1
        },
        updateImage(index){
            this.selectedItem = index
        }
    },
    computed:{
        title(){
            return  this.branch  + ' ' +  this.product
        },
        image(){
            return this.variants[this.selectedItem].img
        },
        shipping(){
            return this.premium ? 'free': '$2.99'
        }



    }

})
var app = new Vue({
    el: '#app',
    data:{
        premium:true
    }
    
    
})