import React, { useState } from "react";
import { Button, Divider, Drawer, Form, Input, Space } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addMovieNight } from "@/redux/slices/MovieNightSlice";

export const AddDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const form = Form.useFormInstance();

  const dispatch = useDispatch();

  const showDrawer = () => {
    setOpen(true);
  };

  const onFinish = (values: any) => {
    const newMovie = { ...values, id: Date.now() };
    dispatch(addMovieNight(newMovie));
    onClose();
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        iconPosition="end"
        icon={<PlusCircleOutlined />}
        onClick={showDrawer}
      >
        Add Movie Night
      </Button>
      <Drawer
        title="Add New Movie Night"
        placement={"right"}
        width={500}
        onClose={onClose}
        open={open}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ title: "" }}
        >
          <Form.Item
            label="Movie Title"
            name="title"
            rules={[{ required: true, message: "Please enter a movie title" }]}
          >
            <Input placeholder="Enter movie title" />
          </Form.Item>
          <Divider className="!my-3 !p-0" />
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
};
