import React from "react";
import Card from "./Card";
import axios from "axios";
const Data = [
  {
    name: "girls dress",
    amount: 500,
    imgUrl: "https://m.media-amazon.com/images/I/61WefmdNgYL._UY879_.jpg ",
  },
  {
    name: "girls dress",
    amount: 600,
    imgUrl: "https://m.media-amazon.com/images/I/61i-ZAcBrPL._UX679_.jpg ",
  },
];
const Home = () => {
  const checkOutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:5000/api/getkey");
    const {
      data: { order },
    } = await axios.post("http://localhost:5000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "jyoti",
      description: "jyoCart project",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      callback_url: "http://localhost:5000/api/paymentverification",
      prefill: {
        name: "jyoti pal",
        email: "jyoti@gmail.com",
        contact: "6262626262",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <div className="home_container">
      <h1>this is home</h1>

      <div className="card_container">
        {Data.map((item) => (
          <Card item={item} checkOutHandler={checkOutHandler} />
        ))}
      </div>
    </div>
  );
};

export default Home;
