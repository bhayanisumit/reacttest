import React from "react";

const Href = ({ source,   dataId ,dataClassName , dataToolTipHtml, dataTooltipPlace ,label }) => {
  return   <a
  href={source}
  data-tooltip-id={dataId}
  data-tooltip-class-name={dataClassName}
  data-tooltip-html={dataToolTipHtml}
  data-tooltip-place={dataTooltipPlace}
>
{label}
</a>
};

export default Href;
