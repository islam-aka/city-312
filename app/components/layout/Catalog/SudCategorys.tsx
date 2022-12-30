import React, { FC } from 'react'
import { ISubСategorys } from './catalog.interface'

const SubCategorys: FC<ISubСategorys> = (props) => {
	return (
		<>
			<p
				onClick={() =>
					props.setHandlerchange({
						...props.handlerchange,
						subCategory: props.id,
					})
				}
				style={
					props.handlerchange.subCategory === props.id
						? {
								background: 'linear-gradient(180deg, #FFE25A 0%, #FFA852 100%)',
								borderRadius: '10px',
								padding: '10px',
								color: 'black',
						  }
						: {
								background: 'none',
						  }
				}
				className="w-[calc(100%_-_40px)] text-blue-400 mx-auto text-[18px] font-medium leading-[21px] cursor-pointer"
			>
				{props.name}
			</p>
		</>
	)
}

export default SubCategorys
