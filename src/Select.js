import React, { useState } from "react";
import { country } from "./countries.js";
import { states } from "./states.js";

const Select = () => {
  const [sta, setSta] = useState();
  console.log(country.countries);
  // console.log("states", states[0]["US"]);
  const getStates = (s) => {
    console.log("sortname", s.toString());
    const st = s.toString();
    console.log("in String", st);
    const sn = states[0];
    // console.log("main",sn[`${s}`]);
    console.log("next", sn[s.toString()]);
    const obj = sn[s.toString()];
    if (obj) setSta(Object?.values(obj));
    console.log("ss", sta);
  };
  const countryHandler = (e) => {
    setSta(null);
    console.log(e.target.value);
    // console.log(e.target);
    const id = country.countries.filter((i) => {
      return e.target.value === i.name;
    });
    const sort = id[0].sortname;
    getStates(sort);
  };
  return (
    <div>
      <span>some countries states not exist in json by using sortname</span>
      <br />
      <select onChange={countryHandler}>
        <option>select country</option>
        {country.countries.map((c) => {
          return (
            <option key={c.id} sort={c.sortname} value={c.name}>
              {c.name}
            </option>
          );
        })}
      </select>
      <br />
      <select>
        <option>select states</option>
        {sta?.map((i) => {
          return (
            <option key={i} defaultValue={"select"}>
              {i}
            </option>
          );
        })}
      </select>
      <br />
      <div className="test">
        Test, like India,United States,etc.
        <br />
        error in countries like Thailand,Spain,etc not have sotname to fetch
        <br />
        check console for the same please.
      </div>
      <div className="name">@deepakgupta</div>
    </div>
  );
};

export default Select;
