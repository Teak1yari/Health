import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';  
import User from '@mui/icons-material/PersonOutlineOutlined';
import Products from '@mui/icons-material/AddBusiness';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className="logo">HEALTH</span>
        </div>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">ГЛАВНАЯ</p>
                <li>
                  <DashboardIcon className='icon' />
                  <span>Меню</span>
                </li>
                <p className="title">СПИСОК</p>
                <li>
                  <User className='icon'/>
                  <span>Пациенты</span>
                </li>
                <li>
                  <Products className='icon'/>
                  <span>Создать пациента</span>
                </li>
                <p className="title">СЕРВИСЫ</p>
                <li>
                  <NotificationsNoneOutlinedIcon className='icon'/>
                  <span>Уведомления</span>
                </li>
                <li>
                  <SettingsOutlinedIcon className='icon'/>
                  <span>Настройки</span>
                </li>
                <p className="title">ПОЛЬЗОВАТЕЛЬ</p>
                <li>
                  <AccountCircleOutlinedIcon className='icon'/>
                  <span>Профиль</span>
                </li>
                <li>
                  <LogoutOutlinedIcon className='icon'/>
                  <span>Выйти</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar