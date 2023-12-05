const ContainersSearchRow = () => {
  return (
    <tr>
      <td></td>
      <td className="px-4 py-3">
        <form>
          <input type="text" className="search-input w-36 py-2" placeholder="Loaded date" />
        </form>
      </td>
      <td className="px-4">
        <form>
          <input type="text" className="search-input w-36 py-2" placeholder="Export date" />
        </form>
      </td>
      <td className="px-4">
        <form>
          <input type="text" className="search-input w-36 py-2" placeholder="ETA" />
        </form>
      </td>
      <td className="px-4">
        <form>
          <input type="text" className="search-input w-36 py-2" placeholder="Booking Number" />
        </form>
      </td>
      <td className="px-4">
        <form>
          <input type="text" className="search-input w-36 py-2" placeholder="Container Number" />
        </form>
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default ContainersSearchRow;
