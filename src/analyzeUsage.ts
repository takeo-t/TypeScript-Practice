type UsageLog = {
    userId: string;
    date: string; // "YYYY-MM-DD"形式
    usageMinutes: number;
  };

type DateRange = {
startDate: string; // "YYYY-MM-DD"形式
endDate: string;   // "YYYY-MM-DD"形式
};

type UsageSummary = {
userId: string;
totalUsageMinutes: number;
};

const logs: UsageLog[] = [
    { userId: "user1", date: "2025-01-01", usageMinutes: 120 },
    { userId: "user2", date: "2025-01-02", usageMinutes: 60 },
    { userId: "user1", date: "2025-01-03", usageMinutes: 90 },
    { userId: "user2", date: "2025-01-05", usageMinutes: 30 },
    { userId: "user1", date: "2025-01-06", usageMinutes: 150 },
  ];
  
  const range: DateRange = { startDate: "2025-01-01", endDate: "2025-01-05" };
  
//   const result = analyzeUsage(logs, range);
  // 期待する結果
  // [
  //   { userId: "user1", totalUsageMinutes: 210 }, // 120 + 90
  //   { userId: "user2", totalUsageMinutes: 90 },  // 60 + 30
  // ]
  

//   function analyzeUsage(logs: UsageLog[], range: DateRange): UsageSummary[] {
//     // 実装を記述してください
//   }
  