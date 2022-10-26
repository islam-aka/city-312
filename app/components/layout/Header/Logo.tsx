import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.png'

interface ILogoProps {
	text: string
}

const Logo: FC<ILogoProps> = ({ text }: ILogoProps) => {
	return (
		<Link href="/">
			<a>
				<Image
					width={45}
					height={45}
					src={logoImage}
					alt="City-312"
					draggable={false}
				/>
				<span className="font-bold text-white">{text}</span>
			</a>
		</Link>
	)
}

export default Logo
