import clsx from "clsx";
import Styles from "./componentAround.module.scss";
function ComponentAround({ background, data, index }) {
  const item = `item_${index}`;
  console.log(Styles);
  return (
    <div
      style={{ backgroundColor: background }}
      className={clsx(Styles.container, Styles[item])}
    >
      <div className={clsx(Styles.tongquat)}>
        <span className={clsx(Styles.cung_vi)}>{data.cung_vi}</span>
        <span className={clsx(Styles.cung)}>{data.cung}</span>
        <span style={{ color: "#993300", marginLeft: 20 }}>
          {data.than && ""}
        </span>
      </div>
      {data.tuan_triet && (
        <span className={clsx(Styles.tuantriet)}> {data.tuan_triet}</span>
      )}
      {data.chinh_tinh.length !== 0 &&
        data.chinh_tinh.map((chinhtinh) => (
          <div className={clsx(Styles.chinhtinh)}>{chinhtinh}</div>
        ))}{" "}
      <div className={clsx(Styles.cactinh)}>
        <div className={clsx(Styles.cattinh)}>
          {data.cat_tinh.map((cattinh) => (
            <p className={clsx(Styles.cactinh_child)}>{cattinh}</p>
          ))}
        </div>
        <div className={clsx(Styles.hungtinh)}>
          {data.hung_tinh.map((hungtinh) => (
            <p className={clsx(Styles.cactinh_child)}>{hungtinh}</p>
          ))}
        </div>
      </div>
      <div className={clsx(Styles.sao)}>
        <div className={clsx(Styles.amduong)}>{data.trạng_thái}</div>
        <div className={clsx(Styles.trangsinh)}>
          {data.vòng_trường_sinh}
        </div>{" "}
        <div className={clsx(Styles.chudia)}>{data.điểm}</div>
      </div>
    </div>
  );
}

export default ComponentAround;
