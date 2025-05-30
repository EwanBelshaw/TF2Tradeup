import NavBar from "../components/nav-bar";
import {Input} from "../components/ui/input"
import { useState } from "react";

interface TradeupData{
  title: string
}

const CreateTradeup: React.FC = () => {

const [tradeupData, setTradeupData] = useState<TradeupData>({
  title: "",
})

const formSubmit = (e: React.FormEvent) => {
  e.preventDefault()
}

  return (
    <div className="min-h-screen bg-orange-300 text-white">
      <NavBar/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Create a new tradeup </h1>
        <form onSubmit={formSubmit}>
          <div>
          <Input id='tradeup-name' className="bg-white border-black text-black" placeholder="Tradeup name"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTradeup;
