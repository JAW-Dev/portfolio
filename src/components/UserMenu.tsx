//Components
import UserAvatar from "@/components/UserAvatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Data
import UserMenuItems from "@/data/UserMenuData";


const UserMenu = () => {
	return (
			<DropdownMenu>
					<DropdownMenuTrigger className="focus:outline-none">
							<UserAvatar />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="mr-1">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{UserMenuItems.map((item) => (
									<DropdownMenuItem key={item.name}>
										<Link href={item.url}>{item.name}</Link>
									</DropdownMenuItem>
							))}
					</DropdownMenuContent>
			</DropdownMenu>
	 );
}

export default UserMenu;