export const CSelect = ({category, options, handler, className}) => {


    return (
      <select defaultValue="" onChange={handler} className={className}>
        <option disabled hidden value="">
          {category}
        </option>
        {options.map((option) => {
          return <option value={option.id} key={option.id}>{option.serviceName}</option>
        })}
      </select>
    );
  };