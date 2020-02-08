import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

export default () => {
    const [keyboardVisible, setVisible] = useState(false);

    function dismissKeyboard() {
        Keyboard.dismiss();
        setVisible(false);
    }

    useEffect(() => {
        function onKeyboardDidShow() {
            setVisible(true);
        }

        function onKeyboardDidHide() {
            setVisible(false);
        }

        Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
        Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);

        return () => {
            Keyboard.removeListener('keyboardDidShow', onKeyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', onKeyboardDidHide);
        };
    }, []);

    return [keyboardVisible, dismissKeyboard];
};
