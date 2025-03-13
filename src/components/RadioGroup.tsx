import React from "react";

interface RadioGroupProps {
  contentArr: { number: number; content: string }[];
  selectedValue: number;
  onChange: (value: number) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ contentArr, selectedValue, onChange }) => {
  return (
    <div className="list-radio arrange">
      <h4>Sắp xếp</h4>
      <div className="radio">
        <label className="radio-container">
          <input
            className="input-radio"
            type="radio"
            name="arrange"
            onChange={() => onChange(0)}
            checked={selectedValue === 0}
          />
          <p className="content">Mặc định</p>
        </label>
      </div>
      {Array.isArray(contentArr) && contentArr.length > 0
        ? contentArr.map((item) => (
            <div className="radio" key={item.number}>
              <label className="radio-container">
                <input
                  className="input-radio"
                  type="radio"
                  name="arrange"
                  onChange={() => onChange(item.number)}
                  checked={selectedValue === item.number}
                />
                <p className="content">{item.content}</p>
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export default RadioGroup;
