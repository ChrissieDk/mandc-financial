import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { CommissionEntry } from "../Types";

// Register custom fonts
Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: 300,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: 400,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
      fontWeight: 500,
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Roboto",
    padding: 30,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#123C28",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: 700,
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: "#123C28",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 6,
    color: "#495057",
  },
  table: {
    display: "flex",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#dee2e6",
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
    alignItems: "center",
    minHeight: 24,
  },
  tableRowHeader: {
    backgroundColor: "#e9ecef",
  },
  tableCol: {
    paddingVertical: 2,
    paddingHorizontal: 3,
  },
  tableColRegion: { width: "7%" },
  tableColBrokerage: { width: "18%" },
  tableColPolicyNumber: { width: "12%" },
  tableColSurname: { width: "12%" },
  tableColAmountDue: { width: "8%" },
  tableColCommType: { width: "8%" },
  tableColStatus: { width: "7%" },
  tableColLoadDate: { width: "10%" },
  tableColSettlementDate: { width: "10%" },
  tableColPremium: { width: "8%" },
  tableCellHeader: {
    fontSize: 8,
    fontWeight: 700,
    color: "#495057",
  },
  tableCell: {
    fontSize: 7,
    color: "#212529",
  },
  totalRow: {
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: "#123C28",
    paddingTop: 8,
    marginTop: 8,
  },
  totalLabel: {
    width: "90%",
    textAlign: "right",
    paddingRight: 10,
    fontWeight: 700,
    color: "#123C28",
    fontSize: 12,
  },
  totalValue: {
    width: "10%",
    fontWeight: 700,
    color: "#123C28",
    fontSize: 12,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: "center",
    color: "#6c757d",
    fontSize: 10,
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    right: 30,
    fontSize: 10,
    color: "#6c757d",
  },
});

interface PdfDocGenerateProps {
  commissions: CommissionEntry[];
  totalCommission: number;
  uniqueBrokerages: string[];
}

const ItemsPerPage = 15;

const PdfDocGenerate: React.FC<PdfDocGenerateProps> = ({
  commissions,
  totalCommission,
  uniqueBrokerages,
}) => {
  const TableHeader = () => (
    <View style={[styles.tableRow, styles.tableRowHeader]}>
      <View style={[styles.tableCol, styles.tableColRegion]}>
        <Text style={styles.tableCellHeader}>Region</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColBrokerage]}>
        <Text style={styles.tableCellHeader}>Brokerage</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColPolicyNumber]}>
        <Text style={styles.tableCellHeader}>Policy Number</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColSurname]}>
        <Text style={styles.tableCellHeader}>Surname</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColAmountDue]}>
        <Text style={styles.tableCellHeader}>Amount Due</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColCommType]}>
        <Text style={styles.tableCellHeader}>Comm Type</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColStatus]}>
        <Text style={styles.tableCellHeader}>Status</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColLoadDate]}>
        <Text style={styles.tableCellHeader}>Load Date</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColSettlementDate]}>
        <Text style={styles.tableCellHeader}>Settlement Date</Text>
      </View>
      <View style={[styles.tableCol, styles.tableColPremium]}>
        <Text style={styles.tableCellHeader}>Premium</Text>
      </View>
    </View>
  );

  return (
    <Document>
      {Array.from(
        { length: Math.ceil(commissions.length / ItemsPerPage) },
        (_, i) => (
          <Page key={`page_${i}`} size="A4" style={styles.page}>
            {i === 0 && (
              <>
                <View style={styles.header}>
                  <Image style={styles.logo} src="/api/placeholder/50/50" />
                  <Text style={styles.headerText}>Commission Report</Text>
                </View>
                <Text style={styles.title}>Summary</Text>
                <Text style={styles.subtitle}>
                  Total Commission: R {totalCommission.toFixed(2)}
                </Text>
                <Text style={styles.subtitle}>
                  Number of Brokerages: {uniqueBrokerages.length}
                </Text>
              </>
            )}

            <View style={styles.table}>
              <TableHeader />
              {commissions
                .slice(i * ItemsPerPage, (i + 1) * ItemsPerPage)
                .map((comm, index) => (
                  <View style={styles.tableRow} key={index}>
                    <View style={[styles.tableCol, styles.tableColRegion]}>
                      <Text style={styles.tableCell}>{comm.REGION}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.tableColBrokerage]}>
                      <Text style={styles.tableCell}>{comm.BROKERAGE}</Text>
                    </View>
                    <View
                      style={[styles.tableCol, styles.tableColPolicyNumber]}
                    >
                      <Text style={styles.tableCell}>{comm.POLICY_NUMBER}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.tableColSurname]}>
                      <Text style={styles.tableCell}>{comm.PH_SURNAME}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.tableColAmountDue]}>
                      <Text style={styles.tableCell}>
                        R {comm.AMOUNT_DUE.toFixed(2)}
                      </Text>
                    </View>
                    <View style={[styles.tableCol, styles.tableColCommType]}>
                      <Text style={styles.tableCell}>{comm.COMM_TYPE}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.tableColStatus]}>
                      <Text style={styles.tableCell}>{comm.POLICY_STATUS}</Text>
                    </View>
                    <View style={[styles.tableCol, styles.tableColLoadDate]}>
                      <Text style={styles.tableCell}>{comm.LOAD_DATE}</Text>
                    </View>
                    <View
                      style={[styles.tableCol, styles.tableColSettlementDate]}
                    >
                      <Text style={styles.tableCell}>
                        {comm.SETTLEMENT_DATE}
                      </Text>
                    </View>
                    <View style={[styles.tableCol, styles.tableColPremium]}>
                      <Text style={styles.tableCell}>
                        R {comm.PREMIUM.toFixed(2)}
                      </Text>
                    </View>
                  </View>
                ))}
            </View>

            {i === Math.ceil(commissions.length / ItemsPerPage) - 1 && (
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total Commission:</Text>
                <Text style={styles.totalValue}>
                  R {totalCommission.toFixed(2)}
                </Text>
              </View>
            )}

            <Text style={styles.footer}>
              Generated on {new Date().toLocaleDateString()}
            </Text>
            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `Page ${pageNumber} of ${totalPages}`
              }
              fixed
            />
          </Page>
        )
      )}
    </Document>
  );
};

export default PdfDocGenerate;
