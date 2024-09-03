import Image from 'next/image';
import Link from 'next/link';
// Images
import Img from '../assets/images/logo.png';

const Logo = () => {
	return (
		<Link href="/" aria-label="Home">
			<Image
				src={Img}
				alt="JAWDev Logo"
				width={40}
				style={{ borderRadius: '100%', overflow: 'hidden' }}
			/>
		</Link>
	 );
}

export default Logo;