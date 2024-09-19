import bg from "@/assets/icons/illustration.svg";
import logo from "@/assets/icons/logo-avgust.svg";
import { CustomInput, PasswordInput } from "@/localComponents";
import { Button } from "@/components/ui/button";
import { Formik, Form } from "formik";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PatternFormat } from "react-number-format";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <section className="h-screen flex">
      <div className="login-left p-6 w-[60%] h-full bg-slate-50 flex flex-col justify-between ">
        {/* <h1 className=" text-center text-[48px] font-bold mt-10">
          "AVGUST" <br /> boshqaruv tizimi
        </h1> */}
        <img src={bg} alt="" className="" />
      </div>
      <div className="login-right  w-[40%] bg-white p-6 flex flex-col mt-60">
        <div className="form-wrapper flex flex-col items-center">
          <div className=" text-3xl max-w-[200px] mb-3">
            <img src={logo} alt="" />
          </div>
          {/* <h2 className="mb-3 text-3xl font-semibold">
            {isLogin ? "Tizimga kirish" : "Ro'yxatdan o'tish"}
          </h2> */}

          {isLogin ? (
            <Formik
              initialValues={{
                login: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleChange, errors, touched }) => (
                <Form className="w-full max-w-[500px] ">
                  <div className="flex flex-col gap-4 mb-4">
                    <CustomInput
                      label="Login"
                      type="text"
                      name="login"
                      value={values.login}
                      onChange={handleChange}
                      error={errors.login}
                      touched={touched.login}
                      placeholder="Loginni kiriting..."
                    />

                    <CustomInput
                      label="Parol"
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      error={errors.password}
                      touched={touched.password}
                      placeholder="Parolni kiriting..."
                    />
                  </div>
                  <Button variant="destructive" className="w-full">
                    Tizimga kirish
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <Formik
              initialValues={{
                full_name: "",
                role: "",
                login: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleChange, errors, touched, setFieldValue }) => (
                <Form className="w-full max-w-[500px]">
                  <div className="flex flex-col gap-4 mb-4">
                    <CustomInput
                      label="F.I.O"
                      type="text"
                      name="full_name"
                      value={values.full_name}
                      onChange={handleChange}
                      error={errors.full_name}
                      touched={touched.full_name}
                      placeholder="F.I.O ni kiriting"
                    />

                    <CustomInput
                      label="Rol"
                      error={errors.role}
                      touched={touched.role}
                    >
                      <Select>
                        <SelectTrigger className="">
                          <SelectValue placeholder="Rolni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </CustomInput>

                    <CustomInput
                      label="Login"
                      touched={touched.login}
                      error={errors.login}
                    >
                      <PatternFormat
                        name="login"
                        placeholder="Telefon raqam (+998 ## ### ## ##)"
                        format="+998 (##) ###-##-##"
                        value={values.login}
                        onValueChange={({ value }) => {
                          setFieldValue("login", value);
                        }}
                        valueIsNumericString={true}
                        className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7D97F4] disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </CustomInput>

                    <PasswordInput
                      label="Parol"
                      touched={touched.password}
                      error={errors.password}
                      value={values.password}
                      onChange={handleChange}
                      name="password"
                      placeholder="Parolni kiriting..."
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="w-full"
                  >
                    Tizimga ro'yxatdan o'tish
                  </Button>
                </Form>
              )}
            </Formik>
          )}

          <p
            className="underline mt-3 text-blue-400 cursor-pointer"
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Ro'yxatdan o'tish" : "Tizimga kirish"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
