import { useEffect, useState } from "react";
import InputBox from "../../components/Input/InputBox";
import InputSelectBox from "../../components/Input/InputSelectBox";
import StatusToggle from "../../components/Input/StatusToggle";
import { useFormContext, Controller } from "react-hook-form";
import { countrysApi, useGetCountryQuery } from "../../features/countrys/countrysApi";
import { useDispatch } from "react-redux";
import { useGetLocationQuery } from "../../features/search/searchApi";

const TowingRateForm = () => {
  const [status, setStatus] = useState(true);
  const [selectCountry, setSelectCountry] = useState("");
  const [selectState, setSelectState] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectYard, setSelectYard] = useState("");
  const [optionsCountry, setOptionsCountry] = useState([]);
  const [optionsState, setOptionsState] = useState([]);
  const [optionsCity, setOptionsCity] = useState([]);
  const [optionsYard, setOptionYard] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState({ stateLoading: false, cityLoading: false });
  const { data: countrys, isLoading: countryLoading } = useGetCountryQuery();
  const { data: yard, isLoading: yardLoading } = useGetLocationQuery();
  const {
    register,
    formState: { errors },
    control,
    setError,
    setValue,
  } = useFormContext();

  // get country
  useEffect(() => {
    if (countrys?.data) {
      const options = countrys.data.map((country) => ({
        value: { id: country.id, name: country.name },
        label: country.name,
      }));
      setOptionsCountry(options);
    }
  }, [countrys]);

  // get state
  useEffect(() => {
    if (selectCountry) {
      dispatch(countrysApi.endpoints.getState.initiate(selectCountry.id))
        .unwrap()
        .then((data) => {
          const options = data.data.map((item) => ({
            value: { id: item.id, name: item.name },
            label: item.name,
          }));
          setOptionsState(options);
          setLoading({ ...loading, stateLoading: false });
        })
        .catch((er) => {
          console.log(er);
        });
    }
  }, [selectCountry, dispatch]);

  // get city
  useEffect(() => {
    if (selectState) {
      dispatch(countrysApi.endpoints.getCity.initiate(selectState.id))
        .unwrap()
        .then((data) => {
          const options = data.data.map((item) => ({
            value: { id: item.id, name: item.name },
            label: item.name,
          }));
          setOptionsCity(options);
          setLoading({ ...loading, cityLoading: false });
        })
        .catch((er) => console.log(er));
    }
  }, [selectState, dispatch]);

  // get yard
  useEffect(() => {
    if (yard?.data) {
      const options = yard.data.map((item) => ({
        value: { id: item.id, name: item.name },
        label: item.name,
      }));
      setOptionYard(options);
    }
  }, [yard]);

  return (
    <div className="grid grid-cols-2 gap-x-5  items-center gap-y-8 ">
      <InputBox
        register={register}
        message={"The Rate field is required"}
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
      <Controller
        name="country"
        control={control}
        rules={{
          required: "The Country field is required",
        }}
        render={({ field }) => (
          <InputSelectBox
            placeholder={"Country Select"}
            labelId={"country"}
            labelName={"Country"}
            options={optionsCountry}
            isLoading={countryLoading}
            value={selectCountry}
            errors={errors}
            control={control}
            name={"country"}
            onChange={(e) => {
              field.onChange(e);
              if (e?.value) {
                setSelectCountry(e.value);
                setLoading({ ...loading, stateLoading: true });
              } else {
                setSelectCountry("");
                setSelectState("");
                setSelectCity("");
                setOptionsState([]);
                setOptionsCity([]);
                setError("city", { message: "The City field is required" });
                setError("state", { message: "The State field is required" });
              }
            }}
          ></InputSelectBox>
        )}
      ></Controller>

      <Controller
        name="state"
        control={control}
        rules={{
          required: "The State field is required",
        }}
        render={({ field }) => (
          <InputSelectBox
            onChange={(e) => {
              field.onChange(e);
              if (e?.value) {
                setSelectState(e.value);
                setLoading({ ...loading, cityLoading: true });
              } else {
                setSelectState("");
                setSelectCity("");
                setOptionsCity([]);
                setError("city", { message: "The City field is required" });
              }
            }}
            value={selectState}
            errors={errors}
            isLoading={loading.stateLoading}
            options={optionsState}
            placeholder={"State Select"}
            labelId={"state"}
            labelName={"State"}
            name={"state"}
          ></InputSelectBox>
        )}
      ></Controller>
      <Controller
        name="city"
        control={control}
        rules={{
          required: "The City field is required",
        }}
        render={({ field }) => (
          <InputSelectBox
            onChange={(e) => {
              field.onChange(e);
              if (e?.value) {
                setSelectCity(e.value);
              } else {
                setSelectCity("");
              }
            }}
            options={optionsCity}
            value={selectCity}
            isLoading={loading.cityLoading}
            errors={errors}
            placeholder={"City Select"}
            labelId={"city"}
            labelName={"City"}
            name={"city"}
          ></InputSelectBox>
        )}
      />
      <Controller
        name="yard"
        control={control}
        rules={{
          required: "The Yard field is required",
        }}
        render={({ field }) => (
          <InputSelectBox
            onChange={(e) => {
              field.onChange(e);
              if (e?.value) {
                setSelectYard(e.value);
              } else {
                setSelectYard("");
              }
            }}
            name={"yard"}
            value={selectYard}
            errors={errors}
            isLoading={yardLoading}
            options={optionsYard}
            placeholder={"Yard Select"}
            labelId={"yard"}
            labelName={"Yard"}
          ></InputSelectBox>
        )}
      />

      <div className="text-[#6b7280] text-sm flex gap-x-8">
        <p>Status</p>
        <Controller
          name="status"
          control={control}
          defaultValue={true}
          render={({ field }) => (
            <StatusToggle
              field={field}
              name={"status"}
              onChange={(e) => {
                field.onChange(e);
                setValue("status", !status);
                setStatus(!status);
              }}
              status={status}
            ></StatusToggle>
          )}
        ></Controller>
      </div>
    </div>
  );
};

export default TowingRateForm;
