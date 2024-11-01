"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "/public/image/Logo.png";
import {  ChevronLeft } from "lucide-react";
import Onboarding1 from "@/components/Onboarding1";
import Onboarding2 from "@/components/Onboarding2";
import Onboarding3 from "@/components/Onboarding3";

const Onboarding = () => {
	const [step, setStep] = useState(1);
	const totalSteps = 4;

	const nextStep = () => {
		if (step < totalSteps) {
			setStep(step + 1);
		}
	};

	const prevStep = () => {
		if (step > 1) {
			setStep(step - 1);
		}
	};

	return (
		<div className="flex flex-col font-plus items-center min-h-screen justify-center bg-gray-100">
			<div className="w-3/4 h-3 fixed top-5 rounded-2xl bg-gray-200">
				<div
					className="h-full rounded-2xl bg-[#F17550]"
					style={{ width: `${(step / totalSteps) * 100}%` }}
				></div>
			</div>

				{step === 1 && (
                    <>
					<div className="min-h-screen mt-32">
			<div className=" w-11/12   bg-gradient-to-r from-[#FFFFFF] to-[#F7F8FA] p-3 rounded-lg shadow-lg  max-w-md mx-auto">
						<div className="p-3 border text-center rounded-lg">
							<div className="flex justify-center mb-6 bg-[#EEEEEE] w-10 h-10 items-center p-1 rounded-md m-auto">
								<Image src={Logo} alt="ChatXpress" className="h-5 w-9 " />
							</div>

							<h1 className="text-xl font-normal mb-2">
								Welcome to ChatXpress!
							</h1>
							<p className="text-gray-600 text-sm font-normal mb-6">
								To personalize your experience, we'd like to ask you a few
								questions.
							</p>
							<div className="flex justify-center gap-4">
								<button
									onClick={nextStep}
									className="bg-gray-900 text-sm font-medium w-full text-white py-2 px-6 rounded-lg"
								>
									Get started
								</button>
							</div>
						</div>
                        </div>
						</div>
					</>
				)}

				{step === 2 && (
					<Onboarding1 prevStep={prevStep} nextStep={nextStep} />
				)}

				{step === 3 && (
					<Onboarding2 prevStep={prevStep} nextStep={nextStep} />
				)}
                {step === 4 && (
					<Onboarding3 prevStep={prevStep} />
				)}
			</div>
		// </div>
	);
};

export default Onboarding;
