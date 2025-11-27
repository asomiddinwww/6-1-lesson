import React from "react";
import logo from "./img/logo.svg";
import sign from "./img/verf.png";
import gog from "./img/google.png";
import face from "./img/face.png";
import apple from "./img/apple.png";
import { Button, Checkbox, Divider, Form, Input, Card } from "antd";
import { LeftOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const gridStyle = {
    width: "33.3%",
    height: "60px",
    textAlign: "center",
  };

  return (
    <div className="p-10 pt-5 w-full">
      <div className="pb-1 flex  max-[718px]:flex max-[718px]:justify-center">
        <img className="w-32 md:w-40" src={logo} alt="" />
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 max-[757px]:flex-col-reverse">
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <div className="pb-10">
            <Link className="text-[14px]" to={"/login"}><LeftOutlined/> Back to login</Link>
          </div>
          <h1 className="text-3xl md:text-4xl !font-bold">Forgot your password?</h1>
          <p className="!pb-5 text-[#313131] text-[15px]">Don’t worry, happens to all of us. Enter your email below to recover your password</p>

          <Form>
            <Form.Item
              name="Email"
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


            <Form.Item label={null} className="!pt-4">
              <Button
                className="!w-full"
                style={{ height: 40 }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>

            </Form.Item>

            <Divider
              className="!text-[12px] !text-[#646464] !pb-5 !pt-10"
              style={{ borderColor: "#313131" }}
            >
              Or login with
            </Divider>

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
        <div className="w-full  md:w-[45%] lg:w-[32%] flex justify-center items-center">
          <img className="w-full max-w-[550px]" src={sign} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
