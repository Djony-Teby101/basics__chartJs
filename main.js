// simple json data.

const jsonData={
    "sales":[
        {"mois": "janvier", 'ventes':300000},
        {"mois": "fevrier", 'ventes':200000},
        {"mois": "mars", 'ventes':340000},
        {"mois": "avril", 'ventes':220000},
        {"mois": "mai", 'ventes':380000},
    ]
};

// extraire la donnée de jsonData.

const mois=jsonData.sales.map(item => item.mois);
const ventes=jsonData.sales.map(item=> item.ventes)
// console.log(ventes);

// Creer une chart.

const ctx=document.getElementById('myChart').getContext('2d');
const chart=new Chart(ctx,{
    type:'bar',
    data:{
        labels:mois,
        datasets:[{
            label:'Sales-ventes',
            data:ventes,
            backgroundColor: 'rgba(75,192,192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options:{
        y:{
            beginAtZero:true
        }
    }
})
// console.log(ctx)