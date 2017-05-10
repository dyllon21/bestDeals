var quantity = ['1','2','3','5',];

var price = ['3','7','10','14.50'];


    module.exports = function(quantity){
    // var pricePerAvo = []

      var splitAvoCosts = price.split(',');
    const pricePerAvo = [];

    var numberOfAvos = [];
    var costs = [];

    for (var i = 0; i < splitAvoCosts.length; i++) {
        numberOfAvos.push(splitAvoCosts[i]);

        if (numberOfAvos[i].includes('costs')) {
            costs.push(numberOfAvos['costs']);
            costs.push(pricePerAvo['costs']);

        }
        else if (numberOfAvos[i].includes('costs')) {
        //     return costs;
        }
    };
    var pricePerAvo = (costs.length);
    return 'R' + pricePerAvo;
};


// console.log(pricePerAvo('costs'));
