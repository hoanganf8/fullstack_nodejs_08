export default function SearchForm({ onChange }) {
  return (
    <input
      type="search"
      placeholder="Nhập từ khóa tìm kiếm..."
      onChange={onChange}
    />
  );
}

//Nhập từ khóa ==> Tìm todo tương ứng
// - Sử dụng swr
// - Sử dụng debounce
