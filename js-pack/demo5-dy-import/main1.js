if(true){
    import('./data').then(m => {
        console.log('in main1' + m.data)
    })
    import('./data2').then(m => {
        console.log('in main1' + m.data)
})
}