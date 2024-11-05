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
          Layout: {
            headerHeight: 40,
            headerPadding: 0,
            headerBg: "#292929",
            bodyBg: "#292929",
            siderBg: "#292929",
          },
          Menu: {
            colorPrimary: "#E95929",
            // itemSelectedBg: "rgba(19, 178, 204, 0.2)",
            itemHoverBg: "rgba(19, 178, 204, 0.2)",
            itemHoverColor: "#E95929",
            itemHeight: 35,
            subMenuItemBg: "#333333",
            colorBgContainer: "#292929",
          },
          Form: {
            labelColor: "#292561",
            verticalLabelPadding: "0 0 0px !important",
            paddingContentVertical: 30,
          },
          Input: {
            addonBg: "#383838",
            paddingInline: 5,
            colorBgContainerDisabled: "#555555",
            colorTextDisabled: "#000000",
            colorBgContainer: "#2b2a2a",
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
          Popover: {
            colorBgElevated: "#1a1a1a",
          },
          Dropdown: {
            paddingBlock: 1,
          },
          Descriptions: {
            itemPaddingBottom: 4,
          },

          Switch: {
            trackHeight: 14,
            trackMinWidth: 30,
            handleSize: 10,
            colorBgBase: "red",
          },

          Checkbox: {
            colorBgContainer: "#2b2a2a",
            controlInteractiveSize: 16,
            colorPrimary: "#2cac87",
            colorPrimaryHover: "#6ec7ad",
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
          Progress: {
            remainingColor: "#8c8c8c",
          },
          Button: {
            primaryShadow: "none",
            colorBgContainerDisabled: "rgba(0, 0, 0, 0.04)",
            paddingInline: 8,
            lineWidthFocus: 2,
          },
          Drawer: {
            paddingLG: 10,
          },
          Breadcrumb: {
            itemColor: "white",
            linkColor: "white",
            separatorColor: "white",
          },

          Typography: {
            lineHeight: 1.35,
          },
          Modal: {
            colorBgMask: "rgba(255,255,255,0.1)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
