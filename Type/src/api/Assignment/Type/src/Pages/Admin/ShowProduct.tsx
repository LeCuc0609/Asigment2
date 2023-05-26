import React from 'react'
import { Space, Table, Tag, Image, Button, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Delete } from '../../API/product';

interface DataType {
  key: string;
  name: string;
  price: number;
  description: string;
  image: string;
  // category: string;
};

const ShowProduct = (props: any) => {
  const OnRemove = (id: any) => {
    props.OnRemove(id);
  }
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    // {
    //   title: 'category',
    //   key: 'category',
    //   dataIndex: 'category',
    // },
    {
      title: 'image',
      key: 'image',
      dataIndex: 'image',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* onClick={() => (window.location.href = '/Admin/')}  */}
          <Button type="link" style={{ backgroundColor: "#19A7CE", color: "white" }} onClick={() => (window.location.href = '/Admin/Update/' + record.key)}>Sửa</Button>
          <Button type='default' style={{ backgroundColor: "#FC2947", color: 'white' }} onClick={() => OnRemove(record.key)} >Xóa</Button>
        </Space>
      ),
    },
  ];
  const data = props.product.data?.map((item: any) => {
    return {
      key: item._id,
      name: item.name,
      price: item.price,
      description: item.description,
      category: item.category,
      image: <Image width={100} src={item.image} />
    }
  });
  // console.log(data);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 3, showQuickJumper: true }} />
    </div>
  )
}

export default ShowProduct