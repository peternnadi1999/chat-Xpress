import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Logo from "/public/image/Logo.png";
import React from "react";

const Onboarding1 = ({ prevStep, nextStep }: any) => {
	return (
		<>
			<div className="md:3/4 w-11/12 min-h-screen mt-32 font-plus">
				<button
					onClick={prevStep}
					className="flex border md:mb-0 mb-6 rounded-xl p-1  w-32 items-start gap-2 text-[#646465]"
				>
					<ChevronLeft /> Go back
				</button>
				<div className=" bg-gradient-to-r from-[#FFFFFF] to-[#F7F8FA] p-3 rounded-lg shadow-lg  max-w-md mx-auto">
					<div className="p-3  border rounded-lg">
						<div className="flex justify-center mb-6 bg-[#EEEEEE] w-10 h-10 items-center p-1 rounded-md m-auto">
							<Image src={Logo} alt="ChatXpress" className="h-5 w-9 " />
						</div>

						<h2 className="text-xl text-[#2D2D2D] font-normal text-center mb-1">
							Let’s get to know you
						</h2>
						<p className="text-center text-sm font-normal text-gray-600 mb-6">
							You can always change these later
						</p>

						<div className="space-y-4">
							<div className="space-y-3">
								<label
									className="block text-sm font-semibold text-gray-700"
									htmlFor="name"
								>
									Your name
								</label>
								<input
									type="text"
									id="name"
									placeholder="Clement B"
									className="mt-1 px-4 text-black  py-2 w-full bg-[#F0F1F3] focus:outline-none focus:ring-1 focus:ring-[#F17550] rounded-md outline-none"
								/>
							</div>

							<div className="space-y-3">
								<label
									className="block text-sm font-semibold text-gray-700"
									htmlFor="role"
								>
									Your role
								</label>
								<div className="flex ">
									<select name="role" className="mt-1 px-4 text-black  py-2 w-full border bg-[#F0F1F3] focus:outline-none focus:ring-1 focus:ring-[#F17550] rounded-md outline-none" id="role">
										<option value="">Select role</option>
									</select>
									
								</div>
							</div>
                            <div className="mb-5">

							<button
								type="submit"
								onClick={nextStep}
								className="w-full py-2 mt-4 text-sm bg-black font-semibold text-white rounded-md hover:bg-gray-800 focus:outline-none"
							>
								Continue
							</button>
                            </div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Onboarding1;
