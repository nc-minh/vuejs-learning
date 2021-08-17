# module-setup

> ncm

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## nội dung
- muốn truyền tag từ bên ngoài file con thì dùng slot tag trong file con
    + khi đã nhảy vào bên trong con có thể css và truyền dữ liệu
    + truyền nhiều dữ liệu thì phải đặt tên cho slot tag ->  `<slot name="title"></slot>`
        - và phải cho biết ngoài thẻ truyền vào sử dụng slot nào -> `<p slot="title">{{ content }}</p>`
    + slot chưa đăng kí thì nó là default slot, khi có name thì không còn là default slot

- vuejs có một cặp thẻ là components là attribute là : `<component :is="selectedComponents"></component>`
    + khi di chuyển qua lại các components sẽ bị destroy

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuefjs.github.io/vue-loader).
