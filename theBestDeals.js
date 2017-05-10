// var totalPhoneBill = function(phoneUsage) {
//     var splitPhoneUsage = phoneUsage.split(',');
//
//     const costPerCall = 2.75;
//     const costSms = 0.65;
//
//     var listOfUsage = [];
//     var call = [];
//     var sms = [];
//
//     for (var x = 0; x < splitPhoneUsage.length; x++) {
//         listOfUsage.push(splitPhoneUsage[x]);
//
//         if (listOfUsage[x].includes('sms')) {
//             sms.push(listOfUsage['sms']);
//         } else if (listOfUsage[x].includes('call')) {
//             call.push(listOfUsage['call']);
//         }
//     }
//
//     var totalPhoneBill = (sms.length * costSms) + (call.length * costPerCall);
//
//     return 'R' + totalPhoneBill;
// }
//
// console.log(totalPhoneBill('call,sms,call,sms,sms'));
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
