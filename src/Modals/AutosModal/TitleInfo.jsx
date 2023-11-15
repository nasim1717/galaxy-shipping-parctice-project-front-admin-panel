const TitleInfo = () => {
  return (
    <div className="flex flex-col gap-y-3 px-3 mb-5">
      <p>Title Info</p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 ">
        {/* title type start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="titleType">Title Type</label>
          <select name="cars" id="titleType" className="autos-modal-input text-gray-700">
            <option value="">Select Title</option>
            <option value={0}>NO TITLE</option>
            <option value={1}>CLEAN TITLE</option>
            <option value={2}>DMV TITLE</option>
            <option value={3}>LIEN TITLE</option>
            <option value={4}>BOS TITLE</option>
            <option value={5}>PENDING TITLE</option>
            <option value={6}>JUNK TITLE</option>
            <option value={7}>SALVAGE</option>
            <option value={8}>Certification of Distriaction</option>
            <option value={9}>Unfit</option>
            <option value={10}>Burn</option>
            <option value={11}>Nonerepairable</option>
            <option value={12}>Parts Only</option>
            <option value={13}>Rebuildable</option>
            <option value={14}>Water Flood</option>
            <option value={15}>Mv - 907A(Newyork)</option>
            <option value={16}>SCRAP TITLE</option>
          </select>
        </div>
        {/* title type end */}
        {/* title no start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="titleNo">Title No</label>
          <input type="text" id="titleNo" placeholder="Title No" className="autos-modal-input" />
        </div>
        {/* title no end */}
        {/* title start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="title">Title</label>
          <div className="flex gap-x-3 pr-72">
            <div className="flex gap-x-2">
              <input type="radio" name="title" id="yes" />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-x-2">
              <input type="radio" name="title" id="no" checked />
              <label htmlFor="no">No</label>
            </div>
          </div>
        </div>
        {/* title end */}
        {/* title amount start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="titleAmount">Title Amount</label>
          <input
            type="text"
            id="titleAmount"
            placeholder="Title Amount"
            className="autos-modal-input"
          />
        </div>
        {/* title amoun end */}
        {/* title received start */}
        <div className="autos-modal-inp-content">
          <label htmlFor="TitleReceivedDate">Title Received Date</label>
          <input type="date" id="TitleReceivedDate" className="autos-modal-input" />
        </div>
        {/* title received end */}
        {/* title state */}
        <div className="autos-modal-inp-content">
          <label htmlFor="titleState">Title State</label>
          <input
            type="text"
            id="titleState"
            placeholder="Title State"
            className="autos-modal-input"
          />
        </div>
        {/* title state */}
        {/* note start */}
        <div className="autos-modal-inp-content col-start-2 col-end-3">
          <label htmlFor="note">Note</label>
          <textarea type="text" id="note" placeholder="Note" className="autos-modal-input" />
        </div>
        {/* note end */}
      </div>
    </div>
  );
};

export default TitleInfo;
