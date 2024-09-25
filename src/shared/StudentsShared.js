import axios from "axios";

const studentsShared = {
  async getAllStudents(batch) {
    try {
     
      if(batch==="All Batches")
      {
        let response = await axios.get(
          `http://localhost:3001/api/v1/students`
        );
        return response;
      }
      else{
        let response = await axios.get(
          `http://localhost:3001/api/v1/students?BATCH=${batch}`
        );
        return response;
      }
      
    } catch (error) {
      throw error;
    }
  },

  preprocessDataByBatch(data) {
    const result = {
      batchData: {
        feePaidByStudent: {},
        scholarships: {},
        loansAndOthers: {},
        actualPay: {},
        remBalance: {},
        AllBatches:[]
      }
    };

    data.forEach((eachItem) => {
      const { student: studentData, sch } = eachItem;

      // --- Batch-based data ---
      if (sch && studentData.BATCH) {
        const batchKey = studentData.BATCH;
      

        if (!result.batchData.AllBatches.includes(batchKey)) {
          result.batchData.AllBatches.push(batchKey); // Use 'AllBatches'
        }
  

        if (!result.batchData.feePaidByStudent[batchKey]) {
          result.batchData.feePaidByStudent[batchKey] = 0;
        }
        result.batchData.feePaidByStudent[batchKey] += sch.TotalFeePaid || 0;

        if (!result.batchData.scholarships[batchKey]) {
          result.batchData.scholarships[batchKey] = 0;
        }
        result.batchData.scholarships[batchKey] += sch.TotalSch || 0;

        if (!result.batchData.loansAndOthers[batchKey]) {
          result.batchData.loansAndOthers[batchKey] = 0;
        }
        result.batchData.loansAndOthers[batchKey] += sch.OtherSch || 0;

        if (!result.batchData.actualPay[batchKey]) {
          result.batchData.actualPay[batchKey] = 0;
        }
        result.batchData.actualPay[batchKey] += sch.ActualPay || 0;

        if (!result.batchData.remBalance[batchKey]) {
          result.batchData.remBalance[batchKey] = 0;
        }
        result.batchData.remBalance[batchKey] += sch.RemainingBalance || 0;
      }

     
    });

    return result;
  },
  preprocessDataByCategory(data)
  {
    const result = {
      categoryData: {
        gender: {},
        caste: {},
        casteFee: {},
        feePaidByStudent: {},
        scholarships: {},
        loansAndOthers: {},
        actualPay: {},
        remBalance: {}
      },
    };

    data.forEach((eachItem) => {
      const { student: studentData, sch } = eachItem;
      
      // --- Category-based data ---
      if (studentData.Category) {
        const categoryKey = studentData.Category;

        // Gender Distribution
        if (!result.categoryData.gender[studentData.Gender]) {
          result.categoryData.gender[studentData.Gender] = 0;
        }
        result.categoryData.gender[studentData.Gender]++;

        // Caste Distribution
        if (!result.categoryData.caste[categoryKey]) {
          result.categoryData.caste[categoryKey] = 0;
        }
        result.categoryData.caste[categoryKey]++;

        // Caste Fee Distribution
        if (sch && sch.TotalFeePaid) {
          if (!result.categoryData.casteFee[categoryKey]) {
            result.categoryData.casteFee[categoryKey] = 0;
          }
          result.categoryData.casteFee[categoryKey] += sch.TotalFeePaid;
        }

        if (sch && sch.TotalFeePaid){
          if (!result.categoryData.feePaidByStudent[categoryKey]) {
            result.categoryData.feePaidByStudent[categoryKey] = 0;
          }
          result.categoryData.feePaidByStudent[categoryKey] += sch.TotalFeePaid || 0;
  
        }
        if (sch && sch.TotalSch){
          if (!result.categoryData.scholarships[categoryKey]) {
            result.categoryData.scholarships[categoryKey] = 0;
          }
          result.categoryData.scholarships[categoryKey] += sch.TotalSch || 0;
  
        }
        if (sch && sch.OtherSch){
          if (!result.categoryData.loansAndOthers[categoryKey]) {
            result.categoryData.loansAndOthers[categoryKey] = 0;
          }
          result.categoryData.loansAndOthers[categoryKey] += sch.OtherSch || 0;
  
        }
        if (sch && sch.ActualPay){
          if (!result.categoryData.actualPay[categoryKey]) {
            result.categoryData.actualPay[categoryKey] = 0;
          }
          result.categoryData.actualPay[categoryKey] += sch.ActualPay || 0;
  
        }
        if (sch && sch.RemainingBalance){
          if (!result.categoryData.remBalance[categoryKey]) {
            result.categoryData.remBalance[categoryKey] = 0;
          }
          result.categoryData.remBalance[categoryKey] += sch.RemainingBalance || 0;
        }

        
        
        
       
        
      }
    });

    return result;

  }
};

export default studentsShared;
