import logo from "./img/logo.svg";
import sign from "./img/verff.png";
import { Button, Form, Input, message } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgodVerify = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [codeSent, setCodeSent] = useState(false);
  const [email, setEmail] = useState("");

  // EMAILGA CODE YUBORISH
  const sendCode = async () => {
    const emailValue = form.getFieldValue("email");

    if (!emailValue) return message.error("Email kiriting");

    setEmail(emailValue);

    const res = await fetch("http://localhost:5000/api/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailValue }),
    });

    const data = await res.json();

    if (data.success) {
      message.success("Code sent to your email!");
      setCodeSent(true);
    } else {
      message.error("Failed to send code");
    }
  };

  // CODE TEKSHIRISH
  const verifyCode = async (values) => {
    const res = await fetch("http://localhost:5000/api/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code: values.code }),
    });

    const data = await res.json();

    if (data.success) {
      message.success("Verified!");
      navigate("/login");
    } else {
      message.error("Wrong code!");
    }
  };

  return (
    <div className="p-10 pt-5 w-full">
      <div className="pb-1 flex max-[718px]:flex max-[718px]:justify-center">
        <img className="w-32 md:w-40" src={logo} alt="" />
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 max-[757px]:flex-col-reverse">

        <div className="w-full md:w-[45%] lg:w-[30%]">
          <div className="pb-10">
            <Link className="text-[14px]" to={"/login"}>
              <LeftOutlined /> Back to login
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">
            {codeSent ? "Enter Code" : "Verify Email"}
          </h1>

          <p className="pb-5 text-[#313131] text-[15px]">
            {codeSent
              ? "Enter the 6-digit code sent to your email."
              : "We will send a code to your email."}
          </p>

          <Form form={form} onFinish={codeSent ? verifyCode : sendCode}>

            {!codeSent && (
              <Form.Item name="email" rules={[{ required: true }]}>
                <Input size="large" placeholder="Email" style={{ height: 45 }} />
              </Form.Item>
            )}

            {codeSent && (
              <Form.Item name="code" rules={[{ required: true }]}>
                <Input size="large" placeholder="Enter code" style={{ height: 45 }} />
              </Form.Item>
            )}

            {codeSent && (
              <p className="font-[600] text-[14px] pb-5">
                Didn’t get the code?{" "}
                <span className="text-red-500 cursor-pointer" onClick={sendCode}>
                  Resend
                </span>
              </p>
            )}

            <Form.Item>
              <Button
                className="w-full"
                style={{ height: 40 }}
                type="primary"
                htmlType="submit"
              >
                {codeSent ? "Verify" : "Send Code"}
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

export default ForgodVerify;
