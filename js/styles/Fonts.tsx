const type = {
    bold: 'AvenirNext-Bold',
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
        lineHeight: 44,
        letterSpacing: -0.31,
    },
    label: {
        fontFamily: type.base,
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    button: {
        fontFamily: type.medium,
        fontSize: 15,
    },
};
