const type = {
    bold: 'BaiJamjuree-Bold',
    medium: 'BaiJamjuree-Medium',
    base: 'BaiJamjuree-Regular',
    sofia: 'SofiaProSemiBold',
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
    button: {
        fontFamily: type.medium,
        fontSize: 15,
    },
};
