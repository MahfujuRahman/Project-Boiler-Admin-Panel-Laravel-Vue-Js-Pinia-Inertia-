export default [
  {
    name: "title",
    label: "Title",
    type: "text",
    value: "",
  },
  {
    name: "type",
    label: "Type",
    type: "select",
    // value: "0",
    is_visible: true,
    data_list: [
      {
        label: "Yes",
        value: "income",
      },
      {
        label: "No",
        value: "expense",
      },
    ],
  },
  {
    name: "picture",
    label: "Picture",
    type: "file",
    multiple: false,
    value: "",
    row_col_class: "col-md-12",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    value: "",
    row_col_class: "col-md-12",
  },
];
