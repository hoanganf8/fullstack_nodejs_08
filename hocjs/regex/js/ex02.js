// const pattern = /^(0|\+84)[0-9]{9}$/;
// const phone = "0388875179";
// console.log(pattern.test(phone));

//Phủ định: Kiểm tra trong chuỗi có ký tự đặc biệt không?
// const str = "A";
// const pattern = /[^a-zA-Z0-9-_ ]/;
// console.log(pattern.test(str));

//Kiểm tra trong chuỗi có dấu chấm (.) không?

/*
Kiểm tra email hợp lệ
username@domain.ext
1. username
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 3 ký tự trở lên
2. domain
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 1 ký tự
3. ext
- Chữ cái thường, HOA
- Tối thiểu 2 ký tự

Test: 
hoangan.web-@gmail.com ==> failed
hoangan@fullstack-.edu.vn ==> failed
*/

//Phân tích: fullstack-nodejs.fullstack.edu.vn

//Cắt chuỗi
// const str = `Hello anh em 0388875179 va 0123456789`;
// const pattern = /(0|\+84)\d{9}/g;
// const result = str.match(pattern);
// console.log(result);

//Capturing group

//Non-Capturing Group (?:)
// const str = `hoangan.web@gmail.com`;
// const pattern =
//   /^([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@(?:(?:[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}$/;
// const result = str.match(pattern);
// console.log(result);

//Thay thế
let content = `Lorem Ipsum hoangan.web@gmail.com is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the hoangan@fullstack.edu.vn leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;
const pattern =
  /([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@((([a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}))/g;
content = content.replace(
  pattern,
  `<a href="mailto:$1" title="Domain: $2">$1</a>`
);
document.body.innerHTML = content;

/*
$1 ==> Group 1
$2 ==> Group 2
*/
