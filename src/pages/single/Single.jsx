import React from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import { useLocation } from 'react-router-dom';

function Single() {
	const location = useLocation();
	const pacient = location.state.pac;

	return (
		<div className='single'>
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />
				<div className='top'>
					<div className='left'>
						<h1 className='title'>ИНФОРМАЦИЯ</h1>
						<div className='item'>
							<AccountCircleTwoToneIcon className='itemImg' />
							<div className='details'>
								<h1 className='itemTitle'>
									{pacient.name +
										' ' +
										pacient.secondName +
										' ' +
										pacient.thirdName}
								</h1>
								<div className='detailItem'>
									<span className='itemKey'>Дата рождения: </span>
									<span className='itemValue'>{pacient.date}</span>
								</div>
								<div className='detailItem'>
									<span className='itemKey'>Номер телефона: </span>
									<span className='itemValue'>{pacient.phone}</span>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<h1 className='title'>ДОБАВИТЬ ПОСЕЩЕНИЕ</h1>
						<div className='rightInputs'>
							<div className='inputItem'>
								<span className='inputKey'>Дата посещения: </span>
								<input type='text' placeholder='...' />
							</div>
							<div className='inputItem'>
								<span className='inputKey'>История: </span>
								<input type='text' placeholder='...' />
							</div>
							<div className='inputItem'>
								<span className='inputKey'>Курс лечения: </span>
								<input type='text' placeholder='...' />
							</div>
						</div>
						<div className='buttonAdd'>Применить</div>
					</div>
				</div>
				<div className='bottom'>
					<h1 className='title'>ИСТОРИЯ ПАЦИЕНТА</h1>
					<div className='bottomInfo'>
						<div className='date'>
							<h1 className='datePacient'>Дата посещения:</h1>
							<span className='historyInfo'>10.12.2023</span>
						</div>
						<div className='date'>
							<h1 className='datePacient'>История: </h1>
							<span className='historyInfo'>Боли в желудке </span>
						</div>
						<div className='date'>
							<h1 className='datePacient'>Курс: </h1>
							<span className='historyInfo'>Принимать таблетки</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Single;
