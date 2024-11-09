import React, { useState } from "react";
import { Field } from "formik";

const GroupCategory = ({ formik }) => {
  const [customCategories, setCustomCategories] = useState([]);
  const [isCustomCategory, setIsCustomCategory] = useState(false);

  const primaryCategories = [
    "Bank Accounts", "Bank OCC A/c", "Bank OD A/c", "Branch / Divisions",
    "Capital Account", "Cash-in-Hand", "Current Assets", "Current Liabilities",
    "Deposits (Asset)", "Direct Expenses", "Direct Incomes", "Duties & Taxes",
    "Expenses (Direct)", "Expenses (Indirect)", "Fixed Assets", "Income (Direct)",
    "Income (Indirect)", "Indirect Expenses", "Indirect Incomes", "Investments",
    "Loans & Advances (Asset)", "Loans (Liability)", "Misc. Expenses (ASSET)",
    "Provisions", "Purchase Accounts", "Reserves & Surplus", "Retained Earnings",
    "Sales Accounts", "Secured Loans", "Stock-in-Hand", "Sundry Creditors",
    "Sundry Debtors", "Suspense A/c", "Unsecured Loans"
  ];

  return (
    <div>
      <div className="d-flex col-12 col-sm-12 mb-2">
        <div className="col-12 col-sm-4 justify-content-end text-right-lg">
          <label
            htmlFor="groupCategory"
            className="m-0 p-0 text-left"
            style={{ fontSize: 15 }}
          >
            <strong>Group Category</strong>
          </label>
        </div>
        <div className="col-12 col-sm-8">
          {isCustomCategory ? (
            <div className=" pb-1 forms">
              <input
                type="text"
                name="groupCategory"
                placeholder="Group Category"
                value={formik.values.groupCategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
            </div>
          ) : (
            <Field
              as="select"
              name="groupCategory"
              id="groupCategory"
              className="selectBox custom-select"
              onChange={(e) => {
                if (e.target.value === "Add Group Category") {
                  setIsCustomCategory(true);
                  formik.setFieldValue("groupCategory", "");
                } else {
                  formik.handleChange(e);
                }
              }}
              onBlur={formik.handleBlur}
              value={formik.values.groupCategory}
            >
              <option value="">Select Group Category</option>
              <optgroup label="Primary">
                {primaryCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Custom">
                {customCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </optgroup>
              <option value="Add Group Category">Add Group Category</option>
            </Field>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupCategory;
