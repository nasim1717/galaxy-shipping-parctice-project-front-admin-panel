import { useEffect, useState } from "react";
import Select from "react-select";
import { countrysApi, useGetCountryQuery } from "../../features/countrys/countrysApi";
import { useDispatch } from "react-redux";

const options = [];

const ExportTerminal = () => {
  const [terminalCountry, setTerminalCountry] = useState("");
  const [termianlState, setTerminalState] = useState("");
  const [terminalPartOf, setTerminalPartOf] = useState("");
  const [destinationCountry, setDesetinationCountry] = useState("");
  const [destinationState, setDestinationState] = useState("");
  const [destinationPartOf, setDestinationPartOf] = useState("");
  const [allCountrys, setAllCountrys] = useState([]);
  const [terminalAllStates, setTerminalAllStates] = useState([]);
  const [destinationsAllStates, setDestinationAllSates] = useState([]);
  const [searchLoading, setSearchLoading] = useState({
    terminalStateLoading: false,
    destinationStateLoading: false,
  });
  const { data: countrys, isLoading } = useGetCountryQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (countrys?.data) {
      const options = countrys?.data.map((country) => ({
        value: { id: country.id, value: country.name },
        label: country.name,
      }));
      setAllCountrys(options);
    }
  }, [countrys?.data]);

  const stateSearch = (searchCountryId, checkSetState) => {
    dispatch(countrysApi.endpoints.getState.initiate(searchCountryId))
      .unwrap()
      .then((data) => {
        console.log(data);
        const options = data?.data?.map((state) => ({
          value: { id: state.id, value: state.name },
          label: state.name,
        }));
        if (checkSetState === "terminal") {
          setTerminalAllStates(options);
          setSearchLoading({ ...searchLoading, terminalStateLoading: false });
        } else if (checkSetState === "destination") {
          setDestinationAllSates(options);
          setSearchLoading({ ...searchLoading, destinationStateLoading: false });
        }
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {/* terminal start */}
        <div className="space-y-3">
          <p>Terminal</p>
          <div className="export-modal-inp-content">
            <label htmlFor="TerminalCountry">Country</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Select
                onChange={(e) => {
                  if (e?.value) {
                    setTerminalCountry(e?.value);
                    stateSearch(e.value.id, "terminal");
                    setSearchLoading({ ...searchLoading, terminalStateLoading: true });
                  } else {
                    setTerminalCountry("");
                  }
                }}
                value={
                  terminalCountry
                    ? {
                        value: { id: terminalCountry.id, value: terminalCountry.value },
                        label: terminalCountry.value,
                      }
                    : {
                        value: { id: "", value: "" },
                        label: "Select Country...",
                      }
                }
                options={allCountrys}
                isClearable={true}
                isLoading={isLoading}
              ></Select>
            </div>
          </div>
          <div className="export-modal-inp-content">
            <label htmlFor="TerminalState">State</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Select
                options={terminalAllStates}
                isClearable={true}
                isLoading={searchLoading.terminalStateLoading}
              ></Select>
            </div>
          </div>
          <div className="export-modal-inp-content">
            <label htmlFor="TerminalPortofloading">Port of loading</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Select options={options} isClearable={true}></Select>
            </div>
          </div>
        </div>
        {/* terminal end */}
        {/* destination start */}
        <div className="space-y-3">
          <p>Destination</p>
          <div className="export-modal-inp-content">
            <label htmlFor="DestinationCountry">Country</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Select
                onChange={(e) => {
                  if (e?.value) {
                    setDesetinationCountry(e?.value);
                    stateSearch(e.value.id, "destination");
                    setSearchLoading({ ...searchLoading, destinationStateLoading: true });
                  } else {
                    setDesetinationCountry("");
                  }
                }}
                value={
                  destinationCountry
                    ? {
                        value: { id: destinationCountry.id, value: destinationCountry.value },
                        label: destinationCountry.value,
                      }
                    : {
                        value: { id: "", value: "" },
                        label: "Select Country...",
                      }
                }
                options={allCountrys}
                isClearable={true}
                isLoading={isLoading}
              ></Select>
            </div>
          </div>
          <div className="export-modal-inp-content">
            <label htmlFor="TerminalState">State</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Select
                options={destinationsAllStates}
                isClearable={true}
                isLoading={searchLoading.destinationStateLoading}
              ></Select>
            </div>
          </div>
          <div className="export-modal-inp-content">
            <label htmlFor="DestinationPortofDischarge">Port of Discharge</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Select options={options} isClearable={true}></Select>
            </div>
          </div>
        </div>
        {/* destination end */}
      </div>
    </div>
  );
};

export default ExportTerminal;
