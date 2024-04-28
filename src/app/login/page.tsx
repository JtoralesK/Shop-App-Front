"use client";
import { useFormState } from "react-dom";
import Image from "next/image";
import { authenticate } from "../lib/actions";
import { useState } from "react";
import { SubmitButton } from "@/app/UI/submitButton";
import { FormInputValidate } from "../UI/formInput";
import { inputs } from "../utilities/inputs/login";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const [state, formAction] = useFormState(authenticate, null);
  const [values, setValues] = useState<{ [key: string]: boolean }>({
    email: false,
    password: false,
  });
  const action = async (e: any) => {
    if (values.email && values.password) {
      formAction(e);
    }
  };
  return (
    <>
      <div className="flex flex-row h-screen w-screen">
        <div className="bg-primary h-screen   w-5/12">
          <div className="flex justify-end items-center h-full w-full ">
            <div className="h-3/4 w-2/3 bg-secondary flex-end rounded-l-3xl  border-l-4 border-t-4 border-b-4 border-secondWhite	">
              <div className="w-full h-2/6 px-6">
                <h1 className=" text-3xl font-bold pt-4 pr-3 ">
                  All-in-one-workshop
                </h1>
                <h2 className="pt-3 text-sm text-forth">
                  Write,plan,collaborate, and get organized. Prufer is all you
                  need -in one place
                </h2>
              </div>
              <Image
                src="/loginPicture1.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="bg-secondary h-screen   w-7/12">
          <div className="flex justify-start items-center h-full w-full">
            <div className="h-3/4 w-9/12 bg-firstWhite flex-end rounded-r-3xl border-r-4 border-t-4 border-b-4 border-secondWhite ">
              <div>
                <p className="text-right pr-10 mt-4 text-forth">Sign Up</p>
              </div>
              <div className="flex justify-center">
                <div className=" flex flex-col h-4/6 w-6/12 pt-12">
                  <form
                    action={action}
                    className="flex flex-col gap-6 "
                    name="form-login"
                  >
                    <h2 className="text-3xl text-forth font-medium ">
                      Sign in to prufer
                    </h2>

                    {inputs.map((input) => (
                      <FormInputValidate
                        key={input.id}
                        type={input.type}
                        label={input.label}
                        placeholder={input.placeholder}
                        errorMessage={input.errorMessage}
                        name={input.name}
                        isValid={values[input.name]}
                        setIsValid={(e: boolean) => {
                          setValues({ ...values, [input.name]: e });
                        }}
                        pattern={input.pattern}
                      />
                    ))}
                    <SubmitButton
                      itemState={loading}
                      loadingSubmit={(e) => {
                        setLoading(e);
                      }}
                      name={"Sign in"}
                    />
                    {state && <p className="text-red-500">{state}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
