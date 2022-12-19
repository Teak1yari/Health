import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatables';
import { Link, useNavigate } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { fs } from '../../firebase.js';
import { useEffect, useState } from 'react';

const Datatable = () => {
	const [pacients, setPacients] = useState([]);
	const navigate = useNavigate();

	const fetchData = async () => {
		const q = query(collection(fs, 'pacients'));

		await getDocs(q).then(snapshot => {
			const newData = snapshot.docs.map(doc => ({
				...doc.data()
			}));
			setPacients(newData);
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className='datatable'>
			<div className='datatableTitle'>
				Добавить нового пациента
				<Link to='/pacients/new' className='link'>
					Добавить нового
				</Link>
			</div>
			<div className='table'>
				{pacients.map(pac => (
					<div className='tableElem' key={pac.id}>
						<div>
							<span>{pac.name}</span>
							<span>{pac.secondName}</span>
						</div>
						<div className='cellAction'>
							<div
								onClick={() =>
									navigate(`/pacients/:${pac.id}`, { state: { pac } })
								}
								style={{ textDecoration: 'none' }}>
								<div className='viewButton'>Просмотр</div>
							</div>
							<div className='deleteButton'>Удалить</div>
						</div>
					</div>
				))}
			</div>
			{/* <DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/> */}
		</div>
	);
};

export default Datatable;
