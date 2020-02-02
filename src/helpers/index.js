import React from 'react';
import { styleList } from '../constants/generalConstants';

export const uuid = () => {
    return String(Date.now() + Math.round(Math.random() * 10000));
};

export const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export const UpperCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map((word) => {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}

export const GetAllAttributes = (input) => {
    return [...input.attributes].forEach(attr => attr.nodeName);
}

export const getFieldStyle = (field, useCommon = false) => {
    const styles = getComputedStyle(field);
    const returnedStyles = {};

    if (useCommon) {
        styleList.forEach(sty => {
            if (sty === 'border') {
                if (styles['border']) {
                    const secondPart = styles['border'].split(/(rgb.*)/g);
                    const firstPart = secondPart[0].split(' ');

                    returnedStyles['border-corner'] = 'borderWidth';
                    returnedStyles['border-color'] = secondPart[1];
                    returnedStyles['border-width'] = firstPart[0];
                    returnedStyles['border-style'] = firstPart[1];
                } else {
                    const corners = ['border-left', 'border-right', 'border-top', 'border-bottom'];
                    corners.forEach((item) => {
                        const secondPart = styles[item].split(/(rgb.*)/g);
                        const firstPart = secondPart[0].split(' ');

                        if (firstPart[0] != '0px') {
                            returnedStyles['border-corner'] = item.replace(item.match(/-./)[0], item.match(/-./)[0].toUpperCase().replace('-', '')) + 'Width';
                            returnedStyles['border-color'] = secondPart[1];
                            returnedStyles[`${item}-width`] = firstPart[0];
                            returnedStyles['border-style'] = firstPart[1];
                        }
                    });
                }
            } else if (['width', 'height', 'text-decoration'].indexOf(sty) > -1) {
                returnedStyles[sty] = field.style[sty];
            } else if (styles[sty]) {
                returnedStyles[sty] = styles[sty].replace(/[\"]/gm, '');
            }
        });
    }

    return returnedStyles.length == 0 ? styles : returnedStyles;
};

export const clearFieldStyles = (styles) => {
    if (!styles) return;
    let fieldStyles = { ...styles };

    Object.keys(styles).forEach(style => {
        switch (style) {
            case 'borderWidth':
                const resetArr = ['borderWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
                resetArr.forEach(item => {
                    fieldStyles[item] = 0;
                });
                fieldStyles = Object.assign({}, fieldStyles, { [styles.borderCorner || 'borderWidth']: Number(styles[style].replace('px', '')) });
                break;
            case 'opacity':
                fieldStyles = {
                    ...fieldStyles,
                    opacity: Number(styles['opacity']) / 100
                }
                break;
        }
    });

    return fieldStyles;
};


export const getDimensions = () => {
    return {
        width: global.window.innerWidth,
        height: global.window.innerHeight
    }
};

export const clearPxOrPercent = (val, onlyNumber) => {
    const values = {};

    if (val.match('px')) {
        values.number = parseInt(val.replace('px', ''), 10);
        values.sizeSign = 'px';
    } else if (val.match('%')) {
        values.number = parseInt(val.replace('%', ''), 10);
        values.sizeSign = '%';
    }

    return onlyNumber ? values.number : values;
};

export const filterContentEditableText = (cont) => {
    if (!cont) return '';
    var el = cont.firstChild;
    var v = '';
    var contTag = new RegExp('^(DIV|P|LI|OL|TR|TD|BLOCKQUOTE)$');
    while (el) {
        switch (el.nodeType) {
            case 3:
                var str = el.data.replace(/^\n|\n$/g, ' ').replace(/[\n\xa0]/g, ' ').replace(/[ ]+/g, ' ');
                v += str;
                break;
            case 1:
                var str = this.editableVal(el);
                if (el.tagName && el.tagName.match(contTag) && str) {
                    if (str.substr(-1) != '\n') {
                        str += '\n';
                    }

                    var prev = el.previousSibling;
                    while (prev && prev.nodeType == 3 && PHP.trim(prev.nodeValue) == '') {
                        prev = prev.previousSibling;
                    }
                    if (prev && !(prev.tagName && (prev.tagName.match(contTag) || prev.tagName == 'BR'))) {
                        str = '\n' + str;
                    }

                } else if (el.tagName == 'BR') {
                    str += '\n';
                }
                v += str;
                break;
        }
        el = el.nextSibling;
    }
    return v;
}

export const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

export const renderSwipedInput = ({ type, placeholder, defaultValue, onChange, label }) => (
    <div className="swipper-input">
        <input
            type={type}
            placeholder={placeholder || " "}
            defaultValue={defaultValue}
            onChange={onChange}
        />
        <span>{label}</span>
    </div>
)