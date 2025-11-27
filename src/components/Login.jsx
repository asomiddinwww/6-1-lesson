import React from "react";
import logo from "./img/logo.svg";
import pas from "./img/pas.png";
import gog from "./img/google.png";
import face from "./img/face.png";
import apple from "./img/apple.png";
import { Button, Checkbox, Divider, Form, Input, Card } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const gridStyle = {
    width: "33.3%",
    height:"60px",
    textAlign: "center",
  };

  return (
    <div className="p-10 pt-5 w-full">
      <div className="pb-5 max-[718px]:flex max-[718px]:justify-center">
        <img className="w-32 md:w-40" src={logo} alt="" />
      </div>

      {/* MAIN RESPONSIVE WRAPPER */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 max-[757px]:flex-col-reverse">

        {/* LEFT SIDE */}
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <h1 className="text-3xl md:text-4xl font-bold">Login</h1>
          <p className="!pb-5">Login to access your travelwise account</p>

          <Form
          >
            {/* EMAIL */}
            <Form.Item
              name="Email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input
                className="!w-full"
                style={{ height: 45 }}
                size="large"
                placeholder="Email"
                prefix={<MailOutlined />}
              />
            </Form.Item>

            {/* PASSWORD */}
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                className="!w-full"
                style={{ height: 45 }}
              />
            </Form.Item>

            {/* REMEMBER ME */}
            <Form.Item name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            {/* SUBMIT BUTTON */}
            <Form.Item label={null}>
              <Button
                className="!w-full"
                style={{ height: 45}}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>

              <div className="pt-4 w-full pb-3 flex items-center justify-center gap-2">
                <p className="font-bold">Don’t have an account?</p>
                <Link className="font-bold text-red-500" to={"/signup"}>
                  Sign up
                </Link>
              </div>
            </Form.Item>

            {/* DIVIDER */}
            <Divider
              className="!text-[12px] !text-[#646464] !pb-8"
              style={{ borderColor: "#313131" }}
            >
              Or login with
            </Divider>

            {/* SOCIAL LOGIN */}
            <Card className="!w-full">
              <Card.Grid style={gridStyle}>
                <img draggable={false} alt="example" src={gog} />
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img draggable={false} alt="example" src={face} />
              </Card.Grid>
              <Card.Grid style={gridStyle}>
                <img draggable={false} alt="example" src={apple} />
              </Card.Grid>
            </Card>

          </Form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[45%] lg:w-[38%] flex justify-center items-center">
          <img className="w-full max-w-[450px]" src={pas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
