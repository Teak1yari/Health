import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from "../../datatables";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell:()=>{
    return (
      <div className="cellAction">
        <Link to="/users/test" style={{ textDecoration: "none" }}>
          <div className="viewButton">Просмотр</div>
        </Link>
        <div className="deleteButton">Удалить</div>
      </div>
    )
  }}];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Добавить нового пациента
        <Link to="/pacients/new" className="link">
          Добавить нового
        </Link>
      </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable