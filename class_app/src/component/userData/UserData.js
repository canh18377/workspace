import clsx from "clsx";
import Styles from "./userData.module.scss";

function UserData({ data }) {
  return (
    <span className={clsx(Styles.contentMain)}>
      {data.hoTen}
      <br />
      Sinh ngày {data.ngaySinh.ngay},Tháng {data.ngaySinh.thang} ,Năm{" "}
      {data.ngaySinh.nam}
      <br />
      Giờ {data.gio}
      <br />
      {data.gioiTinh}
      <br />
      Cục {data.cuc}
      <br />
      Mệnh : {data.menh}
      <br />
      Sao chủ mệnh : {data.saoChuMenh}
      <br />
      Sao chủ thân : {data.saoChuThan}
      <br />
      Lượng Chỉ : {data.luongChi}
    </span>
  );
}

export default UserData;
