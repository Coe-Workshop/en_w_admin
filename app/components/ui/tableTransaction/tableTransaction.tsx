import styles from "./tableTransaction.module.scss";

export const TableTransaction = () => {
  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <th></th>
            <th className="">ชื่อ</th>
            <th>นามสกุล</th>
            <th>อายุ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <th>ตาม</th>
            <th>13</th>
            <th>13</th>
          </tr>
          <tr>
            <th>ตูม</th>
            <th>ตาม</th>
            <th>13</th>
          </tr>
          <tr>
            <th>ตูม</th>
            <th>ตาม</th>
            <th>13</th>
          </tr>
          <tr>
            <th>ตูม</th>
            <th>ตาม</th>
            <th>13</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
