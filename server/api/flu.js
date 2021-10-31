const fetch = require("node-fetch");

module.exports = async (req, res) => {
  let err = (e) => {
    console.error(e);
    res.json({
      error: "Could not fetch Flu (Influenza) API information.",
      response: e,
    });
  };

  const week = req.params["week"];
  const fluName = req.params["name"];
  let data = await fetch("https://disease.sh/v3/influenza/cdc/USPHL")
    .then((raw) => raw.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      err(e);
    });

  let weekData = data.data.find((e) => e.week === week);
  let flu = Object.keys(weekData).find((c) => c.includes(fluName));
  let totalCases = data.data.map((d) => d[flu]).reduce((u, v) => u + v);
  let totalTests = data.data.map((d) => d.totalTests).reduce((u, v) => u + v);

  res.json({
    cases: {
      overall: totalCases,
      thisWeek: weekData[flu],
    },
    totalTests: {
      overall: totalTests,
      thisWeek: weekData.totalTests,
    },
    lastUpdated: data.updated,
  });
};
