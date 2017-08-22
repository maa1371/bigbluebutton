import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import { withRouter } from 'react-router';
import styles from './../styles.scss';

const intlMessages = defineMessages({
  unreadPlural: {
    id: 'app.userlist.chatlistitem.unreadPlural',
    description: 'singular aria label for new message',
  },
  unreadSingular: {
    id: 'app.userlist.chatlistitem.unreadSingular',
    description: 'plural aria label for new messages',
  },
});

const propTypes = {
  isSingleMessage: PropTypes.bool.isRequired,
  unreadCounter: PropTypes.number.isRequired,
  intl: PropTypes.object.isRequired,
};

const defaultProps = {
};

const ChatUnreadMessages = props => (
  <div
    className={styles.unreadMessages}
    aria-label={props.isSingleMessage
      ? props.intl.formatMessage(intlMessages.unreadSingular, { 0: props.unreadCounter })
      : props.intl.formatMessage(intlMessages.unreadPlural, { 0: props.unreadCounter })}
  >
    <div className={styles.unreadMessagesText} aria-hidden="true">
      {props.unreadCounter}
    </div>
  </div>
);

ChatUnreadMessages.propTypes = propTypes;
ChatUnreadMessages.defaultProps = defaultProps;

export default withRouter(injectIntl(ChatUnreadMessages));
