import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";
import Select from "react-select";
import { useState } from "react";
import SearchBtn from "../components/Buttons/SearchBtn";
import { AiOutlinePlus } from "react-icons/ai";

const customStyles = {
  content: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5px",
    maxHeight: "650px",
    maxWidth: "1300px",
  },
};

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// eslint-disable-next-line react/prop-types
const CustomersModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Example Modal">
        <div className="flex justify-between text-[#1f2937] mb-9 ">
          <p>Add Customer</p>
          <button onClick={() => setModalIsOpen(false)}>
            <RxCross1 className="text-xl"></RxCross1>
          </button>
        </div>
        <div className="overflow-scroll h-[60vh]">
          <main className="grid grid-cols-2 gap-y-4  gap-x-5 text-sm mx-3">
            <div className="customer-modal-inp-content ">
              <label htmlFor="customerId">Customer ID</label>
              <input
                type="text"
                id="customerId"
                placeholder="Customer ID"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className={`customer-modal-input`}
              />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="customerName">Customer Name</label>
              <input type="text" id="customerName" className={`customer-modal-input`} />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" id="companyName" className={`customer-modal-input`} />
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                className={`customer-modal-input`}
              />
            </div>
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
            <div className="customer-modal-inp-content">
              <label htmlFor="country">Country</label>
              <div className="md:w-96 w-48">
                <Select options={options} />
              </div>
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="state">State</label>
              <div className="md:w-96 w-48">
                <Select options={options} />
              </div>
            </div>
            <div className="customer-modal-inp-content">
              <label htmlFor="city">City</label>
              <div className="md:w-96 w-48">
                <Select options={options} />
              </div>
            </div>
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

        <div className="flex justify-end  mt-5  ">
          <SearchBtn
            name={"Save"}
            icon={<AiOutlinePlus className="font-extrabold text-base"></AiOutlinePlus>}
          ></SearchBtn>
        </div>
      </Modal>
    </div>
  );
};

export default CustomersModal;
