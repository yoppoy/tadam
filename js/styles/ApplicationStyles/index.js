import Fonts from '../Fonts';
import Metrics from '../Metrics';
import Colors from '../Colors';

const Index = {
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.darkBlue,
    },
    container: {
        flex: 1,
        paddingTop: Metrics.baseMargin,
        backgroundColor: Colors.transparent,
    },
    section: {
        margin: Metrics.section,
        padding: Metrics.baseMargin,
    },
    sectionText: {
        ...Fonts.style.base,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
    },
    subtitle: {
        padding: Metrics.smallMargin,
        marginBottom: Metrics.smallMargin,
        marginHorizontal: Metrics.smallMargin,
    },
    titleText: {
        ...Fonts.style.h2,
        fontSize: 14,
    },
    sectionBanner: {
        fontFamily: Fonts.type.AvenirB,
        fontSize: 10,
        letterSpacing: 0.8,
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        color: Colors.violet,
        backgroundColor: 'rgba(88,86,214, 0.2)',
        marginBottom: 8,
        marginTop: 12,
    },
    title: {
        ...Fonts.style.title,
        fontSize: 40,
        color: 'white',
    },
    centerAlign: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonIcon: {
        fontSize: 20,
        marginLeft: 4,
        marginRight: 15,
        color: 'white',
    },
    formButton: {
        backgroundColor: Colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
        margin: 0,
    },
    formCheckBoxText: {
        color: 'white',
        fontFamily: Fonts.type.base,
    },
    formIcon: {
        padding: 20,
        fontSize: 20,
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
};

export default Index;
