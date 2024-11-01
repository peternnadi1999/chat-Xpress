import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Logo from "/public/image/Logo.png";
import React, { useState } from "react";

const Onboarding3 = ({ prevStep }: any) => {
	const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

	const options = [
		{ id: 1, label: "Live chat support", icon: "💬" },
		{ id: 2, label: "Flows & Automations", icon: "⚙️" },
		{ id: 3, label: "Lorem ipsum whatever goes here", icon: "📋" },
	];

	const toggleOption = (id:any) => {
		setSelectedOptions((prev:any) =>
			prev.includes(id)
				? prev.filter((optionId:any) => optionId !== id)
				: [...prev, id],
		);
	};

	return (
		<div className="md:3/4 w-11/12 min-h-screen mt-32 mb-10 font-plus">
			<button
				onClick={prevStep}
				className="flex border md:mb-0 mb-6 rounded-xl p-1  w-32 items-start gap-2 text-[#646465]"
			>
				<ChevronLeft /> Go back
			</button>
			<div className=" bg-gradient-to-r from-[#FFFFFF] to-[#F7F8FA] p-3 rounded-lg  shadow-lg  max-w-md mx-auto">
				<div className="p-3  border rounded-lg">
					<div className="flex justify-center mb-6 bg-[#EEEEEE] w-10 h-10 items-center p-1 rounded-md m-auto">
						<Image src={Logo} alt="ChatXpress" className="h-5 w-9 " />
					</div>

					<h2 className="text-xl text-[#2D2D2D] text-center font-normal mb-2">
						What do you need ChatXpress to help you with?
					</h2>
					<p className="text-gray-600 font-normal text-center text-sm mb-6">
						Select all applicable so we can help personalize your experience
						further.
					</p>

					<div className="space-y-4 mb-6">
						{options.map((option) => (
							<label
								key={option.id}
								className={`flex items-center p-4 rounded-lg cursor-pointer border ${
									selectedOptions.includes(option.id)
										? "bg-red-50 border-red-300"
										: "bg-gray-100 border-transparent"
								}`}
							>
								<input
									type="checkbox"
									checked={selectedOptions.includes(option.id)}
									onChange={() => toggleOption(option.id)}
									className="hidden"
								/>
								<span className="text-2xl bg-white p-2 rounded-xl mr-4">{option.icon}</span>
								<span className="flex-grow text-[#2D2D2D] text-left">{option.label}</span>
								<div
									className={`w-5 h-5 border rounded ${
										selectedOptions.includes(option.id)
											? "bg-red-500 border-red-500"
											: "border-gray-300"
									}`}
								>
									{selectedOptions.includes(option.id) && (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="white"
											className="w-4 h-4 m-0.5"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									)}
								</div>
							</label>
						))}
					</div>

					<button className="w-full text-sm bg-gray-900 text-white py-3 rounded-lg mb-4">
						Get started!
					</button>

					<button className="text-pink-500 w-full m-auto text-sm underline hover:text-pink-700">
						I'd rather explore my options →
					</button>
				</div>
			</div>
		</div>
	);
};

export default Onboarding3;
