import React from "react";

function ProgressBar({ skillName, Icon, percentage, progress }) {
  return (
    <>
      <div>
        <span className="uppercase">{skillName}</span>
        <div className="flex h-4 w-full items-center justify-start rounded-full bg-[#878e99]">
          <div
            className={`relative h-full ${progress} rounded-full bg-[#212428] shadow-[inset_8px_8px_16px_rgba(0,_0,_0,_0.4588235294),_inset_-8px_-8px_16px_rgba(56,_62,_69,_0.4588235294)]`}
          >
            <Icon size={20} className="absolute right-0 bottom-5" />
            <span className="absolute top-1/2 right-1 -translate-y-1/2 text-xs tracking-widest">
              {percentage}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
