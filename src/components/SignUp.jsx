import React from "react";
import logo from "./img/logo.svg";
import sign from "./img/sign.png";
import gog from "./img/google.png";
import face from "./img/face.png";
import apple from "./img/apple.png";
import { Button, Checkbox, Divider, Form, Input, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const gridStyle = { width: '33.33%', textAlign: 'center' };
  const navigate = useNavigate();

  const onFinish = (values) => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.emailFull,
      phone: values.phone,
      password: values.password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="p-10 pt-5 w-full">
      <div className="pb-1 flex justify-end max-[718px]:flex max-[718px]:justify-center">
        <img className="w-32 md:w-40" src={logo} alt="" />
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 max-[757px]:flex-col-reverse">
        <div className="w-full md:w-[45%] lg:w-[28%] flex justify-center items-center">
          <img className="w-full max-w-[360px]" src={sign} alt="" />
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <h1 className="text-3xl md:text-4xl !font-bold">Sign up</h1>
          <p className="!pb-5 text-[#313131] text-[15px]">
            Let’s get you all set up so you can access your personal account.
          </p>

          <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <Form.Item
                  name="firstName"
                  rules={[{ required: true, message: "Please input your First Name!" }]}
                  noStyle
                >
                  <Input style={{ flex: 1, height: 40 }} size="large" placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  rules={[{ required: true, message: "Please input your Last Name!" }]}
                  noStyle
                >
                  <Input style={{ flex: 1, height: 40 }} size="large" placeholder="Last Name" />
                </Form.Item>
              </div>
            </Form.Item>

            <Form.Item style={{ marginBottom: 10 }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your Email!" },
                    { type: "email", message: "Please enter a valid email!" }
                  ]}
                  noStyle
                >
                  <Input style={{ flex: 1, height: 40 }} size="large" type="email" placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: "Please input your Phone Number!" }]}
                  noStyle
                >
                  <Input style={{ flex: 1, height: 40 }} size="large" type="number" placeholder="Phone Number" />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item
              name="emailFull"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                className="!w-full"
                style={{ height: 40 }}
                size="large"
                placeholder="Email"
                prefix={<MailOutlined />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password className="!w-full" placeholder="Password" style={{ height: 40 }} />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password className="!w-full" placeholder="Confirm Password" style={{ height: 40 }} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject("You must agree to terms") }]}
            >
              <Checkbox className="text-[14px] font-[600]">
                I agree to all the <span className="text-red-500">Terms</span> and{" "}
                <span className="text-red-500">Privacy Policies</span>
              </Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button className="!w-full" style={{ height: 40 }} type="primary" htmlType="submit">
                Submit
              </Button>
              <div className="pt-4 w-full pb-3 flex items-center justify-center gap-2">
                <p className="font-bold">Already have an account?</p>
                <Link className="font-bold text-red-500" to={"/login"}>Login</Link>
              </div>
            </Form.Item>

            <Divider className="!text-[12px] !text-[#646464] !pb-5" style={{ borderColor: "#313131" }}>
              Or login with
            </Divider>

            <Card className="!w-full">
              <Card.Grid style={gridStyle}><img draggable={false} alt="example" src={gog} /></Card.Grid>
              <Card.Grid style={gridStyle}><img draggable={false} alt="example" src={face} /></Card.Grid>
              <Card.Grid style={gridStyle}><img draggable={false} alt="example" src={apple} /></Card.Grid>
            </Card>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
