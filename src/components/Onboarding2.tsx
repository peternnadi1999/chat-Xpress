import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Logo from "/public/image/Logo.png";
import React from "react";

const Onboarding2 = ({ prevStep, nextStep }: any) => {
	return (
		<>
			<div className="w-3/4 min-h-screen mt-32 font-plus">
				<button
					onClick={prevStep}
					className="flex border  md:mb-0 mb-6 rounded-xl p-1  w-32 items-start gap-2 text-[#646465]"
				>
					<ChevronLeft /> Go back
				</button>
				<div className=" bg-gradient-to-r from-[#FFFFFF] to-[#F7F8FA] p-3 rounded-lg shadow-lg  max-w-md mx-auto">
					<div className="p-3  border rounded-lg">
						<div className="flex justify-center mb-6 bg-[#EEEEEE] w-10 h-10 items-center p-1 rounded-md m-auto">
							<Image src={Logo} alt="ChatXpress" className="h-5 w-9 " />
						</div>

						<h2 className="text-xl font-normal text-center mb-1">
							Your organisation details
						</h2>
						<p className="text-center text-sm font-normal text-gray-600 mb-6">
							You can always change these later
						</p>

						<div className="space-y-4">
							<div className="space-y-3">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="name"
								>
									Company name
								</label>
								<input
									type="text"
									id="name"
									placeholder="Finsafe Finance"
									className="mt-1 px-4 text-black  py-2 w-full bg-[#F0F1F3] focus:outline-none focus:ring-1 focus:ring-[#F17550] rounded-md outline-none"
								/>
							</div>

							<div className="space-y-3">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="Industry"
								>
									Industry
								</label>
								<div className="flex ">
								<select name="role" className="mt-1 px-4 text-black  py-2 w-full border bg-[#F0F1F3] focus:outline-none focus:ring-1 focus:ring-[#F17550] rounded-md outline-none" id="role">
										<option value="">Select Industry</option>
									</select>
								</div>
							</div>
							<div className="space-y-3">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="size"
								>
									Company size
								</label>
								<div className="flex ">
								<select name="role" className="mt-1 px-4 text-black  py-2 w-full border bg-[#F0F1F3] focus:outline-none focus:ring-1 focus:ring-[#F17550] rounded-md outline-none" id="role">
										<option value="">Select size</option>
									</select>
								</div>
							</div>
							<button
								type="submit"
								onClick={nextStep}
								className="w-full py-2 text-sm mt-4 bg-black font-semibold text-white rounded-md hover:bg-gray-800 focus:outline-none"
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Onboarding2;
