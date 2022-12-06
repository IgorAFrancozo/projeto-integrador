import { defineStore } from 'pinia'
import Swal from 'sweetalert2'

export const useShoppingStore = defineStore('shopping', {
    state: () => {
        return { 
            products: [
                {
                    id: 1,
                    name: 'Tênis Air Jordan - Roxo/Branco',
                    price: 797,
                    image: 'https://cdn.awsli.com.br/1000x1000/2297/2297245/produto/153839941/9831880c30.jpg'
                },
                {
                    id: 2,
                    name: 'Tênis Air Jordan - Vermelho/Branco',
                    price: 770,
                    image: 'https://cdn.awsli.com.br/800x800/1721/1721424/produto/117839161/tenis-nike-air-jordan-branco-preto-vermelho-1da3f389.jpg'
                },
                {
                    id: 3,
                    name: 'Tênis Air Jordan - Preto/Branco',
                    price: 789,
                    image: 'https://cdn.awsli.com.br/1000x1000/1755/1755854/produto/87657524/6e0f808666.jpg'
                },
                {
                    id: 4,
                    name: 'Tênis Air Jordan - Preto/Vermelho',
                    price: 770,
                    image: 'https://cdn.awsli.com.br/1000x1000/1721/1721424/produto/117839163/tenis-nike-air-jordan-preto-branco-vermelho-d8502bb0.jpg'
                },
                {
                    id: 5,
                    name: 'Tênis Air Jordan - Cinza/Vermelho',
                    price: 717,
                    image: 'https://cdn.awsli.com.br/1000x1000/1755/1755854/produto/89950756/1fefa99798.jpg'
                },
                {
                    id: 6,
                    name: 'Tênis Air Jordan - Rosa/Preto',
                    price: 737,
                    image: 'https://cdn.awsli.com.br/1000x1000/1755/1755854/produto/87668795/1ad09aeba8.jpg'
                }
            ],
            cartItems : []
        }
    },
    getters: {
        countCartItems(){
            return this.cartItems.length;
        },
        getCartItems(){
            return this.cartItems;
        }
    },
    actions: {
        addToCart(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
              this.products[index].quantity += 1;
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Seu Item Foi Atualizado',
                showConfirmButton: false,
                timer: 1500
              });
            }else {
              item.quantity = 1;
              this.cartItems.push(item);
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Seu Item Foi Salvo',
                showConfirmButton: false,
                timer: 1500
              });
            }
        },
        incrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity += 1;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Seu Item Foi Atualizado',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        decrementQ(item) {
            let index = this.cartItems.findIndex(product => product.id === item.id);
            if(index !== -1) {
                this.cartItems[index].quantity -= 1;
                if(this.cartItems[index].quantity === 0){
                    this.cartItems = this.cartItems.filter(product => product.id !== item.id);
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Seu Item Foi Atualizado',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart(item) {
            this.cartItems = this.cartItems.filter(product => product.id !== item.id);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Seu Item Foi Removido',
              showConfirmButton: false,
              timer: 1500
            });
        }
        
    },
})