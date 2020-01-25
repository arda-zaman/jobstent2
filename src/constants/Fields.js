export const basic_fields = [
    {
        type: 'jbt_text',
        text: 'Text',
        icon: {
            iconType: 'material-icons',
            iconValue: 'text_format'
        },
        defaultValue: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet accusamus amet dolorum. Debitis eaque quos vero vel quam obcaecati corrupti, excepturi, quis porro sequi, voluptate nostrum officia hic amet.',
        defaultStyle: {
            zIndex: 5
        },
        defaultFieldStyle: {
            width: 450
        }
    },
    {
        type: 'jbt_icon',
        text: 'Icon',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-pencil-alt'
        },
        defaultValue: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-atom'
        },
        defaultStyle: {},
        defaultFieldStyle: {
            fontSize: 32
        }
    },
    {
        type: 'jbt_image',
        text: 'Image',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'far fa-image'
        },
        defaultValue: {},
        defaultStyle: {},
    },
    {
        type: 'jbt_phone',
        text: 'Phone',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-phone'
        },
        defaultValue: {
            textValue: "(xx) xxx xx-xx",
        },
        defaultStyle: {},
        defaultFieldStyle: {
        }
    },
    {
        type: 'jbt_date',
        text: 'Date',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'far fa-calendar-alt'
        },
        defaultValue: {
            format: 'YYYY-MM-DD',
            textValue: new Date().toLocaleDateString('en-US')
        },
        defaultStyle: {}
    },
    {
        type: 'jbt_address',
        text: 'Address',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'far fa-address-card'
        },
        defaultValue: {
            textValue: "Guzelkent Mahallesi Gözde-2 Sitesi 10/D No:8",
        },
        defaultStyle: {},
        defaultFieldStyle: {
            width: 300,
        }
    },
    {
        type: 'jbt_shape',
        text: 'Shape',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-shapes'
        },
    },
    {
        type: 'jbt_layout',
        text: 'Layout',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-layer-group'
        },
        defaultValue: {},
        defaultStyle: {
            zIndex: 1
        },
        defaultFieldStyle: {
            backgroundColor: '#fbc531',
            width: 300,
            height: 500,
        }
    }
];

export const special_fields = [
    {
        type: 'jbt_profile_photo',
        text: 'Profile Photo',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'far fa-user-circle'
        },
    },
    {
        type: 'jbt_personal_informations',
        text: 'Personal Informations',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-user-check'
        },
    },
    {
        type: 'jbt_contact_informations',
        text: 'Contact Informations',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'far fa-address-card'
        },
    },
    {
        type: 'jbt_professional_summary',
        text: 'Professional Summary',
        icon: {
            iconType: 'material-icons',
            iconValue: 'short_text'
        },
    },
    {
        type: 'jbt_work_experience',
        text: 'Work Experience',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-briefcase'
        },
    },
    {
        type: 'jbt_education',
        text: 'Education',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-user-graduate'
        },
    },
    {
        type: 'jbt_skills',
        text: 'Skills',
        icon: {
            iconType: 'font-awesome',
            iconValue: 'fas fa-check-double'
        },
    }
];

export const field_properties = {
    jbt_text: {
        fontFamily: {
            fieldType: 'dropdown',
            label: 'Font Family',
            additionalClass: 'inline',
            options: [
                { value: "roboto", label: "Roboto" },
                { value: "mono-space", label: "Mono-Space" },
                { value: "Helvetica", label: "Helvetica" },
            ],
        },
        fontSize: {
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
        colorPicker: {
            fieldType: 'colorPicker',
            type: 'box',
            label: 'Color',
            styleKey: 'color',
            additionalClass: 'inline',
            position: 'right'
        },
        'bold/italic/strikethrough': {
            label: 'Bold/Italic/Strikethrough',
        },
        alignment: {
            label: 'Alignment'
        },
    },
    jbt_icon: {
        iconLibrary: {},
        fontSize: {
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
        colorPicker: {
            fieldType: 'colorPicker',
            type: 'box',
            label: 'Color',
            styleKey: 'color',
            additionalClass: 'inline',
            position: 'right'
        },
    },
    jbt_image: {
        uploadFile: {},
        size: {},
        radius: {}
    },
    jbt_phone: {
        fontFamily: {
            fieldType: 'dropdown',
            label: 'Font Family',
            additionalClass: 'inline',
            options: [
                { value: "roboto", label: "Roboto" },
                { value: "mono-space", label: "Mono-Space" },
                { value: "Helvetica", label: "Helvetica" },
            ],
        },
        fontSize: {
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
        colorPicker: {
            fieldType: 'colorPicker',
            type: 'box',
            label: 'Color',
            styleKey: 'color',
            additionalClass: 'inline',
            position: 'right'
        },
        'bold/italic/strikethrough': {
            label: 'Bold/Italic/Strikethrough',
        },
        alignment: {
            label: 'Alignment'
        },
    },
    jbt_date: {
        fontFamily: {
            fieldType: 'dropdown',
            label: 'Font Family',
            additionalClass: 'inline',
            options: [
                { value: "roboto", label: "Roboto" },
                { value: "mono-space", label: "Mono-Space" },
                { value: "Helvetica", label: "Helvetica" },
            ],
        },
        fontSize: {
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
        colorPicker: {
            fieldType: 'colorPicker',
            type: 'box',
            label: 'Color',
            styleKey: 'color',
            additionalClass: 'inline',
            position: 'right'
        },
        'bold/italic/strikethrough': {
            label: 'Bold/Italic/Strikethrough',
        },
        alignment: {
            label: 'Alignment'
        },
    },
    jbt_address: {
        fontFamily: {
            fieldType: 'dropdown',
            label: 'Font Family',
            additionalClass: 'inline',
            options: [
                { value: "roboto", label: "Roboto" },
                { value: "mono-space", label: "Mono-Space" },
                { value: "Helvetica", label: "Helvetica" },
            ],
        },
        fontSize: {
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
        colorPicker: {
            fieldType: 'colorPicker',
            type: 'box',
            label: 'Color',
            styleKey: 'color',
            additionalClass: 'inline',
            position: 'right'
        },
        'bold/italic/strikethrough': {
            label: 'Bold/Italic/Strikethrough',
        },
        alignment: {
            label: 'Alignment'
        },
    },
    jbt_shape: [],
    jbt_layout: {
        uploadFile: {},
        colorPicker: {
            fieldType: 'colorPicker',
            type: 'box',
            label: 'Background Color',
            additionalClass: 'inline',
            position: 'right',
            styleKey: 'backgroundColor'
        },
        size: {},
    }
};

