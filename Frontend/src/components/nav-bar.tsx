import { LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "react-oidc-context";

const NavBar: React.FC = () => {
  const { user, signoutRedirect } = useAuth();

  return (
    <div className="bg-gray-500 text-white">
      <div className="container mx-auto p-4">
        <div className="flex justify-between item-center">
          <h1 className="text-xl font-bold">TF2 Tradeup</h1>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarFallback className="bg-gray-700">
                  {" "}
                  {user?.profile.preferred_username?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 bg-gray-900 border-gray-700 text-white"
              align="end"
            >
              <DropdownMenuLabel className="font-normal">
                <p className="text-sm font-medium">
                  {user?.profile.preferred_username}
                </p>
                <p className="text-sm text-gray-400">{user?.profile.email}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                className="hover:bg-gray-800"
                onClick={() => {
                  signoutRedirect();
                }}
              >
                <LogOut />
                <span>Log Out</span>
              </DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
