import {
    scale as hScale,
    verticalScale as vScale,
    moderateScale as mScale,
} from 'react-native-size-matters';

function scale(value, max) {
    let back = hScale(value);

    if (max && back > value) {
        back = max;
    }
    return (back);
}

function verticalScale(value, max) {
    let back = vScale(value);

    if (max && back > value) {
        back = max;
    }
    return (back);
}

function moderateScale(value, max) {
    let back = mScale(value);

    if (max && back > value) {
        back = max;
    }
    return (back);
}

export {
    scale,
    verticalScale,
    moderateScale,
};
