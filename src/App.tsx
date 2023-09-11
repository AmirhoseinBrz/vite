import { Form } from "./Form";

function App() {
  const fields = [
    {
      id: 1001,
      fieldName: "gender",
      inputType: "radio",
      label: "مرد",
      defaultValue: "man",
      config: {
        required: "Required",
      },
      children: [
        {
          id: 1014,
          fieldName: "radio-btn",
          inputType: "radio",
          label: "سانس شنبه - زیر گروه دوم",
          defaultValue: "sunday",
          config: {
            required: "Required",
          },
          children: [
            {
              id: 1020,
              fieldName: "radio-btn",
              inputType: "radio",
              label: "سانس یکشنبه - زیرگروه سوم",
              defaultValue: "monday",
              config: {
                required: "Required",
              },
              children: [
                {
                  id: 1031,
                  fieldName: "gender-group-2",
                  inputType: "radio",
                  label: "زیر منوی گروه - شماره 4",
                  defaultValue: "man",
                  config: {
                    required: "Required",
                  },
                  parent: [1001, 1014, 1020],
                },
                {
                  id: 1032,
                  fieldName: "gender-group-2",
                  inputType: "radio",
                  label: "زیر منوی گروه - شماره 5",
                  defaultValue: "man",
                  config: {
                    required: "Required",
                  },
                  parent: [1001, 1014, 1020],
                },
                {
                  id: 1033,
                  fieldName: "gender-group-2",
                  inputType: "radio",
                  label: "زیر منوی گروه - شماره 5",
                  defaultValue: "man",
                  config: {
                    required: "Required",
                  },
                  parent: [1001, 1014, 1020],
                },
              ],
              parent: [1001, 1014],
            },
          ],
          parent: [1001],
        },
        {
          id: 1015,
          fieldName: "radio-btn",
          inputType: "radio",
          label: "سانس یکشنبه - زیر گروه دوم",
          defaultValue: "monday",
          config: {
            required: "Required",
          },
          parent: [1001],
        },
      ],
      parent: [],
    },
    {
      id: 1002,
      fieldName: "gender",
      inputType: "radio",
      label: "زن",
      defaultValue: "woman",
      children: [
        {
          id: 1013,
          fieldName: "radio-btn",
          inputType: "radio",
          label: "سانس شنبه - بانوان",
          defaultValue: "sunday",
          config: {
            required: "Required",
          },
          children: [
            {
              id: 1022,
              fieldName: "radio-btn",
              inputType: "radio",
              label: "سانس شنبه - بانوان - زیر گروه دوم",
              defaultValue: "monday",
              config: {
                required: "Required",
              },
              parent: [1002, 1013],
            },
          ],
          parent: [1002],
        },
        {
          fieldName: "radio-btn",
          inputType: "radio",
          label: "سانس یکشنبه - بانوان",
          defaultValue: "monday",
          config: {
            required: "Required",
          },
          parent: [1002],
        },
      ],
      parent: [],
    },
  ];

  return (
    <div>
      <Form fields={fields} />
    </div>
  );
}

export default App;
