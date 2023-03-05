module.exports = global.config = {
  jobTypeOptions: [
    { value: "", label: "Any" },
    { value: "academic", label: "Teaching" },
    { value: "non_academic", label: "Non Teaching" },
    { value: "administration", label: "Administration" },
  ],

  statusOptions: [
    { value: "", label: "Any" },
    { value: "draft", label: "Draft" },
    { value: "submitted", label: "Submitted" },
    { value: "accepted", label: "Accepted" },
    { value: "rejected", label: "Rejected" },
  ],
  // departmentOptions: [
  //   { value: "", label: "Any" },
  //   { value: "", label: "" },
  //   { value: "", label: "" },
  //   { value: "", label: "" },
  //   { value: "", label: "" },
  //   { value: "", label: "" },
  // ],
  // schoolOptions: [
  //   { value: "", label: "Any" },
  //   { value: "SMC", label: "SMC" },
  //   { value: "SHSS", label: "SHSS" },
  //   { value: "SDA", label: "SAD" },
  //   { value: "SCIT", label: "SCIT" },
  //   { value: "SAMM", label: "SAMM" },
  //   { value: "SEEC", label: "SEEC" },
  //   { value: "SBS", label: "SBS" },
  // ],
  // facultiesOptions: [
  //   { value: "", label: "Any" , link:""},
  //   { value: "FoA", label: "FoA" ,link:"one"},
  //   { value: "FoD", label: "FoD" },
  //   { value: "FoE", label: "FoE" },
  //   { value: "FoS", label: "Fos" },
  //   { value: "FoMC", label: "FoMC" },
  //   { value: "FoL", label: "FoL" },
  // ],
  statusColor: {
    draft: "#ced4da",
    submitted: "#FFA500",
    accepted: "#20c997",
    rejected: "#FF0000",
  },

  // SelectMenuProps: {
  //     PaperProps: {
  //         style: {
  //             maxHeight: 48 * 4.5 + 8,
  //             width: 250,
  //         },
  //     },
  // },

  // other global config variables you wish
};
