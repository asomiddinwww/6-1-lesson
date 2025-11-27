import logo from "./img/logo.svg";
import sign from "./img/verff.png";
import { Button, Checkbox, Divider, Form, Input, Card } from "antd";
import { LeftOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const ForgodVerify = () => {
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
          <h1 className="text-3xl md:text-4xl !font-bold">Verify code</h1>
          <p className="!pb-5 text-[#313131] text-[15px]">An authentication code has been sent to your email.</p>

          <Form>
            <Form.Item
              name="code"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input.Password
                className="!w-full"
                style={{ height: 45 }}
                size="large"
                placeholder="Enter Code"
                type={"password"}
              />
            </Form.Item>
            <p className="font-[600] text-[14px]">Didn’t receive a code? <span className="text-red-500">Resend</span></p>


            <Form.Item label={null} className="!pt-4">
              <Button
                className="!w-full"
                style={{ height: 40 }}
                type="primary"
                htmlType="submit"
              >
                Verify
              </Button>

            </Form.Item>
          </Form>
        </div>
        <div className="w-full md:w-[45%] lg:w-[32%] flex justify-center items-center">
          <img className="w-full max-w-[550px]" src={sign} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ForgodVerify