#User Rest Service
> Rest service written in java to use during angular demo


#Methods
>  Url, http method and description of each exposed web method

* /user       [GET] -  ** returns an array containing all users
* /user{id}   [GET] -  ** returns an object containing the user with id {id}
* /user{id}   [DELETE] - ** deletes user with id {id}, returns array of all users
* /user{user} [POST] - ** create user {user}, returns array of all UserSvc

#Set up
> Requires java 8

* from command prompt run 'java -jar user_rest_service.jar'


#Usage

* service will start up on port 8080
* use your browser or the postman chrome plugin to access service

  
