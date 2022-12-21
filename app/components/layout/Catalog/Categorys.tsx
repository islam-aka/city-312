import React, { FC } from 'react'
import { IСategorys } from './catalog.interface'

const Categorys: FC<IСategorys> = (props) => {
	return (
		<p
			onClick={() =>
				props.setHandlerchange({
					...props.handlerchange,
					subCategorys: 'undefined',
					categorys: 'undefined',
					activityTypes: props.name,
					categorysId: props.id,
				})
			}
			style={
				props.handlerchange.activityTypes === props.name
					? {
							background: 'linear-gradient(180deg, #FFE25A 0%, #FFA852 100%)',
							borderRadius: '10px',
							padding: '10px',
					  }
					: {
							background: 'none',
					  }
			}
			className="w-[calc(100%_-_40px)] mx-auto text-[18px] font-medium leading-[21px] text-black-900 cursor-pointer"
		>
			{props.name}
		</p>
	)
}

export default Categorys
