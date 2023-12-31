import React from "react";
import {
	OpenInNewWindowIcon,
	SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { NUSCClubLogo, cca } from "@/constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const NUSCollegeClub: React.FC = () => {
	const [value, setValue] = React.useState<string[]>([
		cca.nuscollegeclub.accordion_value,
	]);

	return (
		<Card className="w-full bg-primary-foreground border-none shadow-lg">
			<Accordion type="multiple" value={value} onValueChange={setValue}>
				<AccordionItem value={cca.nuscollegeclub.accordion_value}>
					<AccordionTrigger className="pr-3">
						<CardHeader className="text-left w-full">
							<AspectRatio ratio={NUSCClubLogo.width! / NUSCClubLogo!.height!}>
								<img src={NUSCClubLogo.src} alt={NUSCClubLogo.alt} />
							</AspectRatio>
							<CardTitle>{cca.nuscollegeclub.title}</CardTitle>
							<CardDescription>{cca.nuscollegeclub.position}</CardDescription>
						</CardHeader>
					</AccordionTrigger>

					<AccordionContent>
						<CardContent>
							<div className="flex flex-col gap-6">
								<Separator />
								<p className="text-sm text-muted-foreground">
									{cca.nuscollegeclub.description}
								</p>

								<a
									href={cca.nuscollegeclub.NUSC_PAGE_URL}
									className="flex items-center gap-2 hover:opacity-70 transition text-muted-foreground mx-auto"
									rel="noopener noreferrer"
									target="_blank"
								>
									{cca.nuscollegeclub.officialpage}
									<OpenInNewWindowIcon className="w-4 h-4" />
								</a>

								<Separator />

								{cca.nuscollegeclub.items.map((item, index) => (
									<div key={index}>
										<h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
											{item.title}
										</h4>

										<ul className="ml-4">
											{item.paragraphs.map((item, index) => (
												<li key={index} className="list-disc">
													<p className="inline">{item}</p>
												</li>
											))}
										</ul>
									</div>
								))}

								<Separator />
							</div>
						</CardContent>
						<CardFooter className="flex">
							<h4 className="scroll-m-20 text-sm lg:text-lg font-semibold tracking-tight">
								{cca.nuscollegeclub.time}
							</h4>
							<SewingPinFilledIcon className="ml-auto w-4 h-4" />
							<h4 className="scroll-m-20 text-right text-sm lg:text-lg font-semibold tracking-tight">
								{cca.nuscollegeclub.location}
							</h4>
						</CardFooter>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	);
};
