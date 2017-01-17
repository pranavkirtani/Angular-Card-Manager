var myApp=angular.module("myApp",['cardManager']);

myApp.controller('testController',function($scope){

    this.open=function (){
        alert("open function was passed to the card manager by test controller")
    }

    this.delete=function (){
        alert("delete function was passed to the card manager by test controller")
    }

    this.print=function (){
        alert("print function was passed to the card manager by test controller")
    }


    this.data=[{
        "title":"cardamon tea",
        "description":"this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week,this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
        "background_image":"/images/1.jpg",
        "icon":"/images/icon1.png"
        },

    {
        "title":"honey tea",
        "description":"this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
        "background_image":"/images/2.jpg",
        "font_color":"#7d7575",
        "icon":"/images/icon2.png"
    },
    {
        "title":"lemon tea",
        "description":"this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
        "background_image":"/images/3.jpg",
            "font_color":"#7d7575",
            "icon":"/images/icon1.png"
    },

    {
        "title":"choclate tea",
        "description":"this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
        "background_image":"/images/4.jpg",
            "font_color":"#7d7575",
            "icon":"/images/icon2.png"
    },
    {
        "title":"regular tea",
        "description":"this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
        "background_image":"/images/5.jpg",
            "font_color":"#7d7575",
            "icon":"/images/icon1.png"
    },

    {
        "title":"masala tea",
        "description":"this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
        "background_image":"/images/6.jpg",
            "font_color":"#7d7575",
            "icon":"/images/icon2.png"
    },
    {
        "title":"dry tea",
        "description":"this is the best tea in the world to drink,this is considered the best teat to drink at anytime of the day or week",
        "background_image":"/images/7.jpg",
            "font_color":"#7d7575"
    }
    ]
})