import { logEvent } from '@firebase/analytics';
import MaterialLink from '@material-ui/core/Link';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import { FirebaseContext } from '../Firebase';

const Link: React.FC<
  LinkProps & { to: string | null; onClick?: () => void }
> = (props) => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const { to, onClick } = props;
    if (onClick) {
      event.preventDefault();
      onClick();
    } else if (to === '') {
      history.goBack();
    } else if (/^http(s?):\/\//.test(to)) {
      logEvent(firebase.analytics, 'screen_view', {
        app_name: 'external_link',
        firebase_screen: to,
        firebase_screen_class: 'Link',
      });
      window.open(to); // eslint-disable-line
    } else {
      history.push(to);
    }
  };

  return (
    <RouterLink component={MaterialLink} {...props} onClick={handleClick} />
  );
};

export default Link;
