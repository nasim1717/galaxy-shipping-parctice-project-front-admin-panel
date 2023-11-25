import { useEffect, useState } from "react";
import Select from "react-select";
import { countrysApi, useGetCountryQuery } from "../../features/countrys/countrysApi";
import { useDispatch } from "react-redux";
import { useFormContext, Controller } from "react-hook-form";

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
  const [terminalAllPorts, setTerminalAllPorts] = useState([]);
  const [destinationAllPorts, setDestinationAllPorts] = useState([]);
  const [searchLoading, setSearchLoading] = useState({
    terminalStateLoading: false,
    terminalPorts: false,
    destinationStateLoading: false,
    destinationPortsLoading: false,
  });
  const { data: countrys, isLoading } = useGetCountryQuery();
  const dispatch = useDispatch();
  const {
    formState: { errors },
    control,
    register,
  } = useFormContext();

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

  const searchPorts = (searchStateId, checkSetPorts) => {
    dispatch(countrysApi.endpoints.getPort.initiate(searchStateId))
      .unwrap()
      .then((res) => {
        const options = res?.data?.map((port) => ({
          value: { id: port.id, value: port.name },
          label: port.name,
        }));
        if (checkSetPorts === "terminal") {
          setTerminalAllPorts(options);
          setSearchLoading({ ...searchLoading, terminalPorts: false });
        } else if (checkSetPorts === "destination") {
          setDestinationAllPorts(options);
          setSearchLoading({ ...searchLoading, destinationPortsLoading: false });
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
                    setTerminalState("");
                    setTerminalPartOf("");
                    setTerminalAllPorts([]);
                    setTerminalAllStates([]);
                  }
                }}
                value={
                  terminalCountry
                    ? {
                        value: { id: terminalCountry.id, value: terminalCountry.value },
                        label: terminalCountry.value,
                      }
                    : ""
                }
                placeholder="Select Country..."
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
                onChange={(e) => {
                  if (e?.value) {
                    setTerminalState(e.value);
                    setSearchLoading({ ...searchLoading, terminalPorts: true });
                    searchPorts(e.value.id, "terminal");
                  } else {
                    setTerminalState("");
                    setTerminalPartOf("");
                    setTerminalAllPorts([]);
                  }
                }}
                value={
                  termianlState
                    ? {
                        value: { id: termianlState.id, value: termianlState.value },
                        label: termianlState.value,
                      }
                    : ""
                }
                placeholder="Select State..."
                options={terminalAllStates}
                isClearable={true}
                isLoading={searchLoading.terminalStateLoading}
              ></Select>
            </div>
          </div>
          <div className="export-modal-inp-content">
            <label htmlFor="TerminalPortofloading">Port of loading</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Controller
                name="port_of_loading"
                control={control}
                rules={{
                  required: "port of loading is Required",
                }}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        if (e?.value) {
                          setTerminalPartOf(e.value);
                        } else {
                          setTerminalPartOf("");
                        }
                      }}
                      value={
                        terminalPartOf
                          ? {
                              value: { id: terminalPartOf.id, value: terminalPartOf.value },
                              label: terminalPartOf.value,
                            }
                          : ""
                      }
                      options={terminalAllPorts}
                      isClearable={true}
                      isLoading={searchLoading.terminalPorts}
                      placeholder="Select Part Of Loading"
                    ></Select>
                  </>
                )}
              ></Controller>
              {errors?.port_of_loading && (
                <p className="text-red-500">{errors?.port_of_loading?.message}</p>
              )}
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
                    setDestinationState("");
                    setDestinationAllSates([]);
                    setDestinationPartOf("");
                    setDestinationAllPorts([]);
                  }
                }}
                value={
                  destinationCountry
                    ? {
                        value: { id: destinationCountry.id, value: destinationCountry.value },
                        label: destinationCountry.value,
                      }
                    : ""
                }
                placeholder="Select Country..."
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
                onChange={(e) => {
                  if (e?.value) {
                    setDestinationState(e?.value);
                    searchPorts(e.value.id, "destination");
                    setSearchLoading({ ...searchLoading, destinationPortsLoading: true });
                  } else {
                    setDestinationState("");
                    setDestinationPartOf("");
                    setDestinationAllPorts([]);
                  }
                }}
                value={
                  destinationState
                    ? {
                        value: { id: destinationState.id, value: destinationState.value },
                        label: destinationState.value,
                      }
                    : ""
                }
                options={destinationsAllStates}
                placeholder="Select State..."
                isClearable={true}
                isLoading={searchLoading.destinationStateLoading}
              ></Select>
            </div>
          </div>
          <div className="export-modal-inp-content">
            <label htmlFor="DestinationPortofDischarge">Port of Discharge</label>
            <div className="xl:w-96 md:w-72 sm:w-60 w-48">
              <Controller
                name="port_of_discharge"
                control={control}
                rules={{
                  required: "Port of discharge is Required",
                }}
                render={({ field }) => (
                  <>
                    <Select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        if (e?.value) {
                          setDestinationPartOf(e?.value);
                        } else {
                          setDestinationPartOf("");
                        }
                      }}
                      value={
                        destinationPartOf
                          ? {
                              value: { id: destinationPartOf.id, value: destinationPartOf.value },
                              label: destinationPartOf.value,
                            }
                          : ""
                      }
                      placeholder="Select Port of Discharge"
                      options={destinationAllPorts}
                      isClearable={true}
                      isLoading={searchLoading.destinationPortsLoading}
                    ></Select>
                  </>
                )}
              ></Controller>
              {errors?.port_of_discharge && (
                <p className="text-red-500">{errors?.port_of_discharge?.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* destination end */}
      </div>
    </div>
  );
};

export default ExportTerminal;
