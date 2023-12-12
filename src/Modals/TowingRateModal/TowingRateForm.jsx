import { useState } from "react";
import InputBox from "../../components/Input/InputBox";
import InputSelectBox from "../../components/Input/InputSelectBox";
import StatusToggle from "../../components/Input/StatusToggle";
import { useFormContext } from "react-hook-form";

const TowingRateForm = () => {
  const [status, setStatus] = useState(true);
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="grid grid-cols-2 gap-x-5  items-center gap-y-8 ">
      <InputBox
        register={register}
        message={"Rate is required"}
        labelId="rate"
        labelName="Rate"
        placeholder="Rate"
        name="rate"
        errors={errors}
      ></InputBox>
      <InputBox labelId="rateA" labelName="Rate A" placeholder="Rate A"></InputBox>
      <InputBox labelId="rateB" labelName="Rate B" placeholder="Rate B"></InputBox>
      <InputBox labelId="rateC" labelName="Rate C" placeholder="Rate C"></InputBox>
      <InputBox labelId="rateD" labelName="Rate D" placeholder="Rate D"></InputBox>
      <InputSelectBox
        placeholder={"Country Select"}
        labelId={"country"}
        labelName={"Country"}
      ></InputSelectBox>
      <InputSelectBox
        placeholder={"State Select"}
        labelId={"state"}
        labelName={"State"}
      ></InputSelectBox>
      <InputSelectBox
        placeholder={"City Select"}
        labelId={"city"}
        labelName={"City"}
      ></InputSelectBox>
      <InputSelectBox
        placeholder={"Yard Select"}
        labelId={"yard"}
        labelName={"Yard"}
      ></InputSelectBox>
      <div className="text-[#6b7280] text-sm flex gap-x-8">
        <p>Status</p>
        <StatusToggle onChange={() => setStatus(!status)} status={status}></StatusToggle>
      </div>
    </div>
  );
};

export default TowingRateForm;
