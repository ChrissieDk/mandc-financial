import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { CommissionEntry } from "../Types";

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,

    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 6,
  },
  table: {
    display: "flex",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "#f0f0f0",
    padding: 5,
  },
  tableCol: {
    width: "10%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
  },
  tableCellHeader: {
    fontSize: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCell: {
    fontSize: 8,
    textAlign: "center",
  },
});

interface PdfDocGenerateProps {
  commissions: CommissionEntry[];
  totalCommission: number;
  uniqueBrokerages: string[];
}

const PdfDocGenerate: React.FC<PdfDocGenerateProps> = ({
  commissions,
  totalCommission,
  uniqueBrokerages,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Commission Report</Text>
      <Text style={styles.subtitle}>
        Total Commission: R {totalCommission.toFixed(2)}
      </Text>
      <Text style={styles.subtitle}>
        Number of Brokerages: {uniqueBrokerages.length}
      </Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Region</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Brokerage</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Policy Number</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Load Date</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Status</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Premium</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Settlement Date</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Surname</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Amount Due</Text>
          </View>
          <View style={styles.tableColHeader}>
            <Text style={styles.tableCellHeader}>Comm Type</Text>
          </View>
        </View>
        {commissions.map((comm, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.Region}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.Brokerage}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.POLICY_NUMBER}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.LOAD_DATE}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.POLICY_STATUS}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.PREMIUM}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.SETTLEMENT_DATE}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.PH_SURNAME}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                R {comm.AMOUNT_DUE.toFixed(2)}
              </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{comm.COMM_TYPE}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default PdfDocGenerate;
