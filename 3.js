const maptojson = (map) => {
    return JSON.stringify(Object.fromEntries(map));
};

const myMap = new Map(
    [
        ['name', 'Ivan'],
        ['age', 21],
        ['city', 'NY']
    ]
);

const JSONSTRING = maptojson(myMap);
console.log(JSONSTRING);

const jsonData = [
    {
        "id": 1,
        "name": "John Doe",
        "age": 30,
        "department": "Engineering"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 28,
        "department": "Marketing"
    }
];

function jsonToCSV(jsondata) {
    let csv = '';
    const headers = Object.keys(jsondata[0]);
    csv += headers.join(',') + '\n';
    jsondata.forEach(obj => {
        const values = headers.map(header => obj[header]);
        csv += values.join(',') + '\n';
    });

    return csv

}

const csvData = jsonToCSV(jsonData);
console.log(csvData)
