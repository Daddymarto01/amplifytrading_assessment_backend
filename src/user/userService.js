var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {
    

    return new Promise(function checkURL(resolve, reject) {   
            userModel.find({})
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(false);
                });
        // userModel.find({}, function returnData(error, result) {
 
        //     if (error) {
        //         reject(false);
        //     } else {
         
        //         resolve(result);
        //     }
        // });
 
    });
 
 }

 module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
 
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
         
        userModelData.save()
        .then(() => {
            resolve(true);
          console.log('Document saved successfully');
        })
        .catch((err) => {
            reject(false);
          console.error('Error saving document:', err);
        });
        
        // userModelData.save(function resultHandle(error, result) {
 
        //     if (error) {
        //         reject(false);
        //     } else {
        //         resolve(true);
        //     }
        // });
 
    });
 
 }


 module.exports.updateUserDBService = (id,userDetails) => {     
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id,userDetails)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(false);
                });

        // userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
            
        //   if(error)
        //   {
        //         reject(false);
        //   }
        //   else
        //   {
        //      resolve(result);
        //   }
        // });
 
    });
 }

 module.exports.removeUserDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndDelete(id)
        .then(result => {
            resolve(result);
        })
        .catch(error => {
            reject(false);
        });

        // userModel.findByIdAndDelete(id, function returnData(error, result) {
 
        //   if(error)
        //   {
        //         reject(false);
        //   }
        //   else
        //   {
        //      resolve(result);
        //   }          
        // });
    });
 
 }