import logo from "./img/logo.svg";
import sign from "./img/setnew.png";
import { Button, Form, Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const SetNewpas = () => {
  return (
    <div className="p-10 pt-5 w-full">
      <div className="pb-1 flex  max-[718px]:flex max-[718px]:justify-center">
        <img className="w-32 md:w-40" src={logo} alt="" />
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 max-[757px]:flex-col-reverse">
        <div className="w-full md:w-[45%] lg:w-[30%]">
          <div className="pb-10">
          
          </div>
          <h1 className="text-3xl md:text-4xl !font-bold">Set a password</h1>
          <p className="!pb-5 text-[#313131] text-[15px]">
           Your previous password has been reseted. Please set a new password for your account.
          </p>

          <Form>
            <Form.Item
              name="CreatePassword"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input.Password
                className="!w-full"
                style={{ height: 45 }}
                size="large"
                placeholder="Create Password"
                type={"password"}
              />
            </Form.Item>
                <Form.Item
              name="Re-enterPassword"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input.Password
                className="!w-full"
                style={{ height: 45 }}
                size="large"
                placeholder="Re-enter Password"
                type={"password"}
              />
            </Form.Item>
            <Form.Item label={null} className="!pt-4">
              <Button
                className="!w-full"
                style={{ height: 40 }}
                type="primary"
                htmlType="submit"
              >
                Set password
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
};

export default SetNewpas;
