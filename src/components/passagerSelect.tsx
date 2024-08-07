"use client";

import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  className,
}) => {
  const handleIncrement = () => onChange(value + 1);
  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className={`flex items-center ${className}`}>
      <button
        onClick={handleDecrement}
        className=" text-gray-600 hover:bg-gray-200 focus:outline-none"
      >
        <IoRemoveCircleOutline
          size={20}
          strokeWidth={1}
          className="text-main_secondary opacity-85"
        />
      </button>
      <span className="text-[#000000] mt-[4px] mr-[1rem] ml-[0.8rem] h-[24px] text[18px] leading-[22px]">
        {value}
      </span>
      <button
        onClick={handleIncrement}
        className=" text-gray-600 hover:bg-gray-200 focus:outline-none"
      >
        <IoAddCircleOutline
          size={20}
          strokeWidth={1}
          className="text-main_secondary opacity-85"
        />
      </button>
    </div>
  );
};

const PassengerSelect = ({ onChange }: any) => {
  const [quantities, setQuantities] = useState({
    child: 0,
    adult: 1,
    baby: 0,
  });

  const totalPassengers = quantities.child + quantities.adult + quantities.baby;

  const handleQuantityChange = (
    type: "child" | "adult" | "baby",
    value: number
  ) => {
    setQuantities((prev) => ({ ...prev, [type]: value }));
    onChange(quantities);
  };

  return (
    <Select defaultValue="adult">
      <SelectTrigger>
        <div className="flex items-center justify-between w-full">
          <span>
            {totalPassengers} passageiro{totalPassengers !== 1 ? "s" : ""}
          </span>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="p-2 w-[331px]">
          <div className="flex items-center justify-between w-full h-[56px] px-3 border-[1px] border-[#fff] border-solid border-b-[#d6d6d6]">
            <div className="flex items-center">
              <svg
                viewBox="0 0 14 18"
                width="14px"
                height="18px"
                stroke="#B30F3B"
                color="#B30F3B"
                stroke-width="0.5"
                className=" !fill-main_secondary mr-5"
              >
                <path d="M3.75498 1.5669L3.75408 1.56783C3.18571 2.15529 2.89263 2.87042 2.89263 3.68949C2.89263 4.51458 3.18605 5.22452 3.76043 5.81208C4.3359 6.40075 5.03291 6.69659 5.84334 6.69659C6.65336 6.69659 7.3508 6.40101 7.92126 5.81159C8.49623 5.2232 8.78313 4.51305 8.78313 3.68949C8.78313 2.87155 8.49626 2.15558 7.92078 1.5669L7.91987 1.56598C7.34562 0.984602 6.64945 0.682391 5.83788 0.682391C5.02745 0.682391 4.33045 0.978227 3.75498 1.5669ZM0.298802 17.6072L0.298908 17.6071L0.29267 17.6011C0.269858 17.5794 0.25 17.544 0.25 17.475V11.7152C0.25 11.6688 0.260656 11.6387 0.275562 11.6156C0.290198 11.5929 0.316837 11.5649 0.367006 11.5355L11.7894 7.3286L11.7895 7.32863L11.7932 7.32717C12.394 7.09479 12.8526 7.12718 13.1993 7.35661C13.5578 7.60659 13.75 7.99431 13.75 8.58418V17.4471C13.75 17.485 13.7394 17.5179 13.7012 17.557C13.6732 17.5856 13.6345 17.6045 13.5799 17.6045C13.5153 17.6045 13.4973 17.5888 13.4815 17.5701C13.4444 17.5263 13.4316 17.4874 13.4316 17.4471V8.58418C13.4316 8.19899 13.3194 7.86347 13.0437 7.654L13.0439 7.65373L13.0333 7.6465C12.7149 7.42936 12.3167 7.47767 11.9013 7.64803L0.731618 11.7821L0.568394 11.8426V12.0166V17.475C0.568394 17.5459 0.55058 17.5811 0.519593 17.6128C0.49734 17.6355 0.461903 17.6547 0.398285 17.6547C0.366537 17.6547 0.336941 17.6462 0.298802 17.6072ZM5.83788 7.03377C4.93538 7.03377 4.17557 6.71027 3.53419 6.05416C2.89263 5.39788 2.57424 4.61795 2.57424 3.68949C2.57424 2.76641 2.89277 1.98095 3.53419 1.32482C4.17542 0.668866 4.94063 0.345215 5.83788 0.345215C6.44516 0.345215 6.99433 0.504771 7.50648 0.821079C8.0168 1.13962 8.40662 1.54954 8.68548 2.05262C8.96423 2.55553 9.10152 3.09962 9.10152 3.68949C9.10152 4.31447 8.94441 4.87853 8.63485 5.39765C8.32212 5.92209 7.92077 6.32582 7.43108 6.60985C6.94094 6.89415 6.4115 7.03377 5.83788 7.03377Z"></path>
              </svg>
              <div className="center-col !items-start">
                <span className="leading-[19px] mt=[0.6rem]">Adulto</span>
                <p className="text-[0.75rem] text-[#303030] leading-[14px] mt-[0.2rem]">
                  12 Anos ou mais
                </p>
              </div>
            </div>
            <NumberInput
              value={quantities.adult}
              onChange={(value) => handleQuantityChange("adult", value)}
            />
          </div>
          <div className="flex items-center justify-between w-full h-[56px] px-3 border-[1px] border-[#fff] border-solid border-b-[#d6d6d6]">
            <div className="flex items-center">
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                color="#B30F3B"
                className=" !fill-main_secondary mr-5"
              >
                <path d="M0.717566 15.629C0.717566 15.737 0.684316 15.8262 0.613035 15.892C0.541754 15.9624 0.451437 15.9953 0.346891 15.9953C0.25185 15.9953 0.17106 15.9624 0.104532 15.892C0.0332505 15.8215 0 15.737 0 15.629V6.8135C0 6.6773 0.0237139 6.5646 0.0712346 6.48006C0.118755 6.39552 0.190124 6.34383 0.280414 6.32974L5.35559 4.60143C5.74526 4.47932 6.05412 4.46519 6.28697 4.55442C6.51982 4.64835 6.69094 4.84562 6.80023 5.1509L8.07851 8.92695L9.36155 6.18882C9.3758 6.14185 9.39963 6.10428 9.4329 6.0714C9.46141 6.04322 9.50883 6.01979 9.57061 6.001L14.2277 4.3431C14.6173 4.2069 14.95 4.2539 15.2304 4.49342C15.5108 4.73295 15.5963 5.04291 15.487 5.42333L14.0898 9.72534C14.0566 9.81927 13.9996 9.885 13.9141 9.93196C13.8285 9.97893 13.7334 9.98365 13.6241 9.95547C13.5481 9.94138 13.4816 9.8898 13.4246 9.80526C13.3723 9.72072 13.358 9.62674 13.3913 9.51872L14.7885 5.21671C14.817 5.12278 14.7979 5.05694 14.7171 5.00998C14.6411 4.96301 14.5555 4.96301 14.4605 5.00998L9.94128 6.62098L8.38259 10.0494C8.36834 10.1104 8.34462 10.1574 8.31136 10.1856C8.27809 10.2185 8.23531 10.2373 8.17353 10.2561H8.14975L8.12608 10.2796H8.10229H8.00728C7.91223 10.2796 7.83621 10.2466 7.77443 10.1762C7.71265 10.1057 7.6793 10.0353 7.6793 9.95547L6.1206 5.39983C6.05883 5.29181 5.99234 5.22609 5.92105 5.20261C5.84977 5.17913 5.74049 5.19785 5.58368 5.25891L0.717566 6.94031V15.629ZM4.95637 2.30475C4.95637 2.87304 4.75678 3.35211 4.36236 3.74193C3.96794 4.13174 3.48798 4.329 2.93199 4.329C2.35699 4.329 1.87236 4.13174 1.47794 3.74193C1.08352 3.35211 0.883935 2.87304 0.883935 2.30475C0.883935 1.75056 1.08352 1.2809 1.47794 0.891082C1.87236 0.501267 2.35699 0.304011 2.93199 0.304011C3.49273 0.304011 3.96794 0.501267 4.36236 0.891082C4.75678 1.2809 4.95637 1.75056 4.95637 2.30475ZM4.23405 2.30475C4.23405 1.95251 4.10583 1.64726 3.84922 1.39365C3.59261 1.14003 3.28839 1.0132 2.92723 1.0132C2.55657 1.0132 2.23819 1.14003 1.98633 1.39365C1.73447 1.64726 1.6015 1.94781 1.6015 2.30475C1.6015 2.67108 1.72972 2.98586 1.98633 3.23478C2.24294 3.48839 2.55657 3.61511 2.92723 3.61511C3.28364 3.61511 3.59261 3.48839 3.84922 3.23478C4.10583 2.98116 4.23405 2.67108 4.23405 2.30475ZM5.70248 15.9953H5.60746C5.53143 15.9953 5.46017 15.9717 5.3984 15.9248C5.33662 15.8778 5.2986 15.8262 5.2796 15.7652L3.64955 11.5054L3.02236 15.6947C3.00811 15.7886 2.9558 15.8637 2.87027 15.9248C2.78473 15.9858 2.69441 16.0094 2.60412 15.9953C2.50908 15.9624 2.43305 15.9107 2.37128 15.8356C2.3095 15.7604 2.28578 15.6759 2.30004 15.5819L2.99858 10.9324C3.01284 10.8385 3.05561 10.768 3.1269 10.7117C3.19818 10.66 3.26944 10.6319 3.35023 10.6319H3.83971C3.91574 10.6319 3.98699 10.6553 4.04877 10.7023C4.11055 10.7492 4.14856 10.8009 4.16757 10.862L5.95911 15.5115C5.99237 15.6055 5.98761 15.6947 5.94959 15.7887C5.91158 15.8826 5.84509 15.9436 5.75005 15.9718L5.72626 15.9953H5.70248ZM11.2197 15.5586C11.2339 15.6666 11.2149 15.7604 11.1626 15.8356C11.1103 15.9107 11.0343 15.9671 10.9393 15.9953H10.868C10.7587 15.9953 10.6732 15.9717 10.6114 15.9248C10.5496 15.8778 10.5116 15.8027 10.4974 15.6947L10.0079 13.2103H7.91214C7.8171 13.2103 7.73631 13.1773 7.66978 13.1068C7.60325 13.0364 7.56525 12.9566 7.56525 12.8673C7.56525 12.7593 7.5985 12.6701 7.66978 12.6044C7.74106 12.5386 7.82185 12.5011 7.91214 12.5011H10.312C10.388 12.5011 10.464 12.5292 10.5353 12.5809C10.6066 12.6326 10.6494 12.7077 10.6636 12.8016L11.2197 15.5586ZM8.63447 1.63788C8.62021 1.71302 8.58219 1.77414 8.51566 1.82111C8.45389 1.86807 8.37786 1.89151 8.28282 1.89151H8.21158C8.11654 1.87742 8.04527 1.82572 7.98825 1.74119C7.93598 1.65665 7.92169 1.5768 7.95495 1.50166C8.06425 1.05548 8.2306 0.707948 8.45394 0.454333C8.67729 0.200719 8.9529 0.0504474 9.2808 0.00348174C9.49939 -0.0106079 9.70375 0.0175485 9.89859 0.0973901C10.0934 0.172535 10.274 0.289944 10.445 0.444931C10.6018 0.33691 10.773 0.257064 10.9583 0.205402C11.1436 0.15374 11.3384 0.125597 11.5428 0.125597C11.7614 0.125597 11.9752 0.158459 12.1842 0.228908C12.3933 0.299356 12.5835 0.393338 12.7546 0.515448C12.8781 0.346372 13.0539 0.214832 13.2772 0.125597C13.5006 0.0316657 13.7334 -0.0059068 13.9663 0.00818289C14.2942 0.0551485 14.5698 0.20542 14.7931 0.459035C15.0165 0.712649 15.1828 1.06019 15.2921 1.50636C15.3254 1.5815 15.3112 1.66605 15.2589 1.74589C15.2067 1.83043 15.1305 1.88212 15.0355 1.89621H14.9642C14.8692 1.89621 14.7979 1.87277 14.7409 1.82581C14.6886 1.77884 14.6506 1.71772 14.6364 1.64258C14.5746 1.35139 14.4748 1.12127 14.3465 0.952196C14.2134 0.78312 14.0614 0.693844 13.8903 0.675058C13.7667 0.660968 13.6384 0.68452 13.5053 0.745575C13.3723 0.806631 13.2821 0.881771 13.2393 0.975702V0.999208H13.2155C13.3391 1.16828 13.434 1.34671 13.4958 1.53927C13.5576 1.73183 13.591 1.9338 13.591 2.14984C13.591 2.70404 13.3914 3.1737 12.9969 3.56351C12.6025 3.95333 12.1178 4.15058 11.5428 4.15058C10.982 4.15058 10.5068 3.95333 10.1124 3.56351C9.71799 3.1737 9.5184 2.69934 9.5184 2.14984C9.5184 1.9338 9.55165 1.72241 9.62293 1.51576C9.69421 1.30911 9.79872 1.10714 9.93653 0.905185C9.76545 0.736109 9.58492 0.665674 9.39009 0.68446C9.19525 0.707943 9.03843 0.801925 8.91488 0.971001C8.8531 1.04615 8.79604 1.14471 8.75327 1.25743C8.70575 1.37014 8.66773 1.49698 8.63447 1.63788ZM12.8734 2.14044C12.8734 1.77411 12.7451 1.45945 12.4884 1.21053C12.2318 0.956916 11.9182 0.830081 11.5475 0.830081C11.1911 0.830081 10.8823 0.956916 10.6257 1.21053C10.3691 1.46414 10.2407 1.77411 10.2407 2.14044C10.2407 2.49268 10.3691 2.79793 10.6257 3.05155C10.8823 3.30516 11.1864 3.432 11.5475 3.432C11.9182 3.432 12.2366 3.30516 12.4884 3.05155C12.7451 2.79793 12.8734 2.49738 12.8734 2.14044ZM13.5957 15.676C13.5815 15.7699 13.5387 15.845 13.4674 15.9061C13.3961 15.9671 13.3248 16 13.2441 16H13.1965C13.0872 15.9859 13.0016 15.9389 12.9399 15.8638C12.8781 15.7886 12.8544 15.7041 12.8686 15.6101L13.2155 12.8251C13.2298 12.75 13.2726 12.6796 13.3438 12.6185C13.4151 12.5574 13.4959 12.5245 13.5862 12.5245H15.1449L14.7029 10.9841C14.6696 10.8761 14.6791 10.7821 14.7266 10.6976C14.7742 10.613 14.8454 10.5566 14.9357 10.5237C15.045 10.5096 15.1401 10.5238 15.2256 10.5707C15.3112 10.6177 15.3681 10.6834 15.4014 10.7774L15.9859 12.7781C16.0144 12.9143 16.0002 13.027 15.9384 13.1115C15.8767 13.1961 15.7768 13.2384 15.6342 13.2384H13.8855L13.5957 15.676Z"></path>
              </svg>
              <div className="center-col !items-start">
                <span className="leading-[19px] mt=[0.6rem]">Criança</span>
                <p className="text-[0.75rem] text-[#303030] leading-[14px] mt-[0.2rem]">
                  de 2 a 11 Anos
                </p>
              </div>
            </div>
            <NumberInput
              value={quantities.child}
              onChange={(value) => handleQuantityChange("child", value)}
            />
          </div>
          <div className="flex items-center justify-between w-full h-[56px] px-3 ">
            <div className="flex items-center">
              <svg
                viewBox="0 0 12 15"
                width="12"
                height="15"
                color="#B30F3B"
                className=" !fill-main_secondary mr-5"
              >
                <path d="M6.01584 0.794401C5.58398 0.794401 5.22166 0.938261 4.91776 1.2315C4.61386 1.52474 4.46426 1.8873 4.46426 2.31383C4.46426 2.74568 4.61386 3.10292 4.91776 3.39615C5.21633 3.68939 5.58398 3.83338 6.01584 3.83338C6.4317 3.83338 6.78879 3.68939 7.08736 3.39615C7.38593 3.10292 7.54086 2.74035 7.54086 2.31383C7.54086 1.88197 7.39126 1.52474 7.08736 1.2315C6.78346 0.943592 6.42637 0.794401 6.01584 0.794401ZM6.01584 4.64379C5.36005 4.64379 4.80551 4.41452 4.35232 3.96133C3.8938 3.50815 3.66973 2.95896 3.66973 2.3245C3.66973 1.68471 3.89914 1.14098 4.35232 0.682459C4.80551 0.223942 5.36539 0 6.01584 0C6.65563 0 7.19949 0.229274 7.65801 0.682459C8.11653 1.14098 8.3406 1.68471 8.3406 2.3245C8.3406 2.95896 8.11119 3.50815 7.65801 3.96133C7.19949 4.41452 6.6503 4.64379 6.01584 4.64379ZM3.04598 8.23194V8.62114C3.04598 9.61814 3.31256 10.4072 3.84572 10.983C4.37887 11.5588 5.10414 11.8468 6.01584 11.8468C6.92754 11.8468 7.64733 11.5535 8.16982 10.967C8.69232 10.3805 8.95915 9.59681 8.95915 8.6158V8.2266H3.04598V8.23194ZM2.7367 14.7898C2.6514 14.9284 2.5395 14.9977 2.40088 14.9977C2.36889 14.9977 2.33186 14.9924 2.29987 14.987C2.26255 14.9764 2.23045 14.9658 2.19313 14.9498C2.09183 14.8805 2.02766 14.7951 2.00101 14.6938C1.97435 14.5925 1.98518 14.4859 2.03849 14.3846L3.50989 11.8041C2.6675 11.047 2.24624 9.98603 2.24624 8.62647V7.85342C2.24624 7.73079 2.28394 7.63479 2.36391 7.55482C2.44388 7.47485 2.52906 7.43754 2.63569 7.43754H9.37463C9.47593 7.43754 9.56645 7.47485 9.64642 7.55482C9.7264 7.63479 9.76409 7.73079 9.76409 7.85342V8.62647C9.76409 9.95404 9.34806 11.0043 8.527 11.7774L10.0255 14.3846C10.0788 14.4912 10.0891 14.5925 10.0624 14.6938C10.0358 14.7951 9.97173 14.8805 9.8651 14.9498C9.83311 14.9658 9.80116 14.9764 9.7745 14.987C9.74785 14.9977 9.7159 14.9977 9.68391 14.9977C9.52929 14.9977 9.40683 14.9284 9.32153 14.7898L7.87669 12.236C7.3222 12.5292 6.70361 12.6732 6.01584 12.6732C5.32806 12.6732 4.70414 12.5292 4.15499 12.236L2.7367 14.7898ZM9.70526 6.32319C9.63594 6.44049 9.52404 6.50451 9.36943 6.50451H2.63049C2.47587 6.50451 2.36397 6.44582 2.29466 6.32319L0.305728 3.17227C0.236417 3.08696 0.215029 2.98563 0.241687 2.87367C0.268345 2.76171 0.321952 2.68175 0.407257 2.62844C0.631184 2.48982 0.822892 2.52711 0.972177 2.72971L2.85958 5.69944H9.13461L11.022 2.72971C11.1766 2.52177 11.3634 2.48982 11.5927 2.62844C11.678 2.68175 11.7369 2.76171 11.7582 2.87367C11.7849 2.98563 11.7635 3.08696 11.6942 3.17227L9.70526 6.32319Z"></path>
              </svg>
              <div className="center-col !items-start">
                <span className="leading-[19px] mt=[0.6rem]">Bebes</span>
                <p className="text-[0.75rem] text-[#303030] leading-[14px] mt-[0.2rem]">
                  Menores de 2 Anos
                </p>
              </div>
            </div>
            <NumberInput
              value={quantities.baby}
              onChange={(value) => handleQuantityChange("baby", value)}
            />
          </div>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PassengerSelect;
