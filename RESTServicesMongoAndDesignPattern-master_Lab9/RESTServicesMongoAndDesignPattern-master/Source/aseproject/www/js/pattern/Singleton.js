/**
 * Created by Lema Chowdary on 11/5/15.
 */

var URLRetriever = (function(){

  var instance;

  function init(){
    //Singleton
    //Private method

    function privateMethod(){
      console.log("Currently in private method");
    };

    var urlTesting = "http://restservicesmongolab.eu-gb.mybluemix.net/";

    return {
      urlString:function(){
        return urlTesting+"api";
      }
    }
  };

  return {
    getInstance: function(){
      if(!instance){
        instance =init()
      }
      return instance
    }
  };


})();
