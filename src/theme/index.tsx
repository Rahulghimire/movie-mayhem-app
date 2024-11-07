import { ConfigProvider, theme } from "antd";

interface Props {
  children?: React.ReactNode;
}

export const AppThemeProvider: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontFamily: "Poppins",
          colorTextPlaceholder: "gray",
          fontSize: 13,
          borderRadius: 6,
          colorPrimary: "#1CADE3",
          controlHeight: 22,
          boxShadow: "none",
        },
        components: {
          Form: {
            verticalLabelPadding: "0 0 0px !important",
            paddingContentVertical: 30,
          },
          Input: {
            addonBg: "#383838",
            paddingInline: 5,
            colorBgContainerDisabled: "#555555",
            colorTextDisabled: "#000000",
            colorBgContainer: "#2b2a2a",
            controlHeight: 32,
          },
          Select: {
            optionPadding: "5px 12px",
            paddingSM: 5,
            paddingXS: 5,
            colorTextPlaceholder: "gray",
            colorTextQuaternary: "#6b7280cf",
            zIndexPopup: 1050,
            optionActiveBg: "#000000",
            optionSelectedBg: "#292929",
            boxShadow: "none",
            controlOutline: "none",
            colorTextDisabled: "#000e0",
            colorErrorOutline: "none",
            colorBgContainer: "#2b2a2a",
          },
          Card: {
            actionsLiMargin: "4px",
            padding: 10,
            paddingLG: 10,
          },
          Dropdown: {
            paddingBlock: 1,
          },
          Descriptions: {
            itemPaddingBottom: 4,
          },

          Table: {
            headerSplitColor: "none",
            cellPaddingInline: 5,
            borderColor: "#000000",
            headerBorderRadius: 0,
            selectionColumnWidth: 40,
            cellPaddingBlock: 2,
            rowSelectedHoverBg: "#161717",
            rowSelectedBg: "#232424",
            colorBgContainer: "#383838",
            headerBg: "#555555",
          },
          Pagination: {
            itemActiveBg: "#292561",
            colorPrimary: "#ffffff",
            colorPrimaryHover: "#827FBC",
            colorBgContainer: "#2b2a2a",
          },
          Divider: {
            lineWidth: 1,
          },

          Button: {
            primaryShadow: "none",
            colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
            paddingInline: 8,
            lineWidthFocus: 2,
            controlHeight: 26,
          },

          Drawer: {
            paddingLG: 10,
          },

          Typography: {
            lineHeight: 1.35,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
