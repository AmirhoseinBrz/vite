import { FormProvider, useForm } from "react-hook-form";
import { DynamicControl } from "./DynamicControl";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useState } from "react";

export const Form = ({ fields }) => {
  const [lastElementId, setLastELementId] = useState();
  const [lastElementParent, setLastELementParent] = useState();
  const [selectedElement, setSelectedElement] = useState([]);

  const formMethods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = formMethods;

  function onSubmit(data, error) {
    // your logic on what to do with data
    console.log(data);
  }

  useEffect(() => {
    console.log(selectedElement);
  }, [selectedElement]);

  const renderFields = (fields, errors) => {
    return fields.map((field, index) => {
      return (
        <>
          <div key={index} style={{ display: "flex" }}>
            <label htmlFor={field.fieldName}>{field.label}</label>
            <div
              onClick={() => {
                const lst = field.parent;
                if (
                  !field.children &&
                  lastElementId &&
                  lastElementId !== field.id &&
                  JSON.stringify(lastElementParent) === JSON.stringify(lst)
                ) {
                  console.log("entered");
                  setSelectedElement(
                    selectedElement.filter(
                      (props, index) => index !== selectedElement.length - 1
                    )
                  );
                }
                if (!field.children) {
                  return;
                }

                setLastELementParent(field.parent);
                setSelectedElement((prevState) => {
                  //برای اینکه اگر بر روی نود های اصلی و شروع کننده کلیک کرد صفحه به صورت کامل پاکسازی شود و نودها دوباره رند شوند
                  if (field.parent.length === 0 && lastElementId) {
                    return [field.children];
                  }
                  if (!field.parent.includes(field.id) && field.children) {
                    return [...prevState, field.children];
                  }
                  // return [];
                });
                setLastELementId(field.id);
              }}
            >
              <DynamicControl {...field} />
            </div>
            <ErrorMessage errors={errors} name={field.fieldName} />
          </div>
        </>
      );
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...formMethods}>
          {renderFields(fields, errors)}
        </FormProvider>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>

      <div>
        {selectedElement.map((selectedField, index) => (
          <FormProvider key={index} {...formMethods}>
            {renderFields(selectedField, errors)}
          </FormProvider>
        ))}
      </div>
    </>
  );
};

// twoDimArray.forEach((row, rowIndex) => {
//   row.forEach((value, colIndex) => {
//     // مقدار فعلی در ارایه دو بعدی
//     console.log(`مقدار در سطر ${rowIndex} و ستون ${colIndex}: ${value}`);
    
//     // می‌توانید اینجا چک‌های مختلف انجام دهید
//     // مثلاً اگر مقدار معینی را جستجو کنید:
//     // if (value === مقدار_معین) {
//     //   console.log(`مقدار معین پیدا شد در سطر ${rowIndex} و ستون ${colIndex}`);
//     // }
//   });
// });
