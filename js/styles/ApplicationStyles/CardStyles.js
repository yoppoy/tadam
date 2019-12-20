import {Colors, Fonts} from '../index';

const CardStyles = {
    card: {
        backgroundColor: 'white',
        marginBottom: 8,
        elevation: 5,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'rgba(0,0,0,0.1)',
        borderRadius: 8,
    },
    cardContainer: {
        backgroundColor: Colors.grey,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        padding: 8,
    },
    cardSection: {
        padding: 16,
    },
    cardNameText: {
        fontFamily: Fonts.type.Avenir,
        lineHeight: 18,
        color: '#242A37',
        fontSize: 13,
        letterSpacing: 0.37,
    },
    cardStatsText: {
        fontFamily: Fonts.type.AvenirDB,
        color: '#242A37',
        lineHeight: 18,
        opacity: 0.64,
        fontSize: 11,
        letterSpacing: 0.57,
    },
};

export default CardStyles;
