import Image from "../Image";

export default function ComparisonRow({ rowData }) {
  function createCell(cellData, cellId) {
    let cellContents;
    if (Array.isArray(cellData)) {
      cellContents = cellData.map((item, index) =>
        makeMark(item, cellId, index)
      );
    } else {
      cellContents = makeMark(cellData, cellId);
    }
    return <td className="align-middle comparisonTableCell">{cellContents}</td>;
  }

  function makeMark(hasFeature, cellId, index = 0) {
    if (hasFeature === true) {
      return (
        <Image
          src="/images/grouparoo-purple-checkmark.svg"
          alt="Grouparoo blue checkmark"
          width={25}
          height={25}
          key={`${rowData.feature}-${cellId}-${index}`}
        />
      );
    } else if (hasFeature === false) {
      return (
        <Image
          src="/images/red-x.svg"
          alt="Red X"
          width={24}
          height={23}
          key={`${rowData.feature}-${cellId}-${index}`}
        />
      );
    } else if (typeof hasFeature === "string") {
      return (
        <span
          className="comparisonTableText align-middle"
          key={`${rowData.feature}-${cellId}-${index}`}
        >
          {hasFeature}
        </span>
      );
    }
  }

  return (
    <>
      <tr>
        <td className="text-start align-middle comparisonTableLabelCell">
          {rowData.feature}
        </td>
        {createCell(rowData.grouparoo, "grouparoo")}
        {createCell(rowData.comp, "comp")}
      </tr>
    </>
  );
}
