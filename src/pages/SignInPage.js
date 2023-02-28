import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import FormGroup from "../components/common/FormGroup";
import {Input} from "../components/input";
import Label from "../components/label/Label";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import useToggleValue from "../hooks/useToggleValue";
import {Button, ButtonGoogle} from "../components/button";

const schema = yup
  .object({
    email: yup.string().email().required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password must be 8 characters")
      .max(15, "Max 15 characters"),
  })
  .required();

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({resolver: yupResolver(schema), mode: "onSubmit"});

  const {value: showPassword, handleToggleValue: handleTogglePassword} =
    useToggleValue();

  const handleSignIn = (values) => {
    console.log(values);
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:mb-8 text-text3 lg:text-sm">
        Dont have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>

      <ButtonGoogle text="Sign in with google"></ButtonGoogle>

      <form onSubmit={handleSubmit(handleSignIn)}>
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

        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter Password"
            error={errors?.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>

        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium cursor-pointer text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>

        <Button type="submit" className="w-full bg-primary">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
