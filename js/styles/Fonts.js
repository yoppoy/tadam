const type = {
    bold: 'BaiJamjuree-Bold',
    medium: 'BaiJamjuree-Medium',
    base: 'BaiJamjuree-Regular',
    sofia: 'SofiaProSemiBold',
    Avenir: 'AvenirNext-Regular',
    AvenirB: 'AvenirNext-Bold',
    AvenirDB: 'AvenirNext-DemiBold',
};

const size = {
    h1: 28,
    h2: 26,
    h3: 24,
    h4: 22,
    h5: 20,
    h6: 19,
    input: 18,
    regular: 17,
    medium: 14,
    small: 12,
    tiny: 8.5,
};

const style = {
    normal: {
        fontFamily: type.base,
        fontSize: size.regular,
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium,
    },
};

export default {
    type,
    size,
    style,
    title: {
        fontFamily: type.bold,
        fontSize: 40,
        lineHeight: 40,
    },
    label: {
        fontFamily: type.regular,
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    button: {
        fontFamily: type.medium,
        fontSize: 15,
    },
};
