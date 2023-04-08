import React, { useContext } from "react";
import "./Uncle.css";
import Cousin from "../../Cousin/Cousin";
import { MoneyContext } from "../Grandpa";

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext)
  return (
    <div>
      <h2>Uncle</h2>
      <p><small>Grandpa Money : {money}</small></p>
      <button onClick={()=>setMoney(money + 1000)}>send 1000tk</button>
      <section className="flex">
        <Cousin>Abir</Cousin>
        <Cousin>Nibir</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
