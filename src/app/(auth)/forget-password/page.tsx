import Image from "next/image";
import Frame2 from "/public/image/Frame2.png";
import Logo from "/public/image/Logo.png";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ForgetPassword = () => {
	return (
		<div className="flex min-h-screen bg-gray-50 font-plus">
			<div className="flex-none w-1/5 relative overflow-x-hidden hidden bg-gradient-to-br from-[#131314] to-[#74747A] m-3 rounded-xl text-white md:flex p-6">
				<div className="">
					<div className="mt-8 absolute bottom-0 -right-44 ">
						<Image
							src={Frame2}
							alt="Decorative Graphic"
							className=" w-3/5 object-cover rounded-lg"
						/>
					</div>
				</div>
			</div>

			<div className="flex-1 flex items-center justify-center p-8">
				<div className=" my-10  max-w-sm justify-center items-center p-5 bg-white rounded-lg shadow-lg">
					<div className="p-3 border rounded-lg">
						<div className="flex justify-center mb-6 bg-[#EEEEEE] w-10 h-10 items-center p-1 rounded-md m-auto">
							<Image src={Logo} alt="ChatXpress" className="h-5 w-9 " />
						</div>
						<h2 className="text-xl text-[#2D2D2D] font-normal text-center mb-2">
							Forgot password?
						</h2>
						<p className="text-center font-normal text-sm text-gray-600 mb-6">
							We’ve got you covered. Just provide your email address and we’ll
							send a reset link to you.
						</p>

						<form className="space-y-4">
							<div className="space-y-3">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="email"
								>
									Email*
								</label>
								<input
									type="email"
									id="email"
									placeholder="Enter email address"
									className="mt-1 px-4 py-2 bg-[#F0F1F3] text-black w-full focus:outline-none focus:ring-1 focus:ring-[#F17550]  rounded-md outline-none "
								/>
							</div>

							<button
								type="submit"
								className="w-full text-sm py-2 mt-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none"
							>
								Send reset link
							</button>
						</form>
					</div>
				</div>

				<p className="text-center text-sm text-gray-600 absolute bottom-5">
					<Link
						href="/login"
						className="text-[#F17550] flex items-center gap-2 hover:underline"
					>
						<ArrowLeft className="h-3 w-6 mr-2" /> Return to login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default ForgetPassword;
