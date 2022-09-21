
export default ()=>({
    isLoading:true,
    entries:[
    {
        id: new Date().getTime(),
        date:new Date().toDateString(),
        text:'paraforo formado aleatoriamente no significa nada',
        picture:null
    },
    {
        id: new Date().getTime() + 1000,
        date:new Date().toDateString(),
        text:'Otro paraforo formado aleatoriamente no significa nada',
        picture:null
    },    
    {
        id: new Date().getTime() + 2000,
        date:new Date().toDateString(),
        text:'Tercer paraforo formado aleatoriamente no significa nada',
        picture:null
    },     
]
})