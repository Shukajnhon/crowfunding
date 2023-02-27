import React from "react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import Button from "../components/button/Button";
import {Checkbox} from "../components/checkbox";
import FormGroup from "../components/common/FormGroup";
import {Input} from "../components/input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup.string().required("Please enter this field"),
    email: yup
      .string()
      .email("Not an email")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password must be 8 characters")
      .max(15, "Max 15 characters"),
  })
  .required();

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: {isValid, isSubmitting, errors},
  } = useForm({resolver: yupResolver(schema), mode: "onSubmit"});
  console.log(errors);

  const [acceptTerm, setAcceptTerm] = useState(false);

  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
    // console.log("clicked");
  };

  const handleSignUp = (value) => {
    console.log(value);

    // if (isValid) {
    //   console.log(value);
    // }
  };

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 text-text3 lg:text-sm">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 border gap-x-3 bg-strock border-b-strock rounded-[10px] mb-5">
        <img srcSet="./icon-google.png 2x" alt="icon-google" />
        <span className="text-base font-semibold text-text2">
          Sign up with google
        </span>
      </button>
      <p className="mb-4 text-xs font-normal text-center cursor-pointer lg:text-sm lg:mb-8 text-text2">
        Or sign up with email
      </p>

      <form onSubmit={handleSubmit(handleSignUp)}>
        {/* fullName */}
        <FormGroup>
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            control={control}
            name="fullName"
            placeholder="Peter"
            error={errors?.fullName?.message}
          ></Input>
        </FormGroup>

        {/* email*/}
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors?.email?.message}
          ></Input>
        </FormGroup>

        {/* password */}
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type="password"
            placeholder="Create a password"
            error={errors?.password?.message}
          ></Input>
        </FormGroup>

        {/* Checkbox */}
        <div className="flex items-start mb-5 gap-x-5">
          {/* <span className="inline-block w-5 h-5 border rounded border-b-text4"></span> */}
          <Checkbox checked={acceptTerm} onClick={handleToggleTerm} name="term">
            <p className="flex-1 text-sm text-text2">
              I agree to the{" "}
              <span className="underline cursor-pointer text-secondary">
                Terms of Use
              </span>{" "}
              and have read and understand the{" "}
              <span className="underline cursor-pointer text-secondary">
                Privacy policy.
              </span>
            </p>
          </Checkbox>
        </div>

        <Button type="submit" className="w-full bg-primary">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
