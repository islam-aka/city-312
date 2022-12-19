import Input from '@/components/ui/Input/Input'
import React from 'react'
import { BsCheck } from 'react-icons/bs'
import styles from './Stocks.module.scss'

const CreateStocks = () => {
	return (
		<div className={styles.createStocks}>
			<div className="max-w-[386px] w-full">
				<div>
					<p>Название скидки </p>
					<div className={styles.nameStocks}>
						<Input
							type="text"
							placeholder="Название скидки"
							style={{ width: '100%' }}
						/>
						<div className="absolute right-2 top-[25%]">
							<BsCheck color="#F5C521" size={'22px'} />
						</div>
					</div>
				</div>
				<div>
					<p>Вид скидки</p>
					<div className={styles.nameStocks}>
						<Input
							type="text"
							placeholder="Вид скидки"
							style={{ width: '100%' }}
						/>
						<div className="absolute right-2 top-[25%]">
							<BsCheck color="#F5C521" size={'22px'} />
						</div>
					</div>
				</div>
				<div>
					<p>Цена до скидки </p>
					<div className={styles.priceStocks}>
						<Input type="number" />
						<p>сом</p>
						<div className="absolute right-2 top-[25%]">
							<BsCheck color="#F5C521" size={'22px'} />
						</div>
					</div>
				</div>
				<div>
					<p>Цена после скидки</p>
					<div className={styles.priceStocks}>
						<Input type="number" />
						<p>сом</p>
						<div className="absolute right-2 top-[25%]">
							<BsCheck color="#F5C521" size={'22px'} />
						</div>
					</div>
				</div>
			</div>

			<div className="">
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default CreateStocks
