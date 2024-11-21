import clsx from "clsx";
import Styles from "./header_footer.module.scss";
function Component() {
  const notes = [
    { label: "M", text: "Miếu Địa" },
    { label: "V", text: "Vượng Địa" },
    { label: "Đ", text: "Đắc Địa" },
    { label: "H", text: "Hãm Địa" },
    { label: "B", text: "Bình Hòa" },
  ];
  return (
    <div className={clsx(Styles.container)}>
      <div className={clsx(Styles.note)}>
        {notes.map((obj) => (
          <div className={clsx(Styles.children)}>
            <span className={clsx(Styles.span)}>{obj.label}:</span>
            {obj.text}
          </div>
        ))}
      </div>
      <div>
        <ul className={clsx(Styles.typeNote)}>
          <li
            style={{ backgroundColor: "yellow" }}
            className={clsx(Styles.icon, Styles.sprite_squareVang)}
          ></li>
          Kim
          <li
            style={{ backgroundColor: "green" }}
            className={clsx(Styles.icon, Styles.sprite_squareXanh)}
          ></li>
          Mộc
          <li
            style={{ backgroundColor: "red" }}
            className={clsx(Styles.icon, Styles.sprite_squareXanhThuy)}
          ></li>
          Thủy
          <li
            style={{ backgroundColor: "red" }}
            className={clsx(Styles.icon, Styles.sprite_squareHong)}
          ></li>
          Hỏa
          <li
            style={{ backgroundColor: "red" }}
            className={clsx(Styles.icon, Styles.sprite_squareXam)}
          ></li>
          Thổ
        </ul>
      </div>
    </div>
  );
}

export default Component;
