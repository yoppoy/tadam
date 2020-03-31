import {NavigationProp, CommonActions} from '@react-navigation/native';
import {ParamListBase} from '@react-navigation/routers';

export const navigationReset = (navigation: NavigationProp<ParamListBase>, routeName: string) => {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                {
                    name: routeName,
                },
            ],
        }));
};
