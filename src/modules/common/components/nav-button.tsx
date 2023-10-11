import * as React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NavLinks, RESUME_URL } from "@/constants";

export const NavButton: React.FC<{ nav: (path: string) => void }> = ({
	nav,
}) => {
	return (
		<NavigationMenu className="lg:hidden">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<HamburgerMenuIcon className="w-6 h-6" />
					</NavigationMenuTrigger>

					<NavigationMenuContent>
						<ul className="flex flex-col gap-3 p-6">
							{NavLinks.map((link, index) => (
								<li key={index} className="row-span-3">
									<NavigationMenuLink asChild>
										<Button
											onClick={() => nav(link.path)}
											variant={"ghost"}
											size="sm"
											className="text-lg"
										>
											{link.label}
										</Button>
									</NavigationMenuLink>
								</li>
							))}

							<li className="row-span-3">
								<Button variant={"ghost"} size="sm" className="text-lg">
									<a href={RESUME_URL} download>
										Resume
									</a>
								</Button>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};
