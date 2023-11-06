import { ConfigProvider, theme } from 'antd';
import React from 'react';

import type { FCC } from '@/types';

const ThemeProvider: FCC = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00695c',
          colorSuccessText: 'hsl(var(--success))',
          colorTextSecondary: 'var(--secondary-color)',
          colorWarningText: 'hsl(var(--warning))',
          colorErrorText: 'hsl(var(--error))',
          colorInfoText: 'hsl(var(--info))',
          fontFamily: `Nunito, sans-serif`,
          fontSize: 16,
          colorText: 'var(--fg)',
        },
        components: {
          Typography: {
            margin: 0,
            colorText: 'var(--fg)',
            colorSuccess: 'hsl(var(--success))',
            colorWarning: 'hsl(var(--warning))',
            colorError: 'hsl(var(--error))',
            colorInfo: 'hsl(var(--info))',
            colorTextSecondary: 'var(--secondary-color)',
          },
          Input: {
            activeBorderColor: 'var(--primary-color)',
            hoverBorderColor: 'var(--primary-color)',
            activeShadow: 'var(--primary-color)',
          },
          Modal: {},
          Button: {
            controlHeightLG: 48,
            primaryColor: '#fff',
            colorLink: '#00695c',
            colorLinkHover: '#00695c',
            colorBgBase: '#00695c',
            colorPrimary: '#00695c',
          },
          Spin: {},
          Table: {},
          Select: {
            optionSelectedColor: 'var(--primary-color)',
            optionSelectedBg: 'transapent',
            multipleItemBorderColor: 'var(--primary-color)',
          },
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
