const fetch = require('node-fetch');

module.exports = async (req, res) => {
    let err = e => {
        console.error(e);
        res.json({
            error: 'Could not fetch COVID API information.',
            response: e
        });
    }
    let data = await fetch('https://disease.sh/v3/covid-19/all')
        .then(raw => raw.json())
        .then(data => {return data})
        .catch(e => {
            err(e);
        });
    
    res.json({
        cases: {
            overall: data.cases,
            today: data.todayCases,
            perOneMillion: data.casesPerOneMillion
        },
        recovered: {
            overall: data.recovered,
            today: data.todayRecovered,
            perOneMillion: data.recoveredPerOneMillion
        },
        deaths: {
            overall: data.deaths,
            today: data.todayDeaths,
            perOneMillion: data.deathsPerOneMillion
        },
        critical: {
            overall: data.critical,
            perOneMillion: data.criticalPerOneMillion
        },
        tests: {
            overall: data.tests,
            perOneMillion: data.testsPerOneMillion
        },
        lastUpdated: data.updated
    });
}