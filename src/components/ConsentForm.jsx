import React from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import logo from "../assets/logo.png";
import director from "../assets/director.png";

const ConsentForm = ({ studentName, studentId, isDisabled }) => {
  const today = new Date().toLocaleDateString();

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontFamily: "Times-Roman",
    },
    header: {
      textAlign: "center",
      marginBottom: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 16,
      marginTop: 5,
    },
    date: {
      fontSize: 12,
      textAlign: "right",
      marginBottom: 20,
    },
    body: {
      fontSize: 12,
      lineHeight: 1.5,
      marginTop: 50,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 10,
      marginTop: 450,
    },
    signatureFooter: {
      position: "absolute",
      bottom: 75,
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 10,
    },
    signature: {
      textAlign: "center",
      height: 35,
    },
    logoImage: {
      position: "absolute",
      height: 40,
      width: 40,
      top: -5,
      left: 7,
    },
    dir: {
      position: "absolute",
      bottom: 0,
    },
  });

  const ConsentDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image src={logo} style={styles.logoImage} />
          <Text style={styles.title}>
            Rajiv Gandhi University of Knowledge and Technologies
          </Text>
          <Text style={styles.subtitle}>Finance Office</Text>
        </View>

        <Text style={styles.date}>Date: {today}</Text>

        <Text style={styles.body}>To Whom It May Concern,</Text>

        <Text style={styles.body}>
          This is to certify that Mr./Ms. {studentName}, bearing the Student ID
          number {studentId}, has successfully cleared all outstanding financial
          dues to the university as of {today}. The undersigned certifies that
          the student has met all financial obligations as per university
          policies and no further dues are pending. This financial clearance is
          issued at the student's request for official record purposes.
        </Text>
        <View style={styles.signatureFooter}>
          <Image src={director} style={styles.signature} />
        </View>
        <View style={styles.footer}>
          <View style={styles.signature}>
            <Text>Director Signature</Text>
          </View>
          <View style={styles.signature}>
            <Text>Finance Head Signature</Text>
          </View>
          <View style={styles.signature}>
            <Text>Finance Office Seal</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1 style={{ color: "#3f51b5" }}>
        {!isDisabled
          ? "No Due Certificate"
          : `There are active dues.Please clear to generate No Due Form`}
      </h1>
      <div
        style={{
          border: "1px solid #3f51b5",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p style={{ fontWeight: "bold", color: "#3f51b5" }}>
          Student Name: {studentName}
        </p>
        <p style={{ fontWeight: "bold", color: "#3f51b5" }}>
          Student ID: {studentId}
        </p>
      </div>
      {!isDisabled && (
        <PDFViewer style={{ width: "100%", height: "500px" }}>
          <ConsentDocument />
        </PDFViewer>
      )}
    </div>
  );
};

export default ConsentForm;
