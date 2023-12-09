import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { useState } from "react";
import SearchBtn from "../../components/Buttons/SearchBtn";
import { AiOutlinePlus } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { countrysApi } from "../../features/countrys/countrysApi";
import { customersApi } from "../../features/customers/customersApi";
import { useForm, Controller } from "react-hook-form";
import { BounceLoader } from "react-spinners";

const customStyles = {
  content: {
    top: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5px",
    maxHeight: "650px",
    maxWidth: "1150px",
    transition: "top 3s ease-in",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Controls the overlay background color
    backdropFilter: "blur(2px)",
    zIndex: "20",
  },
};

// eslint-disable-next-line react/prop-types
const CustomersModal = ({ modalIsOpen, openModal }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [countryLoading, setCountryLoading] = useState(true);
  const [stateLoading, setStateLoading] = useState(false);
  const [countryOptions, setCountryOptions] = useState([]);
  const [statesOptions, setStateOptions] = useState([]);
  const [selectCountry, setSelectCountry] = useState("");
  const [selectState, setSelectState] = useState("");
  const [cityLoading, setCityLoading] = useState(false);
  const [selectCity, setSelectCity] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [savedLoading, setSavedLoading] = useState(false);

  const { formState, handleSubmit, control, setError, clearErrors, reset } = useForm();

  useEffect(() => {
    dispatch(countrysApi.endpoints.getCountry.initiate())
      .unwrap()
      .then((countryData) => {
        if (countryData?.data.length === 0) {
          setCountryOptions([]);
        } else {
          const options = countryData?.data.map((country) => {
            return { value: { id: country?.id, name: country?.name }, label: country?.name };
          });
          setCountryLoading(false);
          setCountryOptions(options);
        }
      })
      .catch((er) => {
        console.log(er);
      });
  }, [dispatch]);

  useEffect(() => {
    if (selectCountry) {
      setStateLoading(true);
      dispatch(countrysApi.endpoints.getState.initiate(selectCountry?.id))
        .then((states) => {
          if (states?.data?.data.length === 0) {
            setStateOptions([]);
          } else {
            const options = states.data.data.map((state) => {
              return { value: { id: state.id, name: state.name }, label: state.name };
            });
            setStateLoading(false);
            setStateOptions(options);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [selectCountry, dispatch]);

  useEffect(() => {
    if (selectState) {
      setCityLoading(true);
      dispatch(countrysApi.endpoints.getCity.initiate(selectState.id))
        .unwrap()
        .then((citys) => {
          const options = citys?.data.map((city) => {
            return { value: { id: city.id, name: city.name }, label: city.name };
          });
          setCityLoading(false);
          setCityOptions(options);
        })
        .catch((er) => console.log(er));
    }
  }, [selectState, dispatch]);

  const onSubmit = (datas) => {
    setSavedLoading(true);
    const data = {
      customer_name: customerName,
      company_name: companyName,
      username: userName,
      email: email,
      phone: phone,
      city: selectCity.name,
      city_id: selectCity.id,
      state: selectState.name,
      state_id: selectState.id,
      password: password,
      country_id: selectCountry.id,
    };

    dispatch(customersApi.endpoints.createCustomer.initiate(data))
      .unwrap()
      .then((res) => {
        if (res.status === "SUCCESS") {
          setCompanyName("");
          setCustomerName("");
          setPassWord("");
          setUserName("");
          setSelectCity("");
          setSelectCountry("");
          setSelectState("");
          setPhone("");
          setEmail("");
          setSavedLoading(false);
          closeModal(false, true);
        }
      })
      .catch((error) => {
        if (error?.data?.errors) {
          Object.keys(error?.data?.errors).forEach((field) => {
            if (error?.data?.errors[field]) {
              setError(field, { message: error?.data?.errors[field][0] });
            } else {
              clearErrors(field);
            }
          });
        }
        setSavedLoading(false);
      });
  };

  const closeModal = (close, success) => {
    setCompanyName("");
    setCustomerName("");
    setPassWord("");
    setUserName("");
    setSelectCity("");
    setSelectCountry("");
    setSelectState("");
    setPhone("");
    setEmail("");
    reset();
    openModal(close, success);
  };

  const handleClick = () => {
    if (!savedLoading) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal ">
        <div className="flex justify-between text-[#1f2937] mb-7 ">
          <p>Add Customer</p>
          <button onClick={() => closeModal(false, false)}>
            <RxCross1 className="text-xl"></RxCross1>
          </button>
        </div>

        <div className="overflow-scroll h-[60vh] ">
          <main className="grid grid-cols-2 gap-y-4  gap-x-5 text-sm mx-3 mt-2 mb-2">
            <div className="customer-modal-inp-content ">
              <label htmlFor="customerId">Customer ID</label>
              <input
                type="text"
                id="customerId"
                placeholder="Customer ID"
                className={`customer-modal-input`}
              />
            </div>
            {/* password start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="password">Password</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36 relative">
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "The password field is required.",
                    minLength: {
                      value: 6,
                      message: "password must be at least 6 characters long",
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setPassWord(e.target.value);
                        }}
                        value={password ? password : ""}
                        type="password"
                        id="password"
                        placeholder="Password"
                        className={`customer-modal-input ${
                          formState?.errors?.password ? "input-text-error border-red-500" : ""
                        }`}
                      />
                    </>
                  )}
                ></Controller>
                {formState?.errors?.password && (
                  <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
                )}
                {formState?.errors?.password && (
                  <p className="text-red-500 mt-1">{formState?.errors?.password?.message}</p>
                )}
              </div>
            </div>
            {/* password end */}
            {/* username start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="username">Username</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36 relative">
                <Controller
                  name="username"
                  control={control}
                  rules={{
                    required: "The username field is required.",
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setUserName(e.target.value);
                        }}
                        value={userName ? userName : ""}
                        type="text"
                        id="username"
                        placeholder="Username"
                        className={`customer-modal-input ${
                          formState?.errors?.username && "input-text-error border-red-500"
                        }`}
                      />
                    </>
                  )}
                ></Controller>

                {formState?.errors?.username && (
                  <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
                )}

                {formState?.errors?.username && (
                  <p className="text-red-500 mt-1">{formState?.errors?.username?.message}</p>
                )}
              </div>
            </div>
            {/* user name end */}
            {/* email start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="email">Email</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36 relative">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "The email field is required.",
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setEmail(e.target.value);
                        }}
                        value={email}
                        type="email"
                        id="email"
                        placeholder="Email"
                        className={`customer-modal-input ${
                          formState?.errors?.email && "input-text-error border-red-500"
                        }`}
                      />
                    </>
                  )}
                ></Controller>

                {formState?.errors?.email && (
                  <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
                )}

                {formState?.errors?.email && (
                  <p className="text-red-500 mt-1">{formState?.errors?.email?.message}</p>
                )}
              </div>
            </div>
            {/* email end */}
            {/* customer name start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="customerName">Customer Name</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36 relative">
                <Controller
                  name="customer_name"
                  control={control}
                  rules={{
                    required: "The customer name field is required.",
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setCustomerName(e.target.value);
                        }}
                        value={customerName ? customerName : ""}
                        type="text"
                        id="customerName"
                        placeholder="Customer Name"
                        className={`customer-modal-input ${
                          formState?.errors?.customer_name && "input-text-error border-red-500"
                        }`}
                      />
                    </>
                  )}
                ></Controller>
                {formState?.errors?.customer_name && (
                  <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
                )}

                {formState?.errors?.customer_name && (
                  <p className="text-red-500 mt-1">{formState?.errors?.customer_name?.message}</p>
                )}
              </div>
            </div>
            {/* customer name end */}
            {/* company name start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="companyName">Company Name</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36 relative">
                <Controller
                  name="company_name"
                  control={control}
                  rules={{
                    required: "The company name field is required.",
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setCompanyName(e.target.value);
                        }}
                        value={companyName ? companyName : ""}
                        type="text"
                        id="companyName"
                        placeholder="Company Name"
                        className={`customer-modal-input ${
                          formState?.errors?.company_name && "input-text-error border-red-500"
                        }`}
                      />
                    </>
                  )}
                ></Controller>
                {formState?.errors?.company_name && (
                  <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
                )}

                {formState?.errors?.company_name && (
                  <p className="text-red-500 mt-1">{formState?.errors?.company_name?.message}</p>
                )}
              </div>
            </div>
            {/* company name end */}
            {/* phone start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="phone">Phone</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36 relative">
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: "The phone field is required.",
                  }}
                  render={({ field }) => (
                    <>
                      <input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setPhone(e.target.value);
                        }}
                        value={phone ? phone : ""}
                        type="text"
                        id="phone"
                        placeholder="Phone"
                        className={`customer-modal-input ${
                          formState?.errors?.phone && "input-text-error border-red-500"
                        }`}
                      />
                    </>
                  )}
                ></Controller>
                {formState?.errors?.phone && (
                  <MdErrorOutline className="absolute top-2 right-2 text-red-500"></MdErrorOutline>
                )}

                {formState?.errors?.phone && (
                  <p className="text-red-500 mt-1">{formState?.errors?.phone?.message}</p>
                )}
              </div>
            </div>
            {/* phone end */}
            <div className="customer-modal-inp-content">
              <label htmlFor="phoneUae">Phone UAE</label>
              <input
                type="text"
                id="phoneUae"
                placeholder="Phone UAE"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="trnUsa">TRN USA</label>
              <input
                type="text"
                id="trnUsa"
                placeholder="TRN USA"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="trnUae">TRN UAE</label>
              <input
                type="text"
                id="trnUae"
                placeholder="TRN UAE"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="address1">Address1</label>
              <input
                type="text"
                id="address1"
                placeholder="Address 1"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="address2">Address2</label>
              <input
                type="text"
                id="address2"
                placeholder="Address 2"
                className={`customer-modal-input`}
              />
            </div>
            {/* country start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="country">Country</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36">
                <Controller
                  name="country"
                  control={control}
                  rules={{
                    required: "The country field is required",
                  }}
                  render={({ field }) => (
                    <>
                      <Select
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setSelectCountry(e?.value);
                          if (!e?.value) {
                            setSelectState("");
                            setSelectCity("");
                          }
                        }}
                        value={
                          selectCountry
                            ? {
                                value: { id: selectCountry.id, name: selectCountry.name },
                                label: selectCountry.name,
                              }
                            : ""
                        }
                        options={countryOptions}
                        isLoading={countryLoading}
                        isClearable={true}
                      />
                    </>
                  )}
                ></Controller>

                {formState?.errors?.country && (
                  <p className="text-red-500 mt-1">{formState?.errors?.country?.message}</p>
                )}
              </div>
            </div>
            {/* coutnry end */}
            {/* state start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="state">State</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36">
                <Controller
                  name="state"
                  control={control}
                  rules={{
                    required: "The state field is required",
                  }}
                  render={({ field }) => (
                    <>
                      <Select
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setSelectState(e?.value);
                          if (!e?.value) {
                            setSelectCity("");
                          }
                        }}
                        value={
                          selectState
                            ? {
                                value: { id: selectState.id, name: selectState.name },
                                label: selectState.name,
                              }
                            : ""
                        }
                        options={statesOptions}
                        isLoading={stateLoading}
                        isClearable={true}
                      />
                    </>
                  )}
                ></Controller>
                {formState?.errors?.state && (
                  <p className="text-red-500 mt-1">{formState?.errors?.state?.message}</p>
                )}
              </div>
            </div>
            {/* state end */}
            {/* city start */}
            <div className="customer-modal-inp-content">
              <label htmlFor="city">City</label>
              <div className="xl:w-96 md:w-64 sm:w-48 w-36">
                <Controller
                  name="city"
                  control={control}
                  rules={{
                    required: "The city field is required",
                  }}
                  render={({ field }) => (
                    <>
                      <Select
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setSelectCity(e?.value);
                        }}
                        value={
                          selectCity
                            ? {
                                value: { id: selectCity.id, name: selectCity.name },
                                label: selectCity.name,
                              }
                            : ""
                        }
                        options={cityOptions}
                        isLoading={cityLoading}
                        isClearable={true}
                      />
                    </>
                  )}
                ></Controller>
                {formState?.errors?.city && (
                  <p className="text-red-500 mt-1">{formState?.errors?.city?.message}</p>
                )}
              </div>
            </div>
            {/* city end */}
            <div className="customer-modal-inp-content">
              <label htmlFor="zipcode">Zip Code</label>
              <input
                type="text"
                id="zipcode"
                placeholder="Zip Code"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="otheremail">Other Email</label>
              <input
                type="email"
                id="otheremail"
                placeholder="Other Email"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="notes">Note</label>
              <textarea
                type="text"
                id="customerId"
                placeholder="Notes"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="fax">Fax</label>
              <input type="text" id="fax" placeholder="Fax" className={`customer-modal-input`} />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="category">Category</label>
              <select name="" id="" className="customer-modal-input">
                <option value="">Select Category</option>
                <option value="A">A</option>
                <option value="D">B</option>
                <option value="D">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="buyerid">Buyer ID</label>
              <textarea type="text" id="buyerid" className={`customer-modal-input`} />
            </div>
            <div className="flex gap-x-52 items-center">
              <span className="text-[#4b5563]">Status</span>
              <div className="flex items-center space-x-2">
                <label
                  className={`relative inline-block w-11 h-4 rounded-full ${
                    checked ? "bg-green-800" : "bg-gray-100"
                  } border border-gray-400`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                  <span
                    className={`slider absolute cursor-pointer w-3 h-3  ${
                      checked ? "bg-white" : "bg-gray-500"
                    } rounded-full transition-transform duration-500  transform ${
                      checked ? "translate-x-7" : ""
                    }`}
                  ></span>
                </label>
              </div>
            </div>
          </main>
        </div>
        <div onClick={handleClick} className="flex justify-end mt-5 relative ">
          <SearchBtn
            name={"Save"}
            loading={savedLoading}
            icon={<AiOutlinePlus className="font-extrabold text-base"></AiOutlinePlus>}
          ></SearchBtn>
          {savedLoading && (
            <BounceLoader color="#e3e3d0" size={25} className="absolute right-8 top-1" />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default CustomersModal;
