import { css, cx } from '@emotion/css';
import { isString } from 'lodash';
import React, { PropsWithChildren } from 'react';

import { GrafanaTheme, TimeZone, dateTimeFormat } from '@grafana/data';

import { useTheme, stylesFactory } from '../../../themes';

interface Props {
  timestamp: number;
  timeZone: TimeZone | undefined;
  className?: string;
}

export const TimeZoneOffset: React.FC<PropsWithChildren<Props>> = (props) => {
  const theme = useTheme();
  const { timestamp, timeZone, className } = props;
  const styles = getStyles(theme);

  if (!isString(timeZone)) {
    return null;
  }

  return (
    <>
      <span className={cx(styles.offset, className)}>{formatUtcOffset(timestamp, timeZone)}</span>
    </>
  );
};

export const formatUtcOffset = (timestamp: number, timeZone: TimeZone): string => {
  const offset = dateTimeFormat(timestamp, {
    timeZone,
    format: 'Z',
  });

  if (offset === '+00:00') {
    return 'UTC';
  }
  return `UTC${offset}`;
};

const getStyles = stylesFactory((theme: GrafanaTheme) => {
  const textBase = css`
    font-weight: normal;
    font-size: ${theme.typography.size.sm};
    color: ${theme.colors.textWeak};
    white-space: normal;
  `;

  return {
    offset: css`
      ${textBase};
      color: ${theme.colors.text};
      background: ${theme.colors.bg2};
      padding: 2px 5px;
      border-radius: 2px;
      margin-left: 4px;
    `,
  };
});
