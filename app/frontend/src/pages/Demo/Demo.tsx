// @ts-nocheck
// External Imports
import React, { Fragment, useEffect, useState } from "react";

// Internal Imports
import { Checkbox, Chip, TextField } from "components/components";
import { IconEyeClose, IconEyeOpen, IconSearch } from "assets/images/images";
import Scroll from "components/Scroll/Scroll";
import ScrollChip from "components/Scroll/Chip";
import { combineClasses } from "components/Utility/utils";

function Demo() {
  function textFieldOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  function checkboxOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked);
  }

  return (
    <Fragment>
      <div className="m-5"></div>
      <div className="m-5">
        <h1>
          Hello World! Feel free to use this page as a playground to test code!
        </h1>
        <div style={{ width: "720px" }}>
          <h2>Chevron Scroll</h2>
          <Scroll>
            <ScrollChip>
              <p>Roles</p>
            </ScrollChip>
            <ScrollChip>
              <p>Availability</p>
            </ScrollChip>
            <ScrollChip>
              <p>Experience Level</p>
            </ScrollChip>
            <ScrollChip>
              <p>Program Areas</p>
            </ScrollChip>
            <ScrollChip>
              <p>Languages/Technologies</p>
            </ScrollChip>
          </Scroll>
          <h2>Chips</h2>
          <h2>Single Chips</h2>
          <div style={{ width: "500px" }}>
            {["Designer", "Engineer", "Researcher", "PM"].map((role, index) => {
              return (
                <Chip
                  key={index}
                  addClass={combineClasses("mr-3", index >= 2 && "fill")}
                  onChange={(active, value) => {
                    console.log(
                      `${value} was ${active ? "selected" : "deselected"}`
                    );
                  }}
                  value={role}
                />
              );
            })}
          </div>
          <h2>Multi Chips</h2>
          <div>
            {["Designer", "Engineer", "Researcher", "PM"].map((role, index) => {
              return (
                <Chip
                  key={index}
                  variant="multi"
                  addClass={"mr-3"}
                  onChange={(active, value) => {
                    console.log(
                      `${value} was ${active ? "selected" : "deselected"}`
                    );
                  }}
                  value={role}
                />
              );
            })}
          </div>
          <h2>Checkboxes</h2>
          <Checkbox label="Enabled selected" defaultChecked />
          <Checkbox label="Enabled unselected" />
          <Checkbox label="Disabled selected" defaultChecked disabled />
          <Checkbox label="Disabled unselected" disabled />
          <Checkbox
            label="Enabled selected"
            defaultChecked
            labelHidden={true}
            onChange={checkboxOnChange}
          />
          <h2>Textfields</h2>
          <TextField
            type="email"
            label="Login"
            placeholder="email here"
            onChange={textFieldOnChange}
            addClass="m-1"
          />
          <TextField
            type="password"
            label="Password"
            addClass="m-1"
            icon={PasswordButton}
            iconPosition="right"
          />
          <TextField type="date" label="What is today's date?" addClass="m-1" />
          <TextField type="number" label="How old are you?" addClass="m-1" />
          <TextField
            type="search"
            label="Search"
            addClass="m-1"
            icon={IconSearch}
          />
          <TextField type="tel" label="What is your number?" addClass="m-1" />
          <TextField
            type="time"
            label="What is the current time?"
            addClass="m-1"
            addInputClass="textfield-fit"
          />
          <TextField type="url" label="Personal website" addClass="m-1" />
        </div>
      </div>
    </Fragment>
  );
}

function PasswordButton() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        border: "none",
        backgroundColor: "#fff"
      }}
    >
      {isOpen ? <IconEyeOpen /> : <IconEyeClose />}
    </button>
  );
}

export { Demo };
