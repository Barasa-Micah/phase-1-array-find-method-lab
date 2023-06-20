// code your solution here

const record = [
    {year:'2018',result:'N/A'},
    {year:'2017',result:'N/A'},
    {year:'2016',result:'N/A'},
    {year:'2015',result:'W'},
    {year:'2014',result:'N/A'},
    {year:'2013',result:'L'},
    {year:'2012',result:'N/A'},
    {year:'2011',result:'N/A'},
    {year:'2010',result:'N/A'},
    {year:'2009',result:'N/A'},
    {year:'2008',result:'N/A'},
    {year:'2007',result:'N/A'},
    {year:'2006',result:'N/A'},
    {year:'2005',result:'N/A'}
]
// function superbowlWin(record){
//     for(let i=0; i<record.length;i++){
//         if(record ==='W'){
//             return 2015;
//         }
//     }
//     return undefined;
// }
function superbowlWin(record) {
    for (let i = 0; i < record.length; i++) {
      if (record[i].result === 'W') {
        return record[i].year;
      }
    }
    return undefined;
  }
  

console.log(superbowlWin(record));