import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const ApplicationStyles = {
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
        ...Fonts.style.normal,
        paddingVertical: Metrics.doubleBaseMargin,
        marginVertical: Metrics.smallMargin,
        textAlign: 'center',
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
    sectionTitle: {
        ...Fonts.style.h4,
        padding: Metrics.smallMargin,
        marginTop: Metrics.smallMargin,
        marginHorizontal: Metrics.baseMargin,
        borderWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
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
};

export default ApplicationStyles;
