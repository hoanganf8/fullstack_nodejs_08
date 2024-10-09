import { useEffect, useState } from "react";

export default function UploadFile() {
  const [image, setImage] = useState({});
  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setImage({ ...image, previewUrl, file });
  };
  const handleUploadFile = async (e) => {
    e.preventDefault();
    if (!image.file) {
      return alert("Vui lòng chọn file");
    }
    const formData = new FormData();
    formData.append("file", image.file);
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/files/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) {
      return alert("Upload file failed");
    }
    const data = await response.json();
    setImage({ ...image, previewUrl: data.location });
    alert("Đã upload thành công");
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(image.previewUrl);
    };
  }, [image]);
  return (
    <div>
      <form action="" onSubmit={handleUploadFile}>
        <input type="file" name="image" onChange={handleChangeFile} />
        <button>Upload</button>
      </form>
      {image.previewUrl && (
        <img src={image.previewUrl} style={{ width: "300px" }} />
      )}
    </div>
  );
}
/*
Yêu cầu: 
- Chọn ảnh ==> Hiển thị xem trước
- Bấm upload ==> Tải lên Server
- Hiển thị ảnh đã upload, thay thế vị trí ảnh xem trước kèm thông báo
Lưu ý: Có loading
*/
