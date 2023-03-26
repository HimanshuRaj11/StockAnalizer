import {MdDelete} from 'react-icons/md'
import {FaComment} from 'react-icons/fa'
import {BsCalendarMinusFill,BsBank2} from 'react-icons/bs'
import {FaBitcoin} from 'react-icons/fa'
import {HiBanknotes} from 'react-icons/hi'
import DatePicker from "react-datepicker";

import {IoBookSharp} from "react-icons/io"
import {GrMoney} from "react-icons/gr"
import {GiClothes} from "react-icons/gi"
import {SiFreelancersi,SiYoutube,SiYourtraveldottv} from "react-icons/si"
import {MdWork,MdAssuredWorkload,MdMedicalServices,MdSubscriptions} from "react-icons/md"

const salary = MdWork;
const freelancing = SiFreelancersi;
const investments = GrMoney;
const stocks = GrMoney;
const bitcoin = FaBitcoin;
const bank = BsBank2;
const youtube = SiYoutube;
const other = HiBanknotes;
export const Icons = () => {
  return (
    salary, freelancing, investments, stocks, bitcoin, bank, youtube, other
  );
};
