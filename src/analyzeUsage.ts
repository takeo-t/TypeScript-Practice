type UsageLog = {
    userId: string;
    date: string; // "YYYY-MM-DD"形式
    usageMinutes: number;
  };
  
  type DateRange = {
    startDate: string;
    endDate: string;
  };
  
  type UsageSummary = {
    userId: string;
    totalUsageMinutes: number;
  };
  
  function analyzeUsage(logs: UsageLog[], range: DateRange): UsageSummary[] {
    // 配列resultの初期化
    const result: UsageSummary[] = [];
    
    // logsの中からrangeのstartDateとendDateの範囲内のログを抽出
    const filteredLogs = logs.filter((log) => {
      return log.date >= range.startDate && log.date <= range.endDate;
    });
    
    // 抽出したログをuserIdごとに集計し、resultに追加
    const userIds = Array.from(new Set(filteredLogs.map((log) => log.userId)));
    userIds.forEach((userId) => {
      const totalUsageMinutes = filteredLogs
        // userIdごとにログを抽出
        .filter((log) => log.userId === userId)
        // usageMinutesを合計
        .reduce((acc, log) => acc + log.usageMinutes, 0);
      result.push({ userId, totalUsageMinutes });
    });
  
    return result;
  }
  
  // 動作確認
  const logs: UsageLog[] = [
    { userId: "user1", date: "2025-01-01", usageMinutes: 120 },
    { userId: "user2", date: "2025-01-02", usageMinutes: 60 },
    { userId: "user1", date: "2025-01-03", usageMinutes: 90 },
    { userId: "user2", date: "2025-01-05", usageMinutes: 30 },
    { userId: "user1", date: "2025-01-06", usageMinutes: 150 },
  ];
  
  const range: DateRange = { startDate: "2025-01-01", endDate: "2025-01-05" };
  
  const result = analyzeUsage(logs, range);
  console.log(result);
  
  // 期待する出力
  // [
  //   { userId: "user1", totalUsageMinutes: 210 }, // 120 + 90
  //   { userId: "user2", totalUsageMinutes: 90 },  // 60 + 30
  // ]
  