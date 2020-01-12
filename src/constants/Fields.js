export const basic_fields = [
  {
    type: 'jbt_text',
    text: 'Text',
    defaultValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet accusamus amet dolorum. Debitis eaque quos vero vel quam obcaecati corrupti, excepturi, quis porro sequi, voluptate nostrum officia hic amet.',
    defaultStyle: {
      width: 450,
      position: 'absolute',
    }
  },
  {
    type: 'jbt_icon',
    text: 'Icon',
    defaultValue: '',
    defaultStyle: {}
  },
  {
    type: 'jbt_image',
    text: 'Image',
    defaultValue: '',
    defaultStyle: {}
  },
  {
    type: 'jbt_date',
    text: 'Date'
  },
  {
    type: 'jbt_address',
    text: 'Address'
  },
  {
    type: 'jbt_circle',
    text: 'Circle'
  },
  {
    type: 'jbt_line',
    text: 'Line'
  },
  {
    type: 'jbt_shape',
    text: 'Shape'
  },
  {
    type: 'jbt_layout',
    text: 'Layout'
  }
];

export const special_fields = [
  {
    type: 'jbt_profile_photo',
    text: 'Profile Photo',
  },
  {
    type: 'jbt_personal_informations',
    text: 'Personal Informations'
  },
  {
    type: 'jbt_contact_informations',
    text: 'Contact Informations'
  },
  {
    type: 'jbt_professional_summary',
    text: 'Professional Summary'
  },
  {
    type: 'jbt_work_experience',
    text: 'Work Experience'
  },
  {
    type: 'jbt_education',
    text: 'Education'
  },
  {
    type: 'jbt_skills',
    text: 'Skills'
  }
];

export const field_properties = {
  jbt_text: {
    'fontFamily': {
      fieldType: 'dropdown',
      label: 'Font Family',
      additionalClass: 'inline',
      options: [
        { value: "roboto", label: "Roboto" },
        { value: "mono-space", label: "Mono-Space" },
        { value: "Helvetica", label: "Helvetica" },
      ],
    },
    'fontSize': {
      fieldType: 'dropdown',
      label: 'Font Size',
      additionalClass: 'inline',
      options: [
        { value: "8", label: "8" },
        { value: "10", label: "10" },
        { value: "12", label: "12" },
        { value: "14", label: "14" },
        { value: "16", label: "16" },
        { value: "18", label: "18" },
        { value: "20", label: "20" },
        { value: "22", label: "22" },
        { value: "24", label: "24" },
        { value: "26", label: "26" },
        { value: "28", label: "28" },
        { value: "30", label: "30" },
        { value: "32", label: "32" },
        { value: "34", label: "34" },
        { value: "36", label: "36" },
        { value: "38", label: "38" },
        { value: "40", label: "40" }
      ],
    },
    'colorPicker': {
      fieldType: 'colorPicker',
      type: 'box',
      label: 'Color',
      additionalClass: 'inline',
      position: 'right'
    },
    'bold/italic/strikethrough': {
      label: 'Bold/Italic/Strikethrough',
    },
    'alignment': {
      label: 'Alignment'
    },
  },
  jbt_icon: [
    'iconLibrary',
    'colorPicker',
    'fontSize'
  ],
  jbt_image: [],
  jbt_date: [],
  jbt_address: [],
  jbt_circle: [],
  jbt_line: [],
  jbt_shape: [],
  jbt_layout: []
};


export const right_panel_item_properties = {
  fontFamily: {
    label: 'Font Family',
    defaultValue: { value: "roboto", label: "Roboto" },
    options: [
      { value: "roboto", label: "Roboto" },
      { value: "mono-space", label: "Mono-Space" },
      { value: "Helvetica", label: "Helvetica" },
    ],
    additionalClass: 'inline'
  },
  fontSize: {
    label: 'Font Size',
    defaultValue: { value: "8", label: "8" },
    additionalClass: 'inline',
    options: [
      { value: "8", label: "8" },
      { value: "10", label: "10" },
      { value: "12", label: "12" },
      { value: "14", label: "14" },
      { value: "16", label: "16" },
      { value: "18", label: "18" },
      { value: "20", label: "20" },
      { value: "22", label: "22" },
      { value: "24", label: "24" },
      { value: "26", label: "26" },
      { value: "28", label: "28" },
      { value: "30", label: "30" },
      { value: "32", label: "32" },
      { value: "34", label: "34" },
      { value: "36", label: "36" },
      { value: "38", label: "38" },
      { value: "40", label: "40" }
    ],
  },
  textColor: {
    label: 'Text Color',
    type: 'box',
    additionalClass: '',
    position: ''
  },
  iconLibrary: {
    label: 'Icon Library',
  },
  dateFormat: {
    label: 'Date Format',
    additionalClass: 'inline',
    options: [
      { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
      { value: "YYYY-MM", label: "YYYY-MM" },
      { value: "DD-MM-YYYY", label: "DD-MM-YYYY" },
    ],
    defaultValue: { value: "YYYY-MM-DD", label: "YYYY-MM-DD" }
  },
  textType: {
    label: 'Bold & Italic & Strikethrough',
  },

}