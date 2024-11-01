import Image from "next/image";
import Frame2 from "/public/image/Frame2.png";
import Logo from "/public/image/Logo.png";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Eye } from "lucide-react";

const ResetPassword = () => {
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
						<h2 className="text-xl font-normal text-center mb-2">
							Reset your password
						</h2>
						<p className="text-center font-normal text-sm text-gray-600 mb-6">
							You’re almost there. Enter your new password below and you’re all
							set!
						</p>

						<form className="space-y-4">
							<div className="space-y-3">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="email"
								>
									New password *
								</label>
								<div className="relative">
									<input
										type="password"
										placeholder="Enter password"
										className="mt-1 px-4 py-2 text-black  bg-[#F0F1F3] w-full focus:outline-none focus:ring-1 focus:ring-[#F17550]  rounded-md outline-none"
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
									>
                                        <Eye/>
                                    </button>
								</div>
							</div>
							<div className="space-y-3">
								<label
									className="block text-sm font-medium text-gray-700"
									htmlFor="email"
								>
									Confirm new password *
								</label>
								<div className="relative">
									<input
										type="password"
										placeholder="Enter password"
										className="mt-1 px-4 py-2 text-black  bg-[#F0F1F3] w-full focus:outline-none focus:ring-1 focus:ring-[#F17550]  rounded-md outline-none"
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
									>
                                        <Eye/>
                                    </button>
								</div>
							</div>

							<div className="pb-8">

                            <button
								type="submit"
								className="w-full text-sm py-2 mt-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none"
							>
								Reset password
							</button>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
