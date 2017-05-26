global class Demo02Controller {
    @AuraEnabled
    global static List<Account> getAccounts(String limitResults){
        Integer lmt = Integer.valueOf(limitResults);
        if(lmt == null
           || lmt == 0
           || lmt < 0){
               lmt = 10;
           }
        return [Select Id, Name From Account order by Name limit :lmt];
    }
    
    @AuraEnabled
    global static List<Contact> getContactsByAccount(Id accountId){
        return [Select Id, FirstName, LastName, Birthdate, Email 
                From Contact Where AccountId = :accountId];
    }
}