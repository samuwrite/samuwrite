import * as s from "./divider.module.css";

export const MenuDivider = (): JSX.Element => {
  return (
    <div className={s.container}>
      <hr className={s.hr} />
    </div>
  );
};
