"use client";

import debounce from "lodash/debounce";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DatePickerWithRange } from "./datapicker";
import PassengerSelect from "./passagerSelect";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FormProps {}

import { MdSearch } from "react-icons/md";

import axios from "axios";

interface FormFieldProps {
  placeholder: string;
  className?: string;
}

interface FormFieldProps {
  placeholder: string;
  className?: string;
  onClick: (result: any) => void;
}

const InputField: React.FC<FormFieldProps> = ({
  placeholder,
  className,
  onClick,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchResults = async (searchQuery: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getAirports?query=${searchQuery}`
      );
      setResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      fetchResults(query);
    }
  }, [query]);

  const debouncedFetchResults = useCallback(
    debounce((query: string) => fetchResults(query), 1000),
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowResults(true);
    if (event.target.value.length >= 3) {
      setLoading(true);
    } else {
      setLoading(false);
      setResults([]);
    }

    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedFetchResults(newQuery);
  };

  const handleOptionClick = (result: any) => {
    const formattedValue = `${result.localizedName} (${result.skyId}) - ${result.subtitle}`;
    setShowResults(false);
    setQuery(formattedValue);
    setResults([]);
    onClick(result);
  };

  return (
    <div className={`h-[55px] min-w-[200px] max-w-[200px] ${className}`}>
      <input
        className="border p-[16px] border-gray-300 h-full w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent focus:shadow-field"
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {loading && (
        <div className="loader bg-[#fff9e6] !z-[9999999999] relative center shadow-lg rounded-[8px] !justify-start px-4 py-5 space-x-3">
          <MdSearch className="fill-[#fcbe62]" size={24} />
          <span className="text-[#1B0088] font-[600]">Pesquisando...</span>
        </div>
      )}
      {showResults && (
        <div className="Lista">
          {results &&
            results.data &&
            results.data.map((result: any, index: number) => (
              <div
                className="item-airport hover:bg-[#eeedf9] cursor-pointer"
                key={index}
                onClick={() => handleOptionClick(result)}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    focusable="false"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M10.2341 16.2292C9.49892 16.417 8.90263 16.5069 8.45337 16.5069C6.84419 16.5069 5.55359 15.8371 4.57338 14.4893V14.4485L2.15552 10.5358C2.00032 10.2989 1.95946 10.0375 2.04115 9.74345C2.19635 9.44939 2.40874 9.26969 2.67013 9.18801L4.49167 8.55085C4.67954 8.46916 4.86742 8.45282 5.06346 8.49366C5.25951 8.5345 5.43923 8.61619 5.59443 8.74688L7.41597 10.013L8.83726 11.0422L12.7908 9.66179L7.68554 4.9159C7.44865 4.65451 7.36699 4.4013 7.44867 4.16442C7.50585 3.90303 7.67734 3.73149 7.96324 3.64981L8.00412 3.60898L10.618 2.93916C10.9937 2.83297 11.3205 2.85751 11.6064 3.02087L17.0628 5.91247C17.1935 5.99415 17.2916 6.10851 17.3406 6.27188C17.3978 6.42708 17.3814 6.59046 17.2998 6.74566C17.2181 6.87636 17.1037 6.96618 16.9403 7.02336C16.7851 7.08054 16.6218 7.06421 16.4666 6.98253L11.0509 4.13177H10.9774L9.15584 4.60555L14.3755 9.47388C14.5307 9.62908 14.5878 9.82516 14.5307 10.0702C14.4735 10.2826 14.3428 10.4296 14.1386 10.5031L8.95163 12.3246C8.71475 12.3818 8.52688 12.3492 8.39618 12.243L6.69714 11.0177L4.87561 9.75163C4.8511 9.75163 4.83478 9.7353 4.83478 9.7108L3.41348 10.2254L5.58625 13.7868C6.08453 14.473 6.689 14.9222 7.38331 15.1264C8.07763 15.3388 8.90265 15.3143 9.85018 15.0447L27.0937 9.07364C27.4612 8.94294 27.7879 8.77959 28.082 8.57538C28.3679 8.37933 28.5721 8.1588 28.6783 7.92191C28.7845 7.66053 28.7845 7.36646 28.6783 7.04789C28.6538 6.89269 28.5558 6.72115 28.3842 6.53328C28.2127 6.3454 27.9023 6.23919 27.4531 6.19834C27.0038 6.1575 26.334 6.28005 25.4355 6.57411L20.8448 8.15878C20.6896 8.20779 20.5262 8.19963 20.371 8.11795C20.2158 8.03626 20.1097 7.9219 20.0525 7.75854C19.9953 7.60334 20.0117 7.43996 20.0933 7.28476C20.175 7.12956 20.2894 7.02336 20.4528 6.96618L25.0434 5.3815C26.3095 4.95675 27.3469 4.8506 28.1474 5.06297C28.9479 5.27535 29.5115 5.78992 29.8301 6.60676C30.0669 7.2684 30.0588 7.8729 29.7892 8.42835C29.4216 9.19618 28.6538 9.80063 27.4939 10.2499L10.2504 16.221H10.2341V16.2292ZM18.2636 29.125H2.63747C2.45777 29.125 2.30257 29.0678 2.18005 28.9453C2.05752 28.8227 2.00031 28.692 2.00031 28.5287C2.00031 28.3408 2.06569 28.1938 2.18005 28.0712C2.30257 27.9569 2.4496 27.8916 2.63747 27.8916H18.2636C18.4433 27.8916 18.5985 27.9487 18.7129 28.0712C18.8354 28.1938 18.8926 28.3408 18.8926 28.5287C18.8926 28.6839 18.8354 28.8227 18.7129 28.9453C18.5985 29.0678 18.4515 29.125 18.2636 29.125Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </i>
                <span>
                  {result.localizedName} ({result.skyId}) - {result.subtitle}
                </span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const MainForm: React.FC<FormProps> = () => {
  const router = useRouter();

  const [option, setOption] = useState("ida&volta");
  const [typePlan, setTypePlan] = useState("economy");
  const [passenger, setPassenger] = useState(1);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");
  const [localTo, setLocalTo] = useState("");
  const [localFrom, setLocalFrom] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(
      `oferta-voos?type=${typePlan}&option=${option}&passenger=${passenger}&dateFrom=${dateFrom}&dateTo=${dateTo}&fromId=${fromId}&toId=${toId}&localFrom=${localFrom}&localTo=${localTo}`
    );
  };

  const handleChangeReturn = (value: any) => {
    setOption(value);
  };

  const handleChangeType = (value: any) => {
    setTypePlan(value);
  };

  const handleChangePassenger = (value: any) => {
    const totalPassengers = value.child + value.adult + value.baby;
    setPassenger(totalPassengers);
  };

  const handleDate = (value: any) => {
    setDateFrom(value.from);
    setDateTo(value.to);
  };

  const handleFromClick = (value: any) => {
    setFromId(value.id);
    setLocalFrom(value.local);
  };

  const handleToClick = (value: any) => {
    setToId(value.id);
    setLocalTo(value.local);
  };

  return (
    <div className="mb-[130px]">
      <nav className="h-[55px] w-full center !justify-start">
        <div
          style={{ boxShadow: "inset 0px 0.25rem 0 0 #E95878" }}
          className="bg-background space-x-2 mb-[-16px] h-[70px] center w-[98px] relative rounded-[0px] rounded-tl-[0.5rem] rounded-tr-[0.5rem] pb-[30px] leading-[1.15] pt-[12px] mr-[10px] after:detail"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            focusable="false"
            viewBox="0 0 32 32"
            className="h-[24px] w-[24px]  ml-[0.5rem]"
          >
            <path
              d="M15.0369 17.8496C15.2231 17.7789 15.4235 17.8284 15.624 17.9839C15.7672 18.1182 15.8029 18.3019 15.7313 18.5352L13.7912 23.907L15.9389 23.3911C16.1251 23.3204 16.2397 23.2567 16.2826 23.1861L20.6497 15.9977C20.7428 15.8563 20.8358 15.7786 20.9289 15.7574L27.1717 13.5309C27.816 13.3047 28.2957 12.9796 28.6107 12.5555C28.9257 12.1314 28.9829 11.6719 28.804 11.1701C28.7539 11.0358 28.6823 10.8874 28.5749 10.7248C28.4675 10.5623 28.3028 10.4279 28.0737 10.3149C27.8446 10.2018 27.5153 10.1523 27.1001 10.1594C26.6849 10.1735 26.1336 10.2937 25.4392 10.5198L20.8287 12.1597C20.6926 12.2021 20.5494 12.2021 20.4134 12.1455C20.2774 12.089 20.1844 11.99 20.1342 11.8557C20.0841 11.7002 20.0984 11.5518 20.17 11.4246C20.2416 11.2973 20.3419 11.2125 20.485 11.1701L25.0955 9.53029C27.6156 8.6609 29.1834 9.09913 29.8134 10.8308C30.021 11.4034 30.0568 11.9193 29.9136 12.3858C29.7776 12.8523 29.4984 13.2694 29.0832 13.6369C28.668 14.0045 28.1453 14.3013 27.5225 14.5275L21.4873 16.6833L17.1847 23.7727C17.0487 24.0201 16.7193 24.2392 16.211 24.423L13.4046 25.0733C13.0753 25.144 12.839 25.0733 12.6744 24.8683C12.5097 24.6633 12.4811 24.423 12.567 24.1474L14.3353 19.2208L10.14 20.6627C8.98743 21.0515 7.90642 21.0868 6.89698 20.7617C5.88753 20.4436 5.11433 19.8004 4.55592 18.8462L2.16474 14.6689C1.84258 14.0751 1.99292 13.6652 2.61577 13.439L4.45568 12.7887C4.82795 12.6544 5.1716 12.711 5.49377 12.9584L8.78696 15.3898L12.9106 13.8843L7.67013 8.8164C7.51263 8.61142 7.44105 8.39229 7.46253 8.16611C7.53412 7.93993 7.68447 7.77736 7.91356 7.68548H7.94935L10.5839 6.96453C10.9061 6.85144 11.2283 6.88677 11.5504 7.07055L16.9985 10.018C17.1346 10.0887 17.2205 10.1947 17.2563 10.3431C17.292 10.4916 17.2706 10.6259 17.2061 10.739C17.1345 10.8732 17.0343 10.9651 16.8983 11.0146C16.7623 11.0641 16.6191 11.0499 16.483 10.9793L11.0349 8.00356C11.0135 7.98235 10.9705 7.98235 10.8989 8.00356L8.92298 8.5478L14.2923 13.7147C14.3425 13.7853 14.3783 13.8631 14.4141 13.955C14.4499 14.0469 14.457 14.1388 14.4355 14.2307C14.3854 14.4144 14.2781 14.5417 14.0919 14.6053L8.8872 16.4854C8.67958 16.5349 8.51493 16.5066 8.40038 16.4147L4.7993 13.7783L3.20283 14.3579L5.45798 18.2949C5.87321 19.0512 6.46024 19.5459 7.22627 19.7863C7.9923 20.0266 8.85856 19.9771 9.82504 19.6308L15.0369 17.8496Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-[16px] leading-[0.2rem] text-main !font-[600]">
            Voos
          </span>
        </div>
        <div className="bg-background space-x-2 h-[48px] mb-2 center w-[115px] rounded-[0.5rem] pb-[10px] leading-[1.15] pt-[12px] mr-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            focusable="false"
            viewBox="0 0 32 32"
            className="h-[24px] w-[24px]  ml-[0.5rem] fill-gray-900 opacity-70"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.1397 3.29395C20.5 3.29395 20.7921 3.58602 20.7921 3.94632V6.50412C20.7921 6.68342 20.7183 6.85482 20.588 6.97804C20.4578 7.10126 20.2825 7.16544 20.1035 7.15549C18.6788 7.07634 16.5317 7.41386 14.7604 8.66165C13.2464 9.72826 11.9554 11.4944 11.6517 14.3795C12.1872 14.0949 12.8188 13.8657 13.4788 13.7631C14.6283 13.5843 15.9336 13.7837 16.9773 14.795C17.6226 14.3263 18.5522 13.9104 19.5616 13.7622C20.8031 13.58 22.2299 13.7959 23.4349 14.8654C24.0511 14.4795 24.8944 14.1088 25.8404 13.9788C26.7322 13.8563 27.7188 13.949 28.673 14.4417C28.6294 13.5838 28.5004 12.7336 28.1197 11.8874C27.5622 10.6487 26.4229 9.33874 23.9892 8.10956C23.6675 7.94713 23.5385 7.55474 23.7009 7.23313C23.8634 6.91152 24.2558 6.78248 24.5774 6.94492C27.208 8.27353 28.6008 9.77716 29.3095 11.352C30.0002 12.8869 30.0001 14.413 30 15.671L30 15.7122C30 15.9715 29.8464 16.2062 29.6088 16.31C29.3712 16.4138 29.0947 16.367 28.9044 16.1909C27.9648 15.3209 26.9421 15.1444 26.018 15.2714C25.0682 15.4019 24.231 15.8557 23.768 16.2232C23.4981 16.4374 23.1081 16.4047 22.8776 16.1486C22.3819 15.5979 21.8247 15.2789 21.2525 15.1247V24.2041H25.2041C25.56 24.2041 25.8486 24.5248 25.8486 24.9203C25.8486 25.3158 25.56 25.6365 25.2041 25.6365H20.094L21.5499 27.5238C21.7816 27.8241 21.7503 28.2763 21.48 28.5337C21.2097 28.7911 20.8028 28.7563 20.5711 28.456L18.3961 25.6365H12.1197L9.54598 28.4962C9.29427 28.7759 8.88616 28.7759 8.63444 28.4962C8.38273 28.2166 8.38273 27.7631 8.63444 27.4834L10.2966 25.6365H7.70902C7.47902 25.6365 7.26644 25.5003 7.15121 25.2791L2.08685 15.5595C1.90849 15.2172 2.01364 14.7791 2.32172 14.5809C2.62979 14.3827 3.02412 14.4995 3.20248 14.8419L5.94841 20.1119H15.5358C15.7239 20.1119 15.9027 20.2033 16.0251 20.362L18.989 24.2041H19.9477V15.0288C19.8819 15.0354 19.8163 15.0436 19.751 15.0532C18.6586 15.2135 17.7461 15.7661 17.4018 16.1486C17.2713 16.2936 17.0827 16.3726 16.8878 16.3639C16.6929 16.3552 16.5121 16.2597 16.395 16.1036C15.6534 15.1148 14.6549 14.9006 13.6793 15.0523C12.6618 15.2106 11.767 15.7593 11.4167 16.1486C11.236 16.3494 10.9502 16.418 10.698 16.3213C10.4459 16.2245 10.2794 15.9823 10.2794 15.7122C10.2794 11.6251 11.9069 9.07581 14.009 7.59499C15.8027 6.33146 17.8916 5.87964 19.4873 5.84247V3.94632C19.4873 3.58602 19.7794 3.29395 20.1397 3.29395ZM6.69474 21.5443L8.08064 24.2041H17.2911L15.2393 21.5443H6.69474Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-[16px] leading-[0.2rem] text-gray-900 opacity-70 !font-[400]">
            Pacotes
          </span>
        </div>
        <div className="bg-background space-x-2 h-[48px] mb-2  center w-[115px] rounded-[0.5rem] pb-[10px] leading-[1.15] pt-[12px] mr-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            focusable="false"
            viewBox="0 0 32 32"
            className="h-[24px] w-[24px]  ml-[0.5rem] fill-gray-900 opacity-70"
          >
            <path
              d="M18.0955 27.0406C17.927 27.0406 17.7802 26.9745 17.6484 26.8424C17.5238 26.7102 17.458 26.5632 17.458 26.4017V26.2549C17.458 26.0639 17.5238 25.9098 17.6484 25.7923C17.7802 25.6748 17.927 25.6161 18.0955 25.6161C18.286 25.6161 18.4474 25.6822 18.572 25.8144C18.7039 25.9465 18.7695 26.0933 18.7695 26.2549V26.4017C18.7695 26.5706 18.7039 26.7175 18.572 26.8424C18.4474 26.9745 18.286 27.0406 18.0955 27.0406ZM18.0955 23.3764C17.927 23.3764 17.7802 23.3103 17.6484 23.1854C17.5238 23.0532 17.458 22.9063 17.458 22.7374V22.5979C17.458 22.407 17.5238 22.2529 17.6484 22.1354C17.7802 22.0179 17.927 21.9592 18.0955 21.9592C18.286 21.9592 18.4474 22.0251 18.572 22.1499C18.7039 22.2821 18.7695 22.429 18.7695 22.5979V22.7374C18.7695 22.899 18.7039 23.0532 18.572 23.1854C18.4474 23.3176 18.286 23.3764 18.0955 23.3764ZM14.0518 27.0406C13.8613 27.0406 13.7072 26.9745 13.5753 26.8424C13.4435 26.7102 13.3771 26.5632 13.3771 26.4017V26.2549C13.3771 26.086 13.4435 25.9392 13.5753 25.8144C13.7072 25.6822 13.8613 25.6161 14.0518 25.6161C14.2423 25.6161 14.3961 25.6748 14.5133 25.7923C14.6305 25.9098 14.6886 26.0639 14.6886 26.2549V26.4017C14.6886 26.5706 14.6305 26.7175 14.5133 26.8424C14.3961 26.9745 14.2423 27.0406 14.0518 27.0406ZM14.0518 23.3764C13.8613 23.3764 13.7072 23.3103 13.5753 23.1854C13.4435 23.0532 13.3771 22.9063 13.3771 22.7374V22.5979C13.3771 22.4364 13.4435 22.2821 13.5753 22.1499C13.7072 22.0177 13.8613 21.9592 14.0518 21.9592C14.2423 21.9592 14.3961 22.0179 14.5133 22.1354C14.6305 22.2529 14.6886 22.407 14.6886 22.5979V22.7374C14.6886 22.899 14.6305 23.0532 14.5133 23.1854C14.3961 23.3176 14.2423 23.3764 14.0518 23.3764ZM15.7217 16.1579C14.8425 16.1579 14.0443 15.9376 13.3264 15.497C12.6084 15.0638 12.0444 14.4836 11.6415 13.7713C11.2385 13.0663 11.0334 12.288 11.0334 11.4582C11.0334 10.9809 11.0841 10.5697 11.1793 10.2099C11.2233 10.063 11.3114 9.9601 11.4433 9.88667C11.5752 9.81324 11.7074 9.79132 11.854 9.81334C12.0225 9.86475 12.1391 9.95277 12.2124 10.085C12.2783 10.2171 12.2936 10.3494 12.2496 10.4962C12.2276 10.6578 12.1979 10.8193 12.1759 10.9735C12.1539 11.1277 12.1394 11.2893 12.1394 11.4509C12.1394 12.4496 12.4909 13.294 13.1868 13.9916C13.8828 14.6892 14.7253 15.0417 15.7217 15.0417C16.7107 15.0417 17.5605 14.6892 18.2565 13.9916C18.9525 13.294 19.3046 12.4496 19.3046 11.4509C19.3046 11.069 19.2605 10.7385 19.1579 10.4595C19.114 10.3126 19.1289 10.173 19.2095 10.0335C19.29 9.88663 19.4072 9.80597 19.5464 9.78394C19.7076 9.73988 19.8612 9.75462 19.9857 9.8354C20.1176 9.91617 20.1911 10.0189 20.2204 10.1364C20.3376 10.6137 20.3957 11.047 20.3957 11.4509C20.3957 12.3247 20.1763 13.1252 19.7367 13.8521C19.2972 14.5718 18.7253 15.1371 18.0147 15.541C17.3113 15.9595 16.5495 16.1579 15.7217 16.1579ZM11.3553 8.30059C11.2381 8.30059 11.1431 8.27849 11.0698 8.22708C10.9087 8.10959 10.8209 7.95547 10.8209 7.76454V3.77719C10.8209 3.58627 10.8942 3.44669 11.0334 3.35123C11.2019 3.18968 11.5535 2.98401 12.1029 2.74903C12.6451 2.5067 13.2239 2.33046 13.8393 2.19828C14.4547 2.0661 15.0843 2 15.7217 2C15.8609 2 15.9859 2.05138 16.0958 2.16153C16.1984 2.27168 16.2568 2.4039 16.2568 2.5728C16.2568 2.71232 16.1984 2.83716 16.0958 2.94731C15.9859 3.05012 15.8609 3.10884 15.7217 3.10884C14.989 3.10884 14.2862 3.19704 13.6268 3.37328C12.9675 3.54952 12.3958 3.77712 11.9269 4.0635V6.86868C13.0845 6.36934 14.3517 6.11966 15.7217 6.11966C17.0917 6.11966 18.3596 6.36934 19.5171 6.86868V3.77719C19.5171 3.61564 19.5682 3.47608 19.6781 3.37328C19.788 3.26313 19.9195 3.21175 20.088 3.21175C20.2345 3.21175 20.3523 3.26313 20.4622 3.37328C20.5721 3.47608 20.6232 3.61564 20.6232 3.77719V7.76454C20.6232 7.95547 20.5354 8.10959 20.3742 8.22708C20.1837 8.34458 20.0075 8.3593 19.839 8.26383C18.5423 7.57357 17.1649 7.2285 15.7217 7.2285C14.2784 7.2285 12.9083 7.57357 11.6043 8.26383C11.5823 8.28586 11.5461 8.30059 11.4948 8.30059H11.3553ZM22.2787 15.9155C23.2018 15.585 23.9419 15.5924 24.4987 15.9522C25.0555 16.312 25.3337 16.9363 25.3337 17.8395V29.4346C25.3337 29.4786 25.3261 29.53 25.3115 29.574C25.2968 29.6254 25.2827 29.6547 25.2607 29.6841L25.187 29.7944C25.165 29.8384 25.1286 29.8751 25.0847 29.8971C25.0334 29.9191 24.9893 29.9412 24.938 29.9632H24.689C24.5938 29.9632 24.4986 29.9192 24.4107 29.8238C24.2935 29.7577 24.2347 29.6474 24.2347 29.5079V17.8395C24.2347 16.8702 23.7147 16.5691 22.6744 16.951L7.77307 22.3555V29.464C7.77307 29.6108 7.72199 29.7357 7.61209 29.8385C7.5022 29.9486 7.37711 30 7.23792 30C7.07674 30 6.93786 29.9486 6.82797 29.8385C6.7254 29.7357 6.66699 29.6108 6.66699 29.464V21.893C6.66699 21.8489 6.67397 21.7976 6.6813 21.7535C6.68863 21.7095 6.71083 21.6726 6.73281 21.6506C6.80607 21.5551 6.89373 21.489 7.01828 21.4376L22.2787 15.9155Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-[16px]  leading-[0.2rem] text-gray-900 opacity-70 !font-[400]">
            Hotéis
          </span>
        </div>
      </nav>
      <form
        onSubmit={handleSubmit}
        className="z-10 p-4 max-w-[1120px] mx-auto bg-background rounded-[14px] pr-10"
      >
        <div className="center w-full !justify-start h-[55px] space-x-5 pl-3">
          <Select defaultValue="ida&volta" onValueChange={handleChangeReturn}>
            <SelectTrigger>
              <SelectValue className="leading-[1.15]" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  className="border-dashed border-b-[1px] border-gray-300"
                  value="ida"
                >
                  Somente ida
                </SelectItem>
                <SelectItem value="ida&volta">Ida de Volta</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select defaultValue="economy" onValueChange={handleChangeType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="premiumeco">Premium Economy</SelectItem>
                <SelectItem value="premiumbu">Premium Business</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <PassengerSelect onChange={handleChangePassenger} />
        </div>
        <div className="flex">
          <div className="flex-1 mr-4 center">
            <InputField placeholder="Origem" onClick={handleFromClick} />
            <InputField
              placeholder="Destino"
              onClick={handleToClick}
              className="ml-5"
            />
          </div>
          <div>
            <DatePickerWithRange onChange={handleDate} />
          </div>
          <button
            type="submit"
            className="bg-main_secondary button-form center ml-[16px]"
          >
            Procurar
          </button>
        </div>
        <a className="my-[1.3rem] !justify-start text-[1rem] leading-[1.5] underline center !font-[600] text-[#4658DF]">
          <span>Compre voos com nosso assistente virtual no WhatsApp</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            focusable="false"
            viewBox="0 0 32 32"
            className="h-[16px] w-[16px]  ml-[0.5rem]"
          >
            <path
              d="M29.3337 2.375V13.575H26.667V7.10701L13.8403 20.575L12.0003 18.643L24.827 5.175H18.667V2.375H29.3337ZM13.3337 2.375V5.175H5.33366V27.575H26.667V19.175H29.3337V30.375H2.66699V2.375H13.3337Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </form>
    </div>
  );
};

export default MainForm;
