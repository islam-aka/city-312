import { FC, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import styles from './Header.module.scss'
import LogInBtn from './HeaderBtn/LogInBtn'
import SignUpBtn from './HeaderBtn/SignUpBtn'
import Logo from './Logo'
import MenuContainer from './Menu/MenuContainer'

const Header: FC = () => {
	const [mobileMenuActive, setMobileMenuActive] = useState(false)

	const handlerMobileMenu = () => {
		setMobileMenuActive(!mobileMenuActive)
	}
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Logo text="дисконтная карта для скидок" />
				<div className={styles.headerNavMenuDesktop}>
					<MenuContainer />
				</div>
				<div className={styles.headerBtn}>
					<LogInBtn>Вход</LogInBtn>
					<SignUpBtn>Регистрация</SignUpBtn>
				</div>
				{/* Mobile Button */}
				<div onClick={handlerMobileMenu} className={styles.mobileBtn}>
					{mobileMenuActive ? (
						<AiOutlineClose size={30} color="white" />
					) : (
						<AiOutlineMenu size={30} color="white" />
					)}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						mobileMenuActive ? styles.mobileMenu : styles.mobileMenuClose
					}
				>
					<Logo text="дисконтная карта для скидок" />
					<MenuContainer />
					<div className={styles.headerBtnMobile}>
						<LogInBtn>Вход</LogInBtn>
						<SignUpBtn>Регистрация</SignUpBtn>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
