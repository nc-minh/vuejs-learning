# hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint

<hr/>

two way binding
- Lắng nghe một sự kiện
    + v-on
    + viết tắt: @
- In một biến ra trình duyệt
    + {{}}

- Làm việc với thuộc tính và ràng buộc nó:
    + v-bind:attr="name"
    + viết tắt: :

- v-once
    + Giữ nguyên giá trị

//tất cả dữ liệu truyền qua HTML đều là dữ liệu thô (text)
- Đổ html ra trình duyệt
    + v-html="tên thẻ"

- Ràng buộc dữ liệu hai chiều
    + v-model=""

- Computed: các hàm để tính toán chỉ gọi đến mình hàm thực thi không gọi tất cả
//computed thực hiện như một hàm nhưng chỉ là một thuộc tính nên khi gọi không cần thêm ()
//computed chạy trước methods

- watch: theo dõi thay đổi của data
ref: ánh xạ đến element : this.$refs.name

- v-show: ẩn/hiện theo điều kiện

- v-if: ẩn/hiện theo điều kiện (không có trong DOM)

- v-for: lặp



props: data từ cha -> con ; props down
có hai cách khai báo props:
    + dùng mảng tên các props

custom event

filter: thành phần ở giữa bind

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
#   V u e j s - t u t o r i a l  
 