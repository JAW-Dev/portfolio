//Components
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
// Images
import Profile from '../assets/images/profile.jpg';

const UserAvatar = () => {
	return (
		<Avatar>
			<AvatarImage
				src="https://media.licdn.com/dms/image/v2/D5635AQFT8ZGD6W6vLg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1715009033982?e=1725984000&v=beta&t=Hk-MwgUXQrIId70a_uiLI7-_1ZxdTKXLKNddeHsSmcc"
				alt="Jason Witt Profile Picture"
			/>
			<AvatarFallback>JW</AvatarFallback>
		</Avatar>
	 );
}

export default UserAvatar;