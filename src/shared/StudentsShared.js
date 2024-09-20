import axios from "axios";

const studentsShared = {
  async getALlStudents() {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/v1/students?BATCH=2008"
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  preprocessData(data) {
    const result = {
      gender: {},
      caste: {},
      casteFee: {},
      feePaidByStudent: 0,
      scholarships: 0,
      loansAndOthers: 0,
      actualPay: 0,
      remBalance: 0,
    };

    data.forEach((student) => {
      const { student: studentData, fee, sch, loan } = student;
      // Extract gender data
      if (!result.gender[studentData.Gender]) {
        result.gender[studentData.Gender] = 0;
      }
      result.gender[studentData.Gender]++;

      // Extract caste data

      if (!result.caste[studentData.Category]) {
        result.caste[studentData.Category] = 0;
      }
      result.caste[studentData.Category]++;

      if (sch && sch.TotalFeePaid) {
        // Extract total fee paid by each caste
        if (!result.casteFee[studentData.Category]) {
          result.casteFee[studentData.Category] = 0;
        }
        result.casteFee[studentData.Category] += sch.TotalFeePaid;
      }

      // Extract scholarships data
      if (sch && sch.TotalSch) {
        result.scholarships += sch.TotalSch;
      }
      if (sch && sch.OtherSch) {
        result.loansAndOthers += sch.OtherSch;
      }
      if (sch && sch.FeePaidbyTheStudent) {
        result.feePaidByStudent += sch.FeePaidbyTheStudent;
      }
      if (sch && sch.ActualPay) {
        result.actualPay += sch.ActualPay;
      }
      if (sch && sch.RemainingBalance) {
        if (sch.RemainingBalance > 0) {
          result.remBalance += sch.RemainingBalance;
        } else {
          result.feePaidByStudent -= sch.RemainingBalance;
        }
      }
    });
    return result;
  },
};

export default studentsShared;
